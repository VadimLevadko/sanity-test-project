import { client } from './client';
import { groq } from 'next-sanity';

export const getData = async (groqQuery: string) =>
    await client.fetch(groqQuery, {}, { next: { revalidate: 3600 } });

export const STATIC_PAGE_QUERY = (
    id: string,
    slug: string,
): string => groq`*[_type == "${id}" && slug.current == "${slug}"][0]{
    ...,
    venue->{
        name,
    }
}`;
