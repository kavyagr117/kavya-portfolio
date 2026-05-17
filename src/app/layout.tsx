import type { Metadata } from 'next';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kavya G R — QA Engineer & Python Developer',
  description:
    'Portfolio of Kavya G R — a Computer Science & Cyber Security student specialising in QA engineering, test automation, Python development, and cybersecurity research. Based in Bengaluru.',
  keywords: [
    'Kavya G R',
    'QA Engineer',
    'Python Developer',
    'Cybersecurity',
    'Software Testing',
    'Automation Testing',
    'Selenium',
    'Postman',
    'API Testing',
    'Bengaluru',
    'Portfolio',
    'JIRA',
    'Nmap',
    'SuperAGI',
  ],
  authors: [{ name: 'Kavya G R', url: 'https://github.com/kavyagr117' }],
  creator: 'Kavya G R',
  metadataBase: new URL('https://kavya-gr.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kavya-gr.vercel.app',
    title: 'Kavya G R — QA Engineer & Python Developer',
    description:
      'Portfolio of Kavya G R — QA engineering, test automation, Python, and cybersecurity research.',
    siteName: 'Kavya G R Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavya G R — QA Engineer & Python Developer',
    description:
      'Portfolio of Kavya G R — QA engineering, test automation, Python, and cybersecurity research.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-bg antialiased">
        {children}
      </body>
    </html>
  );
}
