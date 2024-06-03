import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { ProfileForm } from "./Form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { Camera } from "lucide-react"
import { useParams } from "react-router-dom"

const New = () => {
  const [imageUrl, setImageUrl] = useState('');
  const { users } = useParams();

  const handleImageChange = (url) => {
    setImageUrl(url);
  };

  // console.log(imageUrl);

  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-6 bg-background space-y-4">
          <Navbar />
          {/* TOP */}
          <div className="mx-5 p-5">
            <h1 className="font-bold text-foreground">ADD NEW {users === 'products' ? 'PRODUCT' : users === 'users' ? 'USER' : null}</h1>
          </div>
          {/* BOTTOM */}
          <div className="bg-card rounded-xl shadow-lg mx-5 p-10">
            <div className="grid grid-cols-3 gap-5">
              {/* LEFT */}
              <div className="flex justify-center col-span-1">
                <Avatar className="w-60 h-60 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AvatarImage
                      src={imageUrl}
                      alt="avatar"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <AvatarFallback>
                    <Camera className="w-20 h-20 text-gray-400" />
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* RIGHT */}
              <div className="col-span-2">
                <ProfileForm onImageChange={handleImageChange}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New