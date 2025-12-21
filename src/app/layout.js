import { Suspense } from 'react';
import Script from 'next/script';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Navs from '@/components/navs';
import { SkeletonNavbar } from '@/components/skeleton';

import '../../public/css/bootstrap.min.css';
import '../../public/css/bootstrap-icons.min.css';
import '../../public/css/globals.css';

export const metadata = {
    metadataBase: new URL('https://www.text.com'),
    applicationName: 'websitename',
    authors: [{ name: 'websitename', url: 'https://www.text.com' }],
    manifest: '/favicon/manifest.json',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: [
            { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
            { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
            { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
    },
    other: {
        'identifier-URL': 'https://www.text.com',
        'fb:pages': '',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@websitename',
    },
}

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.site.com",
        "logo": "https://www.site.com/img/logo.png",
        "mainEntityOfPage": {
            "@type": "Organization",
            "@id": "https://www.site.com"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "",
                "email": "info@site.com",
                "contactType": "customer service"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/site.com/",
        ],
        "copyrightHolder": {
            "@type": "NewsMediaOrganization",
            "name": "websitename"
        }
    };
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>

                <main className="pt-lg-2">
                    <Header />
                    <Suspense fallback={<SkeletonNavbar />}>
                        <Navs />
                    </Suspense>

                    {children}

                    <Footer />
                </main>


                <Script src="https://www.googletagmanager.com/gtag/js?id=G-3NMSMXE8B8" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-3NMSMXE8B8');
                        `,
                    }}
                />

                <Script id="app-bootstrap" src="/js/bootstrap.bundle.min.js" />
                <Script id="app-jsonLd" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </body>
        </html>
    );
}
