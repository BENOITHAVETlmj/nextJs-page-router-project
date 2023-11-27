import React from "react";
import Heading from "@/components/Heading";
import Link from "next/link";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";

export const revalidate = 300;  // revalidat every 300 seconds

export default async function HomePage() {
  const reviews = await getReviews(3);  
  
    return (
        <>
          <Heading>
            Indie gamer
          </Heading>
          <p className="pb-2">
            Only the best indie games, reviewed for you.
          </p>
          <ul className="flex flex-col gap-3">
            {reviews.map((reviews, index) => (
                <li key={reviews.slug} className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full"> 
                  <Link href={`/reviews/${reviews.slug}`} className="flex flex-col sm:flex-row" >
                  <Image src={reviews.image} alt="" width='320' height='180' className="rounded-t" priority={index === 0} />
                    <div className="py-1 text-center sm:px-2 sm:text-left">
                      <h2 className="font-orbitron font-semibold">{reviews.title}</h2>
                      <p className="hidden pt-2 sm:block">{reviews.subtitle}</p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </>
    );
  } 