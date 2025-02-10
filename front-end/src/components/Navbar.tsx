import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="backdrop-blur-3xl flex justify-between py-[2vh] rounded-xl">
      <span className="px-10">P</span>
      <div>
        <span className="px-10">
          <Link to="/about">About</Link>
        </span>
        <span className="px-10">
          <Link to="/projects">Projects</Link>
        </span>
      </div>
    </div>
  )
}

export default Navbar