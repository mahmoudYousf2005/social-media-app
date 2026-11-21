import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
const FormField = ({id , label ,  register , error , ...props}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <Input 
        id={id} 
        aria-invalid={!!error}
        aria-describedby={error ?-`${id}-error` : undefined}
        className="h-12 rounded-xl"
        {...register}   
        {...props}   
        />
        {error && (
          <p id={`${id} error`} role="alert" className="text-sm text-destructive">
            {error.message}
          </p>
        )}
    </div>
  )
}

export default FormField
