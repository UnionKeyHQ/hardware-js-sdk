import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

export const metadata = {
  title: {
    default: 'UnionKey Developers',
    template: '%s - UnionKey Developers'
  },
  description: 'Official developer documentation for UnionKey hardware and software integration. Build secure Web3 experiences with UnionKey hardware wallets.',
  icons: {
    icon: '/icons/onekey.png',
    apple: '/icons/onekey.png',
  },
  openGraph: {
    title: 'UnionKey Developers',
    description: 'Official developer documentation for UnionKey hardware and software integration. Build secure Web3 experiences with UnionKey hardware wallets.',
    siteName: 'UnionKey Developers',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnionKey Developers',
    description: 'Official developer documentation for UnionKey hardware and software integration.',
    creator: '@UnionKeyHQ',
    site: '@UnionKeyHQ',
    images: ['/og.jpg'],
  },
  metadataBase: new URL('https://developer.unionkey.io'),
}

export const viewport = {
  themeColor: '#000000',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
