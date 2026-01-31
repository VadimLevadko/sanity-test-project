import { PortableText } from '@portabletext/react';
import classNames from 'classnames';
import type { ReactNode } from 'react';

import Image from 'next/image';

export const portableTextComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      return <Image src={value.asset._ref} alt="Image" />;
    },
  },
  marks: {
    left: ({ children }: { children: ReactNode }) => <span className="block text-left">{children}</span>,
    center: ({ children }: { children: ReactNode }) => <span className="block text-center">{children}</span>,
    right: ({ children }: { children: ReactNode }) => <span className="block text-right">{children}</span>,
    strong: ({ children }: { children: ReactNode }) => <strong>{children}</strong>,
    em: ({ children }: { children: ReactNode }) => <em>{children}</em>,
    b: ({ children }: { children: ReactNode }) => <b>{children}</b>, // або <span style={{ fontWeight: 'bold' }}>{children}</span>
    i: ({ children }: { children: ReactNode }) => <i>{children}</i>, // або <span style={{ fontStyle: 'italic' }}>{children}</span>
    u: ({ children }: { children: ReactNode }) => <u>{children}</u>, // або <span style={{ textDecoration: 'underline' }}>{children}</span>
    sup: ({ children }: { children: ReactNode }) => <sup>{children}</sup>,
    link: ({ children, value }: { children: ReactNode; value?: { href: string } }) => <a href={value?.href ?? '#'}>{children}</a>,
  },
};

/**
 * Renders a PortableText block with custom components for images and text marks.
 * Uses Sanity's PortableText renderer with predefined components for alignment, emphasis, and links.
 * Images are rendered via CustomPicture component; links via CustomLink.
 * @param content - The PortableText content (TextBlockType) to render.
 * @param className - Optional additional CSS class names for the container div.
 * @returns A React element representing the rendered text block.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderTextBlock = (content: any, className = ''): React.ReactElement => (
  <div className={classNames('text-block-component', className)}>
    <PortableText value={content} components={portableTextComponents} />
  </div>
);
