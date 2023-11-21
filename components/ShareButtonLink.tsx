'use client';

import React, { useState } from "react";
import { LinkIcon } from '@heroicons/react/20/solid';

export default function ShareLinkButton () {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
       setClicked(true);
       setTimeout(() => setClicked(false), 1500)
    };

    return (
       <button onClick={handleClick}
        className="border flex gap-1 items-center px-1 py-2 mb-2 rounded text-slate-500 text-sm hover:text-slate-800 hover:bg-orange-100">
       <LinkIcon className="h-4 w-4" />
        {clicked ? 'Link copied!' : 'Share link'}
       </button>
    )
} 