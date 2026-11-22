import { Link } from "react-router-dom"
import FormField from "@/components/auth/FormField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { signInSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "@/components/layout/AuthLayout";
import { useMutation } from "@tanstack/react-query";
import { getErrorMessage } from "@/api/client";
import { signin } from "@/api/auth";
const SignIn = () => {
  
  const {
    register,
    handleSubmit,
    formState:{errors }
  } = useForm({resolver: zodResolver(signInSchema)})

  const {mutate , isPending , isError , error} = useMutation({
    mutationFn: signin,
    onSuccess: (res) => console.log(res)
  })

  const onSubmit = (data)=>{
    mutate(data)
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

        {isError && (
          <p role="alert" className="text-sm text-destructive">{getErrorMessage(error)}</p>
        )}

        <Button
        disabled={isPending}
          type="submit"
          className="w-full h-12 rounded-xl bg-linear-to-br from-[#e0357f] to-[#7a4dfd] font-bold text-lg cursor-pointer">
          Sign in
        </Button>
      </form>
    </AuthLayout>
  )
}

export default SignIn
