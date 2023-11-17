import Link from "next/link";
import React from "react";

export default function HomePage() {
    return (
        <>
          <h1>
            Reviews
          </h1>
          <ul>
            <li>
             <Link href="/reviews/hollow-night">Hollow-night</Link>
            </li>
            <li>
             <Link href="/reviews/stardew-valley">Stardew-valley</Link>
            </li>
           </ul>
        </>
    );
  } 