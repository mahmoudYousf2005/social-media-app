import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const AppLayout = () => {
  return (
    <div className="min-h-screen  lg:grid lg:grid-cols-[250px_minmax(0,1fr)]">
      <Sidebar />
      <main className="min-w-0 lg:border-l">
        <div className="mx-auto max-w-2xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AppLayout
