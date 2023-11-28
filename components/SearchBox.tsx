'use client';

import { useIsClient } from "@/lib/hooks";
import { Combobox } from "@headlessui/react";
import { useState } from "react";

const reviews = [
    { slug: 'hades-2018', title: 'Hades' },
    { slug: 'fall-guys', title: 'Fall Guys: Ultimate Knockout' },
    { slug: 'black-mesa', title: 'Black Mesa' },
    { slug: 'disco-elysium', title: 'Disco Elysium' },
    { slug: 'dead-cells', title: 'Dead Cells' },
  ];

export default function SearchBox() {
    const isClient = useIsClient();
    const [query, setQuery] = useState('')

    console.log({ query });
    
    if(!isClient) return null;

    const filteredReviews =
    query === ''
      ? reviews
      : reviews.filter((review) => {
          return review.title.toLowerCase().includes(query.toLowerCase())
        })

    return (
         <div className="relative w-48">
      <Combobox>
        <Combobox.Input placeholder="Search…"
          className="border px-2 py-1 rounded w-full"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options className="absolute bg-white py-1 w-full">
          {filteredReviews.map((review) => (
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