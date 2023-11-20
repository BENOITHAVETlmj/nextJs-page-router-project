import React from "react";
import Heading from "@/components/Heading";
import Link from "next/link";

export default function HomePage() {
  console.log('[HomePage] rendering');  
    return (
        <>
          <Heading>
            Indie gamer
          </Heading>
          <p className="pb-2">
            Only the best indie games, reviewed for you.
          </p>
          <div className="bg-white border shadow w-80 hover:shadow-xl sm:w-full">
            <Link href="/reviews/stardew-valley" className="flex flex-col sm:flex-row">
            <img src="/images/stardew-valley.jpg" alt="" width={320} height={180} className="rounded-t sm:rounded-l sm:rounded-r-none"/>
            <div className="p-2">
            <h2 className="font-semibold font-orbitron py-1 text-center">Stardew-valley</h2>
            </div>
            </Link>
          </div>
        </>
    );
  } 