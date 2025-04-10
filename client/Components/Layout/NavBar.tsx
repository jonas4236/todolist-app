import { Link } from "react-router"

const NavBar = () => {
  return (
    <>
      <nav className="w-[1140px] mx-auto">
        <div className="flex justify-between text-center">
          <div>
            <Link to={"/"}>
              <img src="https://user-images.githubusercontent.com/69080584/119517399-c6f10280-bda1-11eb-9af9-4bdc197dcd65.png" className="size-16" alt="logo" />
            </Link>
          </div>
          <div>
            <ul className="h-full flex text-center items-center bg-center">
              <li>
                <Link to={"/create"} className="mr-4">
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
