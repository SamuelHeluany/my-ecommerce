import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import CreateProduct from "./_components/create-product";
import { getProducts } from "@/app/_data-access/get-products";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ProductsPage = async () => {
  const { data: products } = await getProducts();
  return (
    <div className="w-full bg-sidebar rounded-md my-5">
      <div>
        <div className="flex justify-between p-3">
          <p>TESTE</p>
          <CreateProduct>
            <Button className="bg-[#5A67C0] hover:bg-[#49549e] cursor-pointer">
              <CirclePlus />
            </Button>
          </CreateProduct>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Imagem do produto</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Estoque</TableHead>
              <TableHead>Data de criação</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Dialog>
                    <DialogTrigger
                      render={
                        <button className="cursor-pointer">
                          <Image
                            src={product.image_url}
                            alt={product.name}
                            width={50}
                            height={50}
                            className="rounded-md object-cover"
                          />
                        </button>
                      }
                    />
                    <DialogContent>
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="rounded-md object-cover"
                      />
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.created_at}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.active}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductsPage;
