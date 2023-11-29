import 'server-only';

import { marked } from "marked";
import qs from 'qs';

const CMS_URL = process.env.CMS_URL;
export const CACHE_TAG_REVIEWS = 'reviews';

interface CmsItem {
  id: number;
  attributes: any;
}
export interface Review {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
}

async function fetchReviews(parameters: any) {
  const url = `${CMS_URL}/api/reviews?` + qs.stringify(parameters, { encodeValuesOnly: true });
  // console.log('[fetchReviews]', url);

  const response = await fetch(url, { next: 
     {
      tags: [CACHE_TAG_REVIEWS]
      },
    });
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`)
  }
    return await response.json();
}

export async function getReview(slug: string): Promise<any> {
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize: 1, withCount: false },
  });
  if(data.length === 0) {
    return null;
  }
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body),
    }; 
}

export async function getReviews(pageSize: number = 6, page = 1) {
  const { data, meta } = await fetchReviews({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize, page },
  });
   return {
    pageCount: meta.pagination.pageCount,
    reviews: data.map(toReview),
   }
}

export async function searchReviews(query: any) {
  const { data } = await fetchReviews({
    filters: { title: { $containsi: query }},
    fields: ['slug', 'title'],
    sort: ['title'],
    pagination: { pageSize: 5 },
  });
  return data.map(({ attributes }) => ({ 
    slug: attributes.slug,
    title: attributes.title,
  }));
}

export async function getSlugs() {
  const { data } = await fetchReviews({
    fields: ['slug'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });
  return data.map((item) => item.attributes.slug);
}

function toReview(item: CmsItem): Review {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + attributes?.image?.data?.attributes?.url,
  };
}