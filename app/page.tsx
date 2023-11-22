import React from "react";
import Heading from "@/components/Heading";
import Link from "next/link";
import { getLatestReview } from "@/lib/reviews";

export default async function HomePage() {
  // show the last review
  const latestReview = await getLatestReview();
  
    return (
        <>
          <Heading>
            Indie gamer
          </Heading>
          <p className="pb-2">
            Only the best indie games, reviewed for you.
          </p>
          <div key={latestReview.slug} className="bg-white border shadow w-80 hover:shadow-xl"> 
            <Link href={`/reviews/${latestReview.slug}`}>
              <img src={`/images/${latestReview.slug}.jpg`}alt="" width={320} height={180} className="rounded-t"/>
              <h2 className="font-semibold font-orbitron py-1 text-center">{latestReview.title}</h2>
            </Link>
          </div>
        </>
    );
  } 