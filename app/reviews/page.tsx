import Link from "next/link";
import React from "react";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";

export const metadata = {
  title: 'Reviews'
}

export const dynamic = 'force-dynamic';

export default async function ReviewsPage() {
  const reviews = await getReviews();  
  
    return (
        <>
          <Heading>
            Reviews
          </Heading>
          <ul className="flex flex-row gap-3 flex-wrap">
          {
            reviews.map((review, index)=> (
                <li key={review.slug} className="bg-white border shadow w-80 hover:shadow-xl"> 
                <Link href={`/reviews/${review.slug}`}>
                <Image src={review.image} alt="" width='640' height='360' className="rounded-t" priority={index === 0} />
                  <h2 className="font-semibold font-orbitron py-1 text-center">{review.title}</h2>
                </Link>
                </li>
            ))
          }
          </ul>
        </>
    );
  } 