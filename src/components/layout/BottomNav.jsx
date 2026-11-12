import { NavLink } from "react-router-dom"
import { Home , Plus  , Bell , User  } from "lucide-react"
import { cn } from "cn"
function NavItem({to , end , label , icon:Icon , badge = 1}) {
  return(
    <NavLink 
      to={to}
      end={end}
      aria-label={label}
      className={({isActive}) =>
      cn("relative flex h-12 w-14 items-center justify-center rounded-xl text-muted-foreground",
        isActive && "text-[#b3245f] dark:text-[#ff5fa2]"
      )
      
      }
    >
      <Icon className="size-6" aria-hidden="true"/>
      {badge > 0 && (
        <span className="absolute top-0.5 right-2 h-[18px] min-w-[18px] flex items-center justify-center rounded-full bg-[#b3245f] px-1 text-[11px] font-bold text-white">
          {badge}</span>
      )}
    </NavLink>
  )
}

const BottomNav = () => {
  return (
    <nav
    ria-label="Main"
     className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t bg-background px-3 pt-2 
     pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <NavItem to={"/"} label="Home" icon={Home} end />
      <button
      type="button"
      aria-label="New Post"
      className="flex h-11 w-[52px] items-center justify-center rounded-2xl bg-linear-to-br from-[#e0357f] to-[#7a4dfd] text-white"
      ><Plus/></button>
      <NavItem to={"/notifications"} label="Notification" icon={Bell}  />
      <NavItem to={"/profile"} icon={User} label="Profile"/>
    </nav>
  )
}

export default BottomNav
