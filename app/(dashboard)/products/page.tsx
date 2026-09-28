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

const ProductsPage = () => {
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
              <TableHead>Imagem do produto</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Açõoes</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductsPage;
