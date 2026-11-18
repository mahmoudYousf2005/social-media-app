import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import BottomNav from "./BottomNav"
import RightPanel from "./RightPanel"
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)_330px]">
      <Sidebar />
      <main className="min-w-0 lg:border-l lg:pb-0 pb-24">
        <div className="mx-auto max-w-2xl">
          <Outlet />
        </div>
      </main>

      <RightPanel />
      <BottomNav />
    </div>
  )
}

export default AppLayout
