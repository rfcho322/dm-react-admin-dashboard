import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ArrowDownUp, ChevronLeft, ChevronRight, MoreHorizontal, MoveDown, MoveUp } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Checkbox } from "../ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
// import DATA from "./data";

const rows = [
    {
      id: 1143155,
      product: "Brooks Ghost 15",
      img: "https://m.media-amazon.com/images/I/41Kw1OP+++L._SS47_.jpg",
      customer: "John Smith",
      date: "1 June",
      amount: 109,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Puma Proadapt Alphacat",
      img: "https://m.media-amazon.com/images/I/31z61nzZhuL._SS47_.jpg",
      customer: "Michael Doe",
      date: "1 June",
      amount: 79,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Underarmour Charged Assert 10",
      img: "https://m.media-amazon.com/images/I/31VgIzUTP6L._SS47_.jpg",
      customer: "John Smith",
      date: "1 June",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Nike Air Jordan 1",
      img: "https://m.media-amazon.com/images/I/41FU8WFj5lL._SS47_.jpg",
      customer: "Jane Smith",
      date: "1 June",
      amount: 94.60,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Nike Air Jordan 4 retro",
      img: "https://m.media-amazon.com/images/I/410w4VY8zgL._SS47_.jpg",
      customer: "Harold Carol",
      date: "1 June",
      amount: 307.75,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342455,
      product: "Nike Dunk Hi Retro",
      img: "https://m.media-amazon.com/images/I/310iA7J7UaL._SS47_.jpg",
      customer: "Jude King",
      date: "1 June",
      amount: 109.20,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2362455,
      product: "Adidas Hoops 3.0",
      img: "https://m.media-amazon.com/images/I/41ZOUCvbtOL._SS47_.jpg",
      customer: "Regina Phalange",
      date: "1 June",
      amount: 67.89,
      method: "Online",
      status: "Approved",
    },
];

const columns = [
    {
        id: "select",
        size: 50,
        header: ({ table }) => (
            <Checkbox
                checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
        ),
        enableSorting: false,
    },
    {
        accessorKey: "id",
        enableResizing: false,
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                // column.getIsSorted() === "asc" <== ADD THIS INSIDE toggleSorting() TO GET RID OF DEFAULT SORT
                onClick={() => column.toggleSorting()}
              >
                Invoice ID
                <ArrowDownUp className="ml-3 w-4 h-4 text-gray-400"/>
              </Button>
            )
        },
    },
    {
        accessorKey: "product",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                // column.getIsSorted() === "asc" <== ADD THIS INSIDE toggleSorting() TO GET RID OF DEFAULT SORT
                onClick={() => column.toggleSorting()}
              >
                Product Name
                <ArrowDownUp className="ml-3 w-4 h-4 text-gray-400"/>
              </Button>
            )
        },
        size: 400,
        cell: ({ row }) => (
            <div className="flex gap-2 items-center">
                <Avatar>
                    <AvatarImage src={row.original.img} alt="product image"/>
                <AvatarFallback>PI</AvatarFallback>
                </Avatar>
                <span className="w-fit">{row.original.product}</span>
            </div>
        )
    },
    {
        accessorKey: "customer",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    // column.getIsSorted() === "asc" <== ADD THIS INSIDE toggleSorting() TO GET RID OF DEFAULT SORT
                    onClick={() => column.toggleSorting()}
                >
                    Customer <ArrowDownUp className="ml-3 w-4 h-4 text-gray-400"/>
                </Button>
            )
        },
    },
    {
        accessorKey: "date",
        header: "Date",
        enableSorting: false,
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                // column.getIsSorted() === "asc" <== ADD THIS INSIDE toggleSorting() TO GET RID OF DEFAULT SORT
                onClick={() => column.toggleSorting()}
              >
                Amount
                <ArrowDownUp className="ml-3 w-4 h-4 text-gray-400"/>
              </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));

            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return <div className="text-right">{formatted}</div>
        }
    },
    {
        accessorKey: "method",
        header: "Payment Method",
        size: 250,
        enableSorting: false,
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                // column.getIsSorted() === "asc" <== ADD THIS INSIDE toggleSorting() TO GET RID OF DEFAULT SORT
                onClick={() => column.toggleSorting()}
              >
                Status
                <ArrowDownUp className="ml-3 w-4 h-4 text-gray-400"/>
              </Button>
            )
        },
        cell: ({ row }) => (
            <div className={`text-center text-sm rounded-sm py-1 
                ${row.getValue("status") == 'Approved' ? 'text-green-700 bg-green-300' : 'text-yellow-700 bg-yellow-300' }`}>
                {row.getValue("status")}
              </div>
        )
    },
    {
        id: "actions",
        size: 50,
        enableHiding: false,
        enableResizing: false,
        cell: ({ row }) => {
          const payment = row.original
          const getUserId = row.original.id
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy Invoice ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link to={`/users/${getUserId}`}>
                  <DropdownMenuItem>View</DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
    },
];

// cell: ({ row }) => <div className="text-red-500">{row.getValue("task")}</div>

const DataTable = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(rows);
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 5, //default page size
        });
    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([]);
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        columnResizeMode: "onChange",
        onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
        state: {
        //...
        sorting,
        columnFilters,
        pagination,
        },
    });

    // console.log(table);

  return (
    <div className="bg-card rounded-xl shadow-lg py-5 mx-5">
        <div className="px-5 mb-5">
          <h1 className="font-bold text-gray-500 mb-5">Data Table</h1>
          <Input
            placeholder="Filter product..."
            value={(table.getColumn("product")?.getFilterValue()) ?? ""}
            onChange={(event) =>
              table.getColumn("product")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <Table className="rounded-lg">
            <TableHeader width={table.getTotalSize()}>
            {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} >
                {headerGroup.headers.map((header) => (
                    <TableHead 
                        key={header.id}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`${header.getSize()}px border-r-4 border-r-transparent hover:border-r-gray-300 cursor-col-resize transition-all ease-in duration-400 ${
                        header.column.getIsResizing() ? 'bg-green-200' : "" }`}
                        style={{ width: `${header.getSize()}px` }}>
                        <div className="flex justify-between items-center">
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                            )}
                            <div className="flex items-center">
                                {
                                    {
                                        asc: <MoveUp className="w-auto h-10 p-3 rounded-sm text-green-500" />,
                                        desc: <MoveDown className="w-auto h-10 p-3 rounded-sm text-red-500" />,
                                    }[header.column.getIsSorted()]
                                }
                                {/* {
                                    header.column.getCanSort() && 
                                    <ArrowDownUp className="w-auto h-10 p-3 rounded-sm text-gray-400 cursor-pointer hover:bg-gray-200"
                                        onClick={
                                            header.column.getToggleSortingHandler()
                                        }
                                    />
                                } */}
                            </div>
                        </div>
                    </TableHead>
                    )
                )}
                </TableRow>
            ))}
            </TableHeader>
            <TableBody>
            {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                >
                    {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                    ))}
                </TableRow>
                ))
            ) : (
                <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                </TableCell>
                </TableRow>
            )}
            </TableBody>
            <TableFooter className="bg-transparent">
                <TableRow>
                    <TableCell colSpan={2} className="space-x-2 text-left">
                      {table.getFilteredSelectedRowModel().rows.length} of{" "}
                      {table.getFilteredRowModel().rows.length} row(s) selected.
                    </TableCell>
                    <TableCell colSpan={columns.length} className="space-x-2 text-right">
                    <span>
                        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft className="w-4 h-4"/>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight className="w-4 h-4"/>
                    </Button>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    </div>
  )
}

export default DataTable