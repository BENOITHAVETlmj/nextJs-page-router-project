import React from "react";
import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareButtonLink";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

// export async function generateStaticParams() {
//   const slugs = await getSlugs();    
//   return slugs.map((slug) => ({ slug }));
// }  

interface ReviewPageParams {
  slug: string;
}
interface ReviewPageProps {
  params: ReviewPageParams;
}

export async function generateMetadata({ params: { slug }}: ReviewPageProps): Promise<Metadata> {
  const review = await getReview(slug);
  if(!review) {
    return notFound();
  }
  return {
    title: review.title
  }
}

export default async function ReviewPage({ params: { slug }}: ReviewPageProps) {  
  const review = await getReview(slug);  
  if(!review) {
    return notFound();
  }
    return (
        <>
          <Heading>  
          {review.title} 
          </Heading>
          <p className="font-semibold py-2">{review.subtitle}</p>
          <div className="flex gap-3 items-baseline">
           <p className="italic pb-2">{review.date}</p>
           <ShareLinkButton />
          </div>
          <Image src={review.image} alt="" width='600' height='360' className="mb-2 rounded" priority />
          <article dangerouslySetInnerHTML={{ __html: review.body}} 
           className="max-w-screen-sm prose prose-slate"
          />
        </>
    );
  } 