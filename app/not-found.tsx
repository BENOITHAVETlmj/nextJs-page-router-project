import React from "react";
import Heading from "@/components/Heading";

export const metadata = {
  title: 'Not found'
}

export default function NotFoundPage() {
    return (
        <>
          <Heading>
           404 Not found
          </Heading>
          <p>
            The page that you requested was not found
          </p>
        </>
    )
};