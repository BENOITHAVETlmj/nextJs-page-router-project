import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

// get latest featuredReview
export async function getLatestReview() {
  const reviews = await getReviews();  
  return reviews[0];
}

export async function getReview(slug: string) {
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    const { content, data: { title, image, date} } = matter(text) 
    const body = marked(content);
    return { slug, title, image, date, body };
}

export async function getReviews() {
   const slugs = await getSlugs();
    const reviews = [];
    for(const slug of slugs) {
       const review = await getReview(slug); 
       reviews.push(review);
    }
    console.log(reviews);
    
   return reviews.sort((a, b)=> a.date.localeCompare(b.date));
}

export async function getSlugs() {
    const files = await readdir('./content/reviews');
    const slugs = files.filter(file => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
    return slugs;
}