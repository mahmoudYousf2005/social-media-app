import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
const SignUp = () => {
  return (
    <div className="p-5 min-h-screen max-w-md mx-auto">
      <Link className="bg-linear-to-br from-[#e0357f] to-[#7a4dfd] bg-clip-text text-3xl font-bold tracking-tight text-transparent">vibrant</Link>
      <h1 className="text-3xl font-bold mt-4">Create your account</h1>
      <p className="text-muted-foreground">Join vibrant and start Sharing</p>
      <form onSubmit={(e)=> e.preventDefault()} className="py-5 space-y-5">
        <fieldset className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="name"/>
          </div>
          <div>  
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="username"/>
          </div>
        </fieldset>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com"/>
        </div>
        <div>
          <Label htmlFor="date">Date of birth</Label>
          <Input id="date" type="date"/>
        </div>
        <fieldset>
          <legend className="text-sm font-medium mb-1.5">Gender</legend>
           <div className="grid grid-cols-2 gap-2">
            {["male", "female"].map((g) => (
              <label
                key={g}
                className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-muted
                 text-sm capitalize has-checked:ring-2 has-checked:ring-[#b3245f] dark:has-checked:ring-[#ff5fa2]"
              >
                <input type="radio" name="gender" value={g} className="accent-[#b3245f]"  />
                {g}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="At least 8 Characterc"/>
        </div>
        <div>
          <Label htmlFor="confirm">Confirm password</Label>
          <Input id="confirm" type="password" placeholder="Repeat your password"/>
        </div>
        
        <Button
        type="submit"
        className="w-full h-12 rounded-xl bg-linear-to-br from-[#e0357f] to-[#7a4dfd] font-bold text-lg cursor-pointer">
          Create account</Button>
        <p className="text-muted-foreground">Already have an account? <Link to={"/signin"} className="font-bold text-[#b3245f]">Sign in</Link></p>
      </form>
    </div>
  )
}

export default SignUp
