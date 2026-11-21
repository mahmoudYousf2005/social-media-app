import { Link } from "react-router-dom"
import FormField from "@/components/auth/FormField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { signInSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "@/components/layout/AuthLayout";
const SignIn = () => {
  
  const {
    register,
    handleSubmit,
    formState:{errors , isSubmitting}
  } = useForm({resolver: zodResolver(signInSchema)})
  const onSubmit = (data)=>{
    console.log(data)
  }
  return (
    <AuthLayout 
    title="Welcome back"
    subTitle="Sign in to see what your circle is posting."
    footer={<p className="">New here? <Link to="/signup" className="font-bold text-[#b3245f]">Sign up</Link></p>}
    >
    
      <form onSubmit={handleSubmit(onSubmit)} className="py-5 space-y-5">
         {/* Email */}
        <FormField id="email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" 
        register={register("email")} error={errors.email}/>
        {/* password */}
        <FormField id="password" label="Password" type="password" placeholder="Enter your password" autoComplete="current-password" 
        register={register("password")} error={errors.password}/>

        <Button
        disabled={isSubmitting}
          type="submit"
          className="w-full h-12 rounded-xl bg-linear-to-br from-[#e0357f] to-[#7a4dfd] font-bold text-lg cursor-pointer">
          Sign in
        </Button>
      </form>
    </AuthLayout>
  )
}

export default SignIn
