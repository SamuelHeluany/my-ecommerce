import z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const createProductSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome do produto obrigatório." }),
  description: z
    .string()
    .trim()
    .min(1, { message: "Descrição do produto obrigatória." }),
  price: z.preprocess(
    (val) => (val === "" || val === undefined ? undefined : Number(val)),
    z
      .number({ message: "Preço do produto é obrigatório." })
      .min(0.01, { message: "Preço deve ser maior que R$ 0,00." }),
  ),

  stock: z.preprocess(
    (val) => (val === "" || val === undefined ? undefined : Number(val)),
    z
      .number({ message: "Estoque do produto é obrigatório." })
      .int({ message: "Estoque deve ser um número inteiro." })
      .min(0, { message: "Estoque não pode ser negativo." }),
  ),
  image_url: z
    .instanceof(File, { message: "A imagem é obrigatória." })
    .refine((file) => file.size > 0, "A imagem é obrigatória.")
    .refine((file) => file.size <= MAX_FILE_SIZE, "O tamanho máximo é 5MB.")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Formato de imagem inválido.",
    ),
});

export type CreateProductInput = z.input<typeof createProductSchema>;
export type CreateProductSchema = z.output<typeof createProductSchema>;
