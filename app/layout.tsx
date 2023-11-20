// enables client side-navigation
import Link from "next/link";
import React, { ReactNode } from "react";
// These styles apply to every route in the application
import './globals.css'
 

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
      <html lang='en'>
          <body>
            <header>
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/reviews">Reviews</Link>
                  </li>
                  <li>
                    {/* prefetch attribut disables data page prefetching cause in production it is set to true by default */}
                    <Link href="/about" prefetch={false}>About</Link>
                  </li>
                </ul>
              </nav>
            </header>
             <main>
              {children}
             </main>
             <footer>
              Game data and images courtesy 
              of <a href="https://rawg.io/" target="_blank">RAWG</a>
             </footer> 
          </body>
      </html>
  );
} 