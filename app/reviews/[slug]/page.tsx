import React from "react";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/review";

export default async function ReviewPage(props) {
  const { params: { slug } } = props
  const review = await getReviews(slug);
    return (
        <>
          <Heading>
          {review.title} 
          </Heading>
          <p className="italic pb-2">{review.date}</p>
          <img src={review.image} alt="" width={600} height={360} className="mb-2 rounded" />
          <article dangerouslySetInnerHTML={{ __html: review.body}} 
           className="max-w-screen-sm prose prose-slate"
          />
        </>
    );
  } 