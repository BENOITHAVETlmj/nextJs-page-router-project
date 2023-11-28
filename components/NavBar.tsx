import NavLink from "./NavLink";

export default function NavBar () {
    return (
        <nav>
        <ul className="flex gap-2">
          <li className="font-orbitron font-bold"> 
            <NavLink href="/" prefetch>
              Indie gamer
            </NavLink>
          </li>
          <li className="ml-auto">
            <NavLink href="/reviews" prefetch>
             Reviews
            </NavLink>
          </li>
          <li>
            <NavLink href='/about' prefetch={false}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    )
}