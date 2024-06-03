import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import PropTypes from 'prop-types';

function formattedAmount (amount) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return formatted;
}

const TableComponent = ({rows}) => {

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Payment Method</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="font-medium">{row.id}</TableCell>
            <TableCell className="flex items-center gap-4">
              <Avatar>
                  <AvatarImage src={row.img} alt="product image"/>
                <AvatarFallback>PI</AvatarFallback>
              </Avatar>
              {row.product}
            </TableCell>
            <TableCell>{row.customer}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell className="text-right">{formattedAmount(row.amount)}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell>
              <div className={`text-center text-sm rounded-sm py-1 px-2 w-fit
                ${row.status == 'Approved' ? 'text-green-700 bg-green-300' : 'text-yellow-700 bg-yellow-300' }`}>
                {row.status}
              </div>
            </TableCell>
          </TableRow>  
        ))}
      </TableBody>
    </Table>
  )
}

TableComponent.propTypes = {
  rows: PropTypes.array.isRequired,
}

export default TableComponent