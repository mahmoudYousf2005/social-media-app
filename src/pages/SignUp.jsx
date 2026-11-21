import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import FormField from "@/components/auth/FormField"
import { useForm } from "react-hook-form"
import { signupSchema } from "@/schemas/auth"
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "@/components/layout/AuthLayout"
const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({resolver: zodResolver(signupSchema)})
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <AuthLayout
      title="Create your account"
      subTitle="Join Vibrant and start sharing."
      footer={
         <>
          Already have an account?{" "}
          <Link to="/signin" className="font-bold text-[#b3245f] dark:text-[#ff5fa2]">
            Sign in
          </Link>
        </>
      }
    >

      <form onSubmit={handleSubmit(onSubmit)} className="py-5 space-y-5">
        {/* Name */}
        <div className="grid gap-4 sm:grid-cols-2">
          
          <FormField id="name" label="Name"  placeholder="name" register={register("name")} error={errors.name} autoComplete="name"/>
          <FormField id="username" label="UserName" placeholder="username" register={register("username")} autoComplete="username" error={errors.username}/>
          
        </div>
        {/* Email */}
        <FormField id="email" label="Email" type="email" placeholder="you@example.com" register={register("email")} autoComplete="email" error={errors.email}/>
        {/* Date */}
        <FormField id="dateOfBirth" label="Date of birth" type="date" register={register("dateOfBirth")} autoComplete="bday" error={errors.dateOfBirth}/>

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
            {errors.gender && (
              <p role="alert" className="text-sm text-destructive">{errors.gender.message}</p>
            )}
          </div>
        </fieldset>
        {/* password */}
        <FormField id="password" label="Password" type="password" placeholder="At least 8 Characterc" register={register("password")}
        autoComplete="new-password" error={errors.password}/>
        {/* Confirm Password */}
        <FormField id="rePassword" label="Confirm password" type="password" placeholder="Repeat your password" register = {register("rePassword")}
        autoComplete="new-password" error={errors.rePassword}/>
        
        <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full h-12 rounded-xl bg-linear-to-br from-[#e0357f] to-[#7a4dfd] font-bold text-lg cursor-pointer">
          Create account</Button>
        
      </form>

    </AuthLayout>
  )
}

export default SignUp
