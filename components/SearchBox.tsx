'use client';

import { useIsClient } from "@/lib/hooks";
import { searchReviews } from "@/lib/reviews";
import { Combobox } from "@headlessui/react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function SearchBox() {
    const router = useRouter();
    const isClient = useIsClient();
    const [query, setQuery] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if(query.length > 1) {
            const controller = new AbortController();
            (async () => {          
                const url = '/api/search?query='+ encodeURIComponent(query);    
                const response = await fetch(url, { signal: controller.signal});        
                const reviews = await response.json();
                 setReviews(reviews)
            })();
            // clean up function will be launches directly by react
            return () => controller.abort();
        } else {
           setReviews([]); 
        }
    }, [query])


    const handleChange = (review) => {
        router.push(`/reviews/${review.slug}`)
    }
    
    if(!isClient) return null;

    return (
         <div className="relative w-48">
      <Combobox onChange={handleChange}>
        <Combobox.Input placeholder="Search…"
          className="border px-2 py-1 rounded w-full"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options className="absolute bg-white py-1 w-full">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span className={`block px-2 truncate w-full ${
                  active ? 'bg-orange-100' : ''
                }`}>
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div> 
    );
} 