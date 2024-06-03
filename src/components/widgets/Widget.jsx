import { ArrowUp, CircleDollarSign, ShoppingCart, UserRound, Wallet } from "lucide-react"
import PropTypes from 'prop-types';

const Widget = ({ type }) => {

  let data;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon:  <UserRound className="w-9 h-9 self-end p-2 rounded-md bg-teal-300 text-teal-700"/>
      }
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all order",
        icon:  <ShoppingCart className="w-9 h-9 self-end p-2 rounded-md bg-red-300 text-red-700"/>
      }
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon:  <CircleDollarSign className="w-9 h-9 self-end p-2 rounded-md bg-green-300 text-green-700"/>
      }
      break;
    case "balance":
      data = {
        title: "MY BALANCE",
        isMoney: true,
        link: "See details",
        icon:  <Wallet className="w-9 h-9 self-end p-2 rounded-md bg-orange-300 text-orange-700"/>
      }
      break;
  
    default:
      break;
  }

  return (
    <div className="bg-card col-span-4 sm:col-span-2 xl:col-span-1 flex justify-between p-5 shadow-lg rounded-xl">
        {/* LEFT WIDGET */}
        <div className="flex flex-col justify-between gap-4">
          <span className="font-bold text-sm text-card-foreground">{data.title}</span>
          <span className="text-2xl font-light text-card-foreground/60">{data.isMoney && "$"} {amount}</span>
          <span className="text-sm border-b w-max border-b-gray-400 text-card-foreground/90">{data.link}</span>
        </div>
        {/* RIGHT WIDGET */}
        <div className="flex flex-col justify-between">
          <span className="flex items-center gap-1 text-sm text-green-500">
            <ArrowUp className="w-4 h-4"/>
            {diff} %
          </span>
          {data.icon}
        </div>
    </div>
  )
}

Widget.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Widget