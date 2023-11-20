import Link from "next/link";

export default function NavBar () {
    return (
        <nav>
        <ul className="flex gap-2">
          <li>
            <Link className="font-orbitron font-bold text-orange-800 hover:underline" href="/">Indie gamer</Link>
          </li>
          <li className="ml-auto">
            <Link className="font-orbitron text-orange-800 hover:underline" href="/reviews">Reviews</Link>
          </li>
          <li>
            {/* prefetch attribut disables data page prefetching cause in production it is set to true by default */}
            <Link className="font-orbitron text-orange-800 hover:underline" href="/about" prefetch={false}>About</Link>
          </li>
        </ul>
      </nav>
    )
}