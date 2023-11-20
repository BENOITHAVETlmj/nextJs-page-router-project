import React from "react";
import Heading from "@/components/Heading";

export default function HomePage() {
  console.log('[HomePage] rendering');  
    return (
        <>
          <Heading>
            Indie gamer
          </Heading>
          <p>
            Only the best indie games, reviewed for you.
          </p>
        </>
    );
  } 