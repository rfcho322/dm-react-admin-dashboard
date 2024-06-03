import ChartComponent from "@/components/chart/Chart";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import TableComponent from "@/components/table/Table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowUp, BriefcaseBusiness, CreditCard, EllipsisVertical } from "lucide-react";

const categories = ["Jan", "Apr", "Jul", "Oct"];
const seriesData = [40, 55, 60, 70];

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
];

const Single = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-6 bg-background">
          <Navbar />
          <div className="grid grid-cols-3 gap-4 p-5">
            {/* CONGRATULATORY WIDGET */}
            <div className="flex col-span-3 sm:col-span-1 justify-between bg-card rounded-xl shadow-lg px-5 pt-5">
              <div className="flex flex-col gap-4 pb-5">
                <div>
                  <h5 className="text-card-foreground text-lg">Congratulations, Regina!</h5>
                  <p className="text-gray-500 text-sm">Best Seller of the month</p>
                </div>
                <div>
                  <h6 className="text-purple-600 font-bold">$56.94k</h6>
                  <p className="text-gray-500 text-sm">80% of target</p>
                </div>
                <Button className="text-sm w-fit bg-purple-500 hover:bg-purple-600">
                  View sales
                </Button>
              </div>
              <div className="self-end">
                <img src="/prize-light.png" alt="trophy" width="90" height="140"
                  className="min-w-24"
                />
              </div>
            </div>
            {/* DETAILS */}
            <div className="relative flex flex-col bg-card gap-2 col-span-3 sm:col-span-2 shadow-lg rounded-xl px-5 py-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-card-foreground">User Details</h1>
                <div className="flex gap-2">
                  <Button variant="outline" className="bg-blue-500 hover:bg-blue-600 hover:text-white text-white">Edit</Button>
                  <Button variant="outline" className="bg-red-100 hover:bg-red-600 hover:text-white text-red-500 transition-colors ease-in duration-200">Suspended</Button>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/avatar.jpg" alt="avatar"/>
                  <AvatarFallback>DM</AvatarFallback>
                </Avatar>
                {/* DETAILS */}
                <div className="flex flex-col flex-wrap gap-2 p-2">
                  <h2 className="text-lg text-gray-500">Regina Phalange</h2>
                  {/* DETAIL 1 */}
                  <div className="text-sm">
                    <span className="font-bold text-gray-600 mr-1">Email:</span>
                    <span>reginaphalange@gmail.com</span>
                  </div>
                  {/* DETAIL 2 */}
                  <div className="text-sm">
                    <span className="font-bold text-gray-600 mr-1">Contact:</span>
                    <span>+123-456-789</span>
                  </div>
                  {/* DETAIL 3 */}
                  <div className="text-sm">
                    <span className="font-bold text-gray-600 mr-1">Address:</span>
                    <span>90 Bedford Street, Greenwich Village, New York City</span>
                  </div>
                  {/* DETAIL 4 */}
                  <div className="text-sm">
                    <span className="font-bold text-gray-600 mr-1">Country:</span>
                    <span>USA</span>
                  </div>
                </div>
              </div>
            </div>
            {/* SALES WIDGET */}
            <div className="col-span-3 lg:col-span-1">
              <div className="grid grid-cols-4 gap-5">
                {/* SALES WIDGET 1 */}
                <div className="flex col-span-4 lg:col-span-2 justify-between bg-card rounded-xl shadow-lg p-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <CreditCard className="w-9 h-9 p-2 rounded-md bg-orange-500/20 text-orange-400"/>
                      <EllipsisVertical className="w-4 h-4" />
                    </div>
                    <div>
                      <h6 className="text-gray-500">Revenue</h6>
                      <h3 className="text-gray-600 text-2xl">$42,389</h3>
                    </div>
                    <div className="flex items-center">
                      <ArrowUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-semibold text-green-400">+52.18%</span>
                    </div>
                  </div>
                </div>
                {/* SALES WIDGET 2 */}
                <div className="flex col-span-4 lg:col-span-2 justify-between bg-card rounded-xl shadow-lg px-5 pt-5">
                  <div className="flex flex-col">
                    <h6 className="text-gray-500 text-lg">Profit</h6>
                    <h3 className="text-gray-600 text-2xl">630k</h3>
                    <ChartComponent title="" subtitle="" width="100%" strokeWidth={1} type="bar" categories={categories} seriesData={seriesData} yaxis={false}
                    />
                  </div>
                </div>
                {/* SALES WIDGET 3 */}
                <div className="flex col-span-4 lg:col-span-2 justify-between bg-card rounded-xl shadow-lg p-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <BriefcaseBusiness className="w-9 h-9 p-2 rounded-md bg-blue-500/20 text-blue-400"/>
                      <EllipsisVertical className="w-4 h-4" />
                    </div>
                    <div>
                      <h6 className="text-gray-500">Transactions</h6>
                      <h3 className="text-gray-600 text-2xl">$14,597</h3>
                    </div>
                    <div className="flex items-center">
                      <ArrowUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-semibold text-green-400">+28.14%</span>
                    </div>
                  </div>
                </div>
                {/* SALES WIDGET 4 */}
                <div className="flex col-span-4 lg:col-span-2 justify-between bg-card rounded-xl shadow-lg p-5">
                  <div className="flex flex-col gap-2">
                    <div>
                      <h6 className="text-gray-500">Sales</h6>
                      <h3 className="text-gray-600 text-2xl">482k</h3>
                    </div>
                    <span className="w-fit text-xs font-bold rounded-sm px-2 py-1 bg-sky-100 text-cyan-400">+34%</span>
                    <div>
                      <small className="text-gray-500 text-sm">Sales Target</small>
                      <div className="flex items-center gap-2">
                        <Progress value={78} indicatorColor="bg-cyan-400" className="w-28 h-3 bg-gray-100" />
                        <span className="text-gray-600">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* TABLE */}
            <div className="col-span-2 bg-card rounded-xl shadow-lg">
              <div className="pb-5">
                <div className="px-5 py-3 border-b border-b-foreground rounded-tl-md rounded-tr-md">
                  <h1 className="font-bold text-gray-500">Latest Transactions</h1>
                </div>
                <TableComponent rows={rows}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Single