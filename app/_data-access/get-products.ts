import { createClient } from "@/lib/server";

export const getProducts = async () => {
  try {
    const products = await createClient();

    const { data: product, error } = await products
      .from("products")
      .select("*");

    if (error) {
      console.error("Erro ao buscar produtos no supabase.", error);
      return { data: null, error: error.message };
    }
    return { data: product, error: null };
  } catch (error) {
    console.error("Erro inesperado!", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
};
