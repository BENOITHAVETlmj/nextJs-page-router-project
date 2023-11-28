import Link from "next/link";
import React from "react";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";

export const metadata = {
  title: 'Reviews'
}

export const PAGE_SIZE = 6;
 
export default async function ReviewsPage({ searchParams } ) {
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount} = await getReviews(PAGE_SIZE, page);  
  console.log('[reviewsPage] rendering', searchParams);
  
    return (
        <>
          <Heading>
            Reviews
          </Heading>
          <div className="flex gap-2 pb-3">
            {page > 1 && <Link href={`/reviews?page=${page - 1}`} >&lt;</Link>}
            <span>Page {page} of {pageCount}</span>
            <Link href={`/reviews?page=${page + 1}`} >&gt;</Link>
          </div>
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


  function parsePageParam(paramValue) {
    if (paramValue) {
      const page = parseInt(paramValue);
      if (isFinite(page) && page > 0) {
        return page;
      }
    }
    return 1;
  }