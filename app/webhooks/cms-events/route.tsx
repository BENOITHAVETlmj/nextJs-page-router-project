import { CACHE_TAG_REVIEWS } from "@/lib/reviews";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
// example from udemy course, cms route is set on strapi

export async function POST(request: Request) {
    const payload = await request.json();
    if (payload.model) {
        revalidateTag(CACHE_TAG_REVIEWS);
    }
    return new Response(null, { status: 204 });
} 