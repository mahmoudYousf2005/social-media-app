import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Image } from "lucide-react"
const PostComposer = () => {
  return (
    <div className=" p-4 rounded-2xl flex items-center border gap-3">
      
      <div className="flex flex-1 min-w-0 gap-2">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted font-bold">
            <h2>YO</h2>
           
        </div>
        <Input 
        placeholder="What's on your mind?"
        className="h-11 flex-1 rounded-full"/>
      </div>
      
      <div className="flex gap-2 items-center shrink-0">
        <button
         type="button"
         aria-label="add photo"
         className="flex size-10 cursor-pointer items-center justify-center rounded-full text-[#b3245f] hover:bg-muted "
        >
            <Image className="size-5"  />
        </button>
        <Button className="cursor-pointer rounded-full bg-linear-to-br from-[#e0357f] to-[#7a4dfd] font-bold text-white hover:opacity-90"
        >Post</Button>
      </div>
      
    </div>
  )
}

export default PostComposer
