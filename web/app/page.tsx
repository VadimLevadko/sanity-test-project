import { renderTextBlock } from '@/sanity/components';
import { urlFor } from '@/sanity/image';
import { getData, STATIC_PAGE_QUERY } from '@/sanity/queries';

import FirstGsap from '@/app/components/first-component/first-compt';
import PathPlanet from '@/app/components/path-planet/path-planet';
import Image from 'next/image';

import './page.css';

export default async function IndexPage() {
  const data = await getData(STATIC_PAGE_QUERY('event', 'vtoraya-sekciya-test'));
  const { date, details, doorsOpen, eventType, image, name, venue } = data || {};

  const imageUrl = urlFor(image).url();

  return (
    <main className="min-h-screen">
      <PathPlanet />
      <FirstGsap />

      <div className="flex flex-col gap-12 p-24">
        <Image width={550} height={250} src={imageUrl} alt="Fff" />
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white">{name}</h1>
        {renderTextBlock(details)}
        <p>{date}</p>
        <p>Doors open: {doorsOpen}</p>
        <p>type: {eventType}</p>
        <p>{venue.name}</p>
      </div>
    </main>
  );
}
