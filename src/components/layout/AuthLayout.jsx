import { Link } from "react-router-dom"
const AuthLayout = ({title , subTitle , children , footer}) => {
  return (
    <div className="p-5 min-h-screen max-w-md mx-auto">
        <Link to="/signin"
            className="bg-linear-to-br from-[#e0357f] to-[#7a4dfd] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
            vibrant
        </Link>
        <h1 className="text-3xl font-bold mt-4">{title}</h1>
        <p className="text-muted-foreground">{subTitle}</p>
        <div>{children}</div>
        <div className="mt-6 text-center text-muted-foreground">{footer}</div>
    </div>
  )
}

export default AuthLayout
