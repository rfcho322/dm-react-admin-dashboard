import { BarChartBig, Bell, BookText, CircleUserRound, CreditCard, LayoutDashboard, LogOut, Settings, SquareActivity, Store, Truck, User2 } from "lucide-react"
import ListItem from "./ListItem"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DarkModeContext } from "@/context/darkModeContext"


const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="flex-1 min-h-screen bg-background border-r border-r-gray-300/50 pb-12">
        {/* LOGO */}
        <Link to="/">
            <div className="flex justify-center items-center h-14 border-b-2 border-b-gray-300/50">
                <span className="text-xl font-bold text-purple-500">Desert Moon</span>
            </div>    
        </Link>
        {/* <hr className="h-0 border border-gray-200"></hr> */}
        <div className="p-4">
            <ul>
                <p className="text-xs font-bold text-gray-400 mt-4 mb-1">MAIN</p>
                <Link to="/">
                    <ListItem text="Dashboard">
                        <LayoutDashboard className="w-5 h-5 text-purple-500"/>
                    </ListItem>
                </Link>
                <p className="text-xs font-bold text-gray-400 mt-4 mb-1">LISTS</p>
                <Link to="/users">
                    <ListItem text="Users">
                        <User2 className="w-5 h-5 text-purple-500"/>
                    </ListItem>
                </Link>
                <Link to="/products">
                    <ListItem text="Product">
                        <Store className="w-5 h-5 text-purple-500"/>
                    </ListItem>
                </Link>
                <ListItem text="Orders">
                    <CreditCard className="w-5 h-5 text-purple-500"/>
                </ListItem>
                <ListItem text="Delivery">
                    <Truck className="w-5 h-5 text-purple-500"/>
                </ListItem>
                <p className="text-xs font-bold text-gray-400 mt-4 mb-1">USEFUL</p>
                <ListItem text="Stats">
                    <BarChartBig className="w-5 h-5 text-purple-500"/>
                </ListItem>
                <ListItem text="Notifications">
                    <Bell className="w-5 h-5 text-purple-500"/>
                </ListItem>
                <p className="text-xs font-bold text-gray-400 mt-4 mb-1">SERVICE</p>
                <ListItem text="System Health">
                    <SquareActivity className="w-5 h-5 text-purple-500"/>
                </ListItem>
                <ListItem text="Logs">
                    <BookText className="w-5 h-5 text-purple-500"/>
                </ListItem>
                <ListItem text="Settings">
                    <Settings className="w-5 h-5 text-purple-500"/>
                </ListItem>
                <p className="text-xs font-bold text-gray-400 mt-4 mb-1">USER</p>
                <ListItem text="Profile">
                    <CircleUserRound className="w-5 h-5 text-purple-500"/>
                </ListItem>
                <ListItem text="Logout">
                    <LogOut className="w-5 h-5 text-purple-500"/>
                </ListItem>
            </ul>
        </div>
        <div className="flex items-center m-3">
            <div className="w-5 h-5 rounded bg-white m-1 border border-purple-600 cursor-pointer"
                onClick={()=> dispatch({type: "LIGHT"})}    
            >
            </div>
            <div className="w-5 h-5 rounded bg-neutral-950 m-1 border border-purple-600 cursor-pointer"
                onClick={()=> dispatch({type: "DARK"})}
            >
            </div>
        </div>
    </div>
  )
}

export default Sidebar