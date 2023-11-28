import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"

interface P {
  page: number,
  pageCount: number
}

export default function PaginationBar({ page, pageCount}:P) {
 return (
   <div className="flex gap-2 pb-3 items-center">
    <PaginationLink href={`/reviews?page=${page - 1}`} enabled={page > 1}>
      <ChevronLeftIcon className="h-5 w-5"/>
      <span className="sr-only">Previous page</span>
    </PaginationLink>
     <span>Page {page} of {pageCount}</span>
     <PaginationLink href={`/reviews?page=${page + 1}`} enabled={page < pageCount}>
      <ChevronRightIcon className="h-5 w-5"/>
      <span className="sr-only">Next page</span>
    </PaginationLink>
   </div>
 )
}

function PaginationLink({ children, href, enabled }) {   
    if(!enabled) {
        return (
           <span  
              className="border flex gap-1 rounded text-slate-300 text-sm hover:bg-orange-50 hover:cursor-not-allowed"
            >
            {children}
           </span> 
        )
    } 
    return (
    <Link href={href}         
    className="border flex gap-1 rounded text-slate-500 text-sm hover:text-slate-800 hover:bg-orange-100"
    >
       {children}
    </Link>
    )
}