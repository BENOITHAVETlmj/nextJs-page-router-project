// enables client side-navigation
import React, { ReactNode } from "react";
// These styles apply to every route in the application
import './globals.css'
import NavBar from "@/components/NavBar";
import { orbitron, exo2} from "./fonts";
 

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
      <html lang='en' className={`${exo2.variable} ${orbitron.variable}`}>
          <body className="bg-orange-50 flex px-4 flex-col py-2 min-h-screen">
            <header>
             <NavBar />
            </header>
             <main className="grow py-3">
              {children}
             </main>
             <footer className="border-t text-center py-3 text-xs">
              Game data and images courtesy 
              of <a className="text-orange-800 hover:underline" href="https://rawg.io/" target="_blank">RAWG</a>
             </footer> 
          </body>
      </html>
  );
} 

