

import {NavLink , Link , useNavigate} from "react-router-dom"
import { Home , Bell , User , Settings , Moon , LogOut} from "lucide-react"
import { cn } from "cn"
import { Button } from "@/components/ui/button";
const links = [
  {to:"/" , label:"Home" , icon:<Home />},
  {to: "/notifications" , label:"Notifications" , icon:<Bell />},
  {to: "/profile" , label:"Profile" , icon:<User />},
  {to: "/settings" , label:"Setting" , icon:<Settings />},
 
]
const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <aside className=" sticky top-0 hidden h-screen flex-col gap-1 overflow-y-auto p-4 lg:flex">
      <Link  className="w-fit bg-linear-to-br from-[#e0357f] to-[#7a4dfd] bg-clip-text px-3.5 pb-4 text-3xl font-bold tracking-tight text-transparent">
        Vibrant
      </Link>
      <nav className="flex flex-col gap-1">
      {links.map((link)=>(
        <NavLink key={link.to}
        to={link.to}
         className={({isActive})=>
          cn(
            "flex h-12 items-center gap-3 rounded-2xl px-3.5 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-muted",
            isActive && "bg-muted font-bold text-[#b3245f] dark:text-[#ff5fa2]"
          )
         }>
         {link.icon}
         <span>{link.label}</span>
          
        </NavLink>
      ))}
      </nav>
      <Button
        onClick={()=> navigate("/")}
        className="mt-3 h-12 rounded-2xl bg-linear-to-br from-[#e0357f] to-[#7a4dfd] text-base font-bold text-white hover:opacity-90 capitalize">
        new post
      </Button>
      
      <button className="flex items-center gap-3 h-12 rounded-2xl px-3.5 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-muted capitalize">
        <Moon />
        dark mode
      </button>
      <button className="flex items-center gap-3 h-12 rounded-2xl px-3.5 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-muted capitalize">
        <LogOut />
        log out
      </button>
    </aside>
  )
}

export default Sidebar
