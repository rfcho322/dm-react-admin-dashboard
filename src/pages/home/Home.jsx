
import ChartComponent from "@/components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widgets/Widget"
import TableComponent from "../../components/table/Table"

const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const seriesData = [80, 50, 45, 50, 49, 60, 70, 91, 100, 101, 102, 103];

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

const Home = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-6 bg-background">
          <Navbar />
          {/* WIDGETS CONTAINER */}
          <div className="grid grid-cols-4 gap-5 p-5">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          {/* FEATURED AND CHART CONTAINER */}
          <div className="grid grid-cols-4 gap-5 px-5 py-1">
            <Featured />
            <div className="bg-card col-span-4 sm:col-span-2 lg:col-span-3 shadow-lg rounded-xl px-5 py-5">
              <ChartComponent title="Last 6 Months (Revenue)" subtitle="" height={370} width="100%" strokeWidth={7} type="area" 
                categories={categories} seriesData={seriesData} yaxis={false}
              />
            </div>
          </div>
          {/* TABLE CONTAINER */}
          <div className="grid grid-cols-4 bg-card rounded-xl shadow-lg m-5">
            <div className="col-span-4 pb-5">
              <div className="px-5 py-3 border-b border-b-foreground rounded-tl-md rounded-tr-md">
                <h1 className="font-bold text-card-foreground">Latest Transactions</h1>
              </div>
              <TableComponent rows={rows}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home