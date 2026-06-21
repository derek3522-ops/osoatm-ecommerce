import './globals.css'

export const metadata = {
  metadataBase: new URL('https://osoatm-ecommerce.vercel.app'),
  title: {
    default: 'OSO ATM | Genmega & Hyosung ATM Parts, Repair & Support',
    template: '%s | OSO ATM Parts'
  },
  description: 'Authorized Genmega reseller offering OEM ATM parts, repair services, and technical support for Genmega and Hyosung ATMs. Fast shipping from Scottsdale, AZ. Shop receipt printers, card readers, cassettes, dispensers and more.',
  keywords: [
    'Genmega ATM parts',
    'Hyosung ATM parts',
    'ATM parts online',
    'buy ATM parts',
    'Genmega G2500 parts',
    'Genmega Onyx parts',
    'Hyosung Halo II parts',
    'Hyosung Force parts',
    'ATM receipt printer',
    'ATM card reader replacement',
    'ATM cash dispenser parts',
    'ATM cassette',
    'ATM repair service',
    'ATM parts distributor',
    'authorized Genmega reseller',
    'ATM parts Scottsdale AZ',
    'ATM mainboard',
    'ATM PIN pad',
    'ATM topper',
    'ATM fascia',
  ],
  authors: [{ name: 'OSO ATM', url: 'https://osoatm-ecommerce.vercel.app' }],
  creator: 'OSO ATM',
  publisher: 'OSO ATM',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://osoatm-ecommerce.vercel.app',
    siteName: 'OSO ATM Parts',
    title: 'OSO ATM | Genmega & Hyosung ATM Parts & Repair',
    description: 'Authorized Genmega reseller. OEM ATM parts, repair services, and technical support for Genmega and Hyosung ATMs. Fast shipping from Scottsdale, AZ.',
    images: [{ url: '/oso-logo.png', width: 800, height: 600, alt: 'OSO ATM Parts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSO ATM | Genmega & Hyosung ATM Parts',
    description: 'Authorized Genmega reseller. OEM ATM parts and repair services.',
    images: ['/oso-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: '',  // Add Google Search Console verification code here
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://osoatm-ecommerce.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OSO ATM",
              "url": "https://osoatm-ecommerce.vercel.app",
              "logo": "https://osoatm-ecommerce.vercel.app/oso-logo.png",
              "description": "Authorized Genmega and Hyosung ATM parts distributor based in Scottsdale, AZ.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Scottsdale",
                "addressRegion": "AZ",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-OSO-ATMS",
                "contactType": "sales",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
