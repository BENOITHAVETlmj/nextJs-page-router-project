import { readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getReviews(slug: string) {
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    const { content, data: { title, image, date} } = matter(text) 
    const body = marked(content);
    return { title, image, date, body };
}