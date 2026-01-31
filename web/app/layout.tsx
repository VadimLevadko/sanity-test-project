import { SanityLive } from '@/sanity/live';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
