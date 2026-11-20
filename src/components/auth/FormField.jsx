import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
const FormField = ({id , label , type , placeholder}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} className="h-11 rounded-xl"/>
    </div>
  )
}

export default FormField
