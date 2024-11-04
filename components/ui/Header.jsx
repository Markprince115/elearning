import Image from "next/image"
import LOGO from "../../public/assets/images/logo.png"

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between bg-transparent text-white p-3">
        {/* logo  */}
        <div className=" brightness-200">
            <Image className="w-28" src={LOGO} alt="logo"/>
        </div>

        {/* nav */}
        <nav>
            <ul className="flex items-center justify-center gap-4 text-center cursor-pointer">
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
            </ul>
        </nav>

        {/* auth button */}
        <div>
            <div className="flex gap-2 text-center">
                <button className="px-5 py-2 rounded-md border">Login</button>
                <button className="px-5 py-2 rounded-md border">Register</button>
            </div>
        </div>
    </header>
  )
}

export default Header