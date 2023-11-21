import React from "react";
import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/review";
import ShareLinkButton from "@/components/ShareButtonLink";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug }}) {
  const review = await getReview(slug);
  return {
    title: review.title
  }
}

export default async function ReviewPage({ params: { slug }}) {
  const review = await getReview(slug);
  console.log('[Review page rendering]', slug);
    return (
        <>
          <Heading>
          {review.title} 
          </Heading>
          <div className="flex gap-3 items-baseline">
           <p className="italic pb-2">{review.date}</p>
           <ShareLinkButton />
          </div>
          <img src={review.image} alt="" width={600} height={360} className="mb-2 rounded" />
          <article dangerouslySetInnerHTML={{ __html: review.body}} 
           className="max-w-screen-sm prose prose-slate"
          />
        </>
    );
  } 