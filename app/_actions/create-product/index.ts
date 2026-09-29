"use server";

import { createClient } from "@/lib/server";
import { createProductSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const createProduct = async (formData: FormData) => {
  const products = await createClient();

  const validatedData = createProductSchema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    image_url: formData.get("image_url"),
  });

  const { image_url, ...productData } = validatedData;

  // Define como a imagem vai para o storage
  const fileExt = image_url.name.split(".").pop();
  const filePath = `products/${crypto.randomUUID()}.${fileExt}`;

  // Faz o upload para o storage
  const { error: uploadError } = await products.storage
    .from("products-images")
    .upload(filePath, image_url, { contentType: image_url.type });

  if (uploadError) {
    console.error("Erro no upload do Storage", uploadError);
    // throw new Error("Falha ao enviar imagens do produto.");
    throw new Error(`Falha ao enviar imagem: ${uploadError.message}`);
  }

  // Pega a URL publica da imagem
  const { data: publicUrlData } = products.storage
    .from("products-images")
    .getPublicUrl(filePath);

  // inserir no banco
  const { error: insertError } = await products.from("products").insert({
    ...productData,
    image_url: publicUrlData.publicUrl,
  });
  if (insertError) {
    console.error("Erro ao criar produto no supabase.", insertError);
    await products.storage.from("products-images").remove([filePath]);
    throw new Error("Falha ao cadastrar o produto.");
  }
  revalidatePath("/products");
};
