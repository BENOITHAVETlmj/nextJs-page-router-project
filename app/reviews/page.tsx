import Link from "next/link";
import React from "react";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: 'Reviews'
}

export default async function ReviewsPage() {
  const reviews = await getReviews();  
  
    return (
        <>
          <Heading>
            Reviews
          </Heading>
          <ul className="flex flex-row gap-3 flex-wrap">
          {
            reviews.map((review)=> (
                <li key={review.slug} className="bg-white border shadow w-80 hover:shadow-xl"> 
                <Link href={`/reviews/${review.slug}`}>
                  <img src={review.image} alt="" width={320} height={180} className="rounded-t"/>
                  <h2 className="font-semibold font-orbitron py-1 text-center">{review.title}</h2>
                </Link>
                </li>
            ))
          }
          </ul>
        </>
    );
  } 