"use client";

import { createProduct } from "@/app/_actions/create-product";
import {
  CreateProductInput,
  CreateProductSchema,
  createProductSchema,
} from "@/app/_actions/create-product/schema";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface CreateProductProps {
  children: React.ReactElement;
}

const CreateProduct = ({ children }: CreateProductProps) => {
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateProductInput, unknown, CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      image_url: "",
    },
  });

  const onSubmit = async (data: CreateProductSchema) => {
    try {
      await createProduct(data);
      reset(); // Reseta os campos do formulário
      setOpen(false); // Fecha o modal após enviar
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Criar Produto</DialogTitle>
            <DialogDescription>
              Digite abaixo as informações do produto.
            </DialogDescription>
          </DialogHeader>
          {/* Campo: Título */}
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Nome do produto</FieldLabel>
                <Input
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Nome do produto"
                  autoComplete="off"
                  {...field}
                  className="max-w-80 sm:max-w-90"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Campo: Descrição */}
          <Controller
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  Descrição do produto
                </FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  className="max-w-80 max-h-60 sm:max-w-90 sm:max-h-90 resize-none"
                  aria-invalid={fieldState.invalid}
                  placeholder="Descrição do produto"
                  autoComplete="off"
                />
                <FieldDescription className="text-[13px]">
                  Informe a descrição do produto.
                </FieldDescription>
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          {/* Preço e Estoque lado a lado */}
          <div className="grid grid-cols-2 gap-2 max-w-80 sm:max-w-90">
            {/* Campo: Preço */}
            <Controller
              name="price"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Preço (R$)</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    value={field.value == null ? "" : String(field.value)}
                    type="number"
                    step="0.01"
                    aria-invalid={fieldState.invalid}
                    placeholder="0.00"
                  />
                  {fieldState.invalid && fieldState.error && (
                    <FieldError
                      errors={[{ message: fieldState.error.message }]}
                    />
                  )}
                </Field>
              )}
            />

            {/* Campo: Estoque */}
            <Controller
              name="stock"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Estoque</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    value={field.value == null ? "" : String(field.value)}
                    type="number"
                    aria-invalid={fieldState.invalid}
                    placeholder="0"
                  />
                  {fieldState.invalid && fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          {/* Campo: URL da Imagem */}
          <Controller
            name="image_url"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Imagem do produto</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="https://exemplo.com/imagem.png"
                  autoComplete="off"
                  className="max-w-80 sm:max-w-90"
                  type="file"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Campo Oculto: created_at */}
          <Controller
            name="created_at"
            control={control}
            render={({ field }) => <input type="hidden" {...field} />}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex justify-center items-center w-80 sm:w-90 h-8 text-white bg-[#6E6CDF] text-[16px] cursor-pointer hover:bg-[#716ffc] rounded-sm gap-1"
          >
            {isSubmitting ? (
              <>
                <Spinner className="h-5 w-4 items-center" /> Criando ticket...
              </>
            ) : (
              "Criar Ticket"
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProduct;
