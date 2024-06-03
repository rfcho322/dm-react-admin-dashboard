import { Bell, Expand, Globe, List, MessageSquare, Moon, Search } from "lucide-react"
import NavbarItem from "./NavbarItem"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    // NAVBAR
    <div className="flex items-center text-sm text-foreground h-14 border-b-2 border-b-gray-300/50">
      {/* WRAPPER */}
      <div className="flex justify-between items-center w-full p-5">
        {/* SEARCH */}
        <div className="flex gap-1 items-center rounded-md py-2 px-2 border-[0.5px] border-gray-300/50">
          <input type="text" placeholder="Search..."
             className="outline-none bg-transparent placeholder:text-sm" 
          />
          <Search className="w-5 h-5"/>
        </div>
        {/* ITEMS */}
        <div className="flex">
          <div className="hidden md:flex">
            {/* ITEM 1 */}
            <div className="flex items-center m-4 gap-2">
              <Globe className="w-5 h-5"/>
              English
            </div>
            {/* ITEM 2 */}
            <NavbarItem>
              <Moon className="w-5 h-5" onClick={()=> dispatch({type: "TOGGLE"})}/>
            </NavbarItem>  
            {/* ITEM 3 */}
            <div className="flex items-center m-4">
              <Expand className="w-5 h-5"/>
            </div>
            {/* ITEM 4 */}
            <div className="relative flex items-center m-4">
              <Bell className="w-5 h-5"/>
              <span className="flex justify-center items-center text-[10px] font-bold w-4 h-4 bg-red-500 rounded-full text-white absolute top-0 -right-[5px]">1</span>
            </div>
            {/* ITEM 5 */}
            <div className="relative flex items-center m-4">
              <MessageSquare className="w-5 h-5"/>
              <span className="flex justify-center items-center text-[10px] font-bold w-4 h-4 bg-red-500 rounded-full text-white absolute top-0 -right-[5px]">2</span>
            </div>
            {/* ITEM 6 */}
            <div className="flex items-center m-4">
              <List className="w-5 h-5"/>
            </div>
          </div>
          {/* ITEM 7 */}
          <div className="!flex items-center m-4">
            <Avatar>
              <AvatarImage src="/avatar.jpg" alt="avatar"/>
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar