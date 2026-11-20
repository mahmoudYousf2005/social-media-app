
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import FormField from "@/components/auth/FormField"
import { useForm } from "react-hook-form"
const SignUp = () => {

  const {
    register,
    handleSubmit
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="p-5 min-h-screen max-w-md mx-auto">
      <Link to="/signin"
      className="bg-linear-to-br from-[#e0357f] to-[#7a4dfd] bg-clip-text text-3xl font-bold tracking-tight text-transparent"
      >vibrant</Link>
      <h1 className="text-3xl font-bold mt-4">Create your account</h1>
      <p className="text-muted-foreground">Join vibrant and start Sharing</p>

      <form onSubmit={handleSubmit(onSubmit)} className="py-5 space-y-5">
        {/* Name */}
        <div className="grid gap-4 sm:grid-cols-2">
          
          <FormField id="name" label="Name" type="text" placeholder="name" register={register("name")}/>
          <FormField id="username" label="UserName" type="text" placeholder="username" register={register("username")}/>
          
        </div>
        {/* Email */}
        <FormField id="email" label="Email" type="email" placeholder="you@example.com" register={register("email")}/>
        {/* Date */}
        <FormField id="dateOfBirth" label="Date of birth" type="date" register={register("dateOfBirth")}/>

        {/* Gender */}
        <fieldset>
          <legend className="text-sm font-medium mb-1.5">Gender</legend>
           <div className="grid grid-cols-2 gap-2">
            {["male", "female"].map((g) => (
              <label
                key={g}
                className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-muted
                 text-sm capitalize has-checked:ring-2 has-checked:ring-[#b3245f] dark:has-checked:ring-[#ff5fa2]"
              >
                <input type="radio" {...register("gender")} value={g} className="accent-[#b3245f]"  />
                {g}
              </label>
            ))}
          </div>
        </fieldset>
        {/* password */}
        <FormField id="password" label="Password" type="password" placeholder="At least 8 Characterc" register={register("password")}/>
        {/* Confirm Password */}
        <FormField id="rePassword" label="Confirm password" type="password" placeholder="Repeat your password" register = {register("rePassword")}/>
        
        <Button
        type="submit"
        className="w-full h-12 rounded-xl bg-linear-to-br from-[#e0357f] to-[#7a4dfd] font-bold text-lg cursor-pointer">
          Create account</Button>
        <p className="text-muted-foreground">Already have an account? <Link to="/signin" className="font-bold text-[#b3245f]">Sign in</Link></p>
      </form>

    </div>
  )
}

export default SignUp
