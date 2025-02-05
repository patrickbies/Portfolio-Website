import { Link } from "react-router-dom"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Navbar = () => {
  return (
    <div className="w-full bg-background flex flex-row justify-between h-[7vh] px-[2vw] rounded-lg items-center">
      <Link to="/" className="text-lg font-bold text-foreground">Patrick Bies</Link>
      <div className="flex flex-row gap-10 text-muted-foreground"> 
        <Link className="hover:text-foreground transition-all duration-1" to="/projects">Projects</Link>
        <Link className="hover:text-foreground transition-all duration-1" to="/about">About</Link>
        <Popover>
          <PopoverTrigger>
            <div className="hover:text-foreground transition-all duration-1">Contact</div>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default Navbar