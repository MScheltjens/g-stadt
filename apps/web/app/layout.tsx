import type { Metadata } from 'next';

import '@repo/ui/globals.css';

export const metadata: Metadata = {
  title: 'G-Stadtt',
  description: "A city built for the G's.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
