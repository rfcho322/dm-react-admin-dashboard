import DataTable from "@/components/datatable/DataTable"
import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { Button } from "@/components/ui/button"
import { Link, useParams } from "react-router-dom"

const List = () => {

  const { users } = useParams();

  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-6 bg-background">
          <Navbar />
          <div className="flex justify-between items-center px-5 py-5">
          <h1 className="font-bold text-foreground">ALL {users === 'products' ? 'PRODUCTS' : users === 'users' ? 'USERS' : null}</h1>
          { users === 'products' &&
            <Button asChild
              className="bg-blue-500 hover:bg-blue-600 text-blue-50"
            >
              <Link to={`/${users}/new`}>
                Add Product
              </Link>
            </Button>
          }
          { users === 'users' &&
            <Button asChild
              className="bg-blue-500 hover:bg-blue-600 text-blue-50"
            >
              <Link to={`/${users}/new`}>
                Add User
              </Link>
            </Button>
          }
          </div>
          <DataTable /> 
        </div>
    </div>
  )
}

export default List