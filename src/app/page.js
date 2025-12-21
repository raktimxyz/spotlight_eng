import { Suspense } from 'react'
import LazySection from "@/components/lazySection";
import { CardSkeleton } from '@/components/skeleton'

import LeadNews from "@/components/leadNews";
import ListGroupFlush from "@/components/listGroupFlush";
import Section1 from "@/components/section1";
import Section10 from "@/components/section10";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from '@/components/Section5';
import Section6 from "@/components/Section6";
import Section7 from "@/components/section7";
import Section8 from "@/components/section8";
import Section9 from "@/components/section9";
import GalleryPhoto from "@/components/GalleryPhoto";
import Link from 'next/link';
import VideoGallery from '@/components/videoGallery';

export const revalidate = 60;

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-contents`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export const metadata = {
    title: "Spotlight",
    description: "Spotlight",
    keywords: ["Spotlight", "কিওয়ার্ড২", "কিওয়ার্ড৩"],
    authors: [{ name: "Spotlight" }],
    creator: "Arnab & Team",
    publisher: "Spotlight",
    openGraph: {
        title: "Spotlight",
        description: "Spotlight",
        images: [
            {
                url: "https://example.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ছবির বিবরণ"
            }
        ],
        locale: "bn_BD",
        type: "website",
    },
    alternates: {
        canonical: "https://example.com/current-page",
    }
};

const HomePage = async () => {
    const {data} = await getData();

    if (!data) {
        return (<div className="loader"></div>);
    }

    return (
        <>
            <div className="container">
                <LeadNews data={data} />
            </div>

            <section className="container mb-4">
                <div className="row">
                    {/* <div className="col-lg-4">
                        <div className="section-area">
                            <Link className="section-title fs-4" href="">Most Read <i className="bi bi-arrow-right-short"></i></Link>
                        </div>
                        <ListGroupFlush hrf="" listData={data.popularContents} />
                    </div> */}
                    <div className="col-lg-12">
                        <div className="section-area">
                            <Link className="section-title fs-4" href={`/bangladesh`}>Bangladesh <i className="bi bi-arrow-right-short"></i></Link>
                        </div>

                        <Section1 data={data.bangladeshContents}/>

                    </div>
                </div>
            </section>

            {/*<LazySection fallback={<CardSkeleton />}>
                <section className="container">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="section-area">
                                <Link className="section-title fs-4" href="">Feature <i className="bi bi-arrow-right-short"></i></Link>
                            </div>

                            <Section6 data={data.featureContents} />

                        </div>
                        <div className="col-lg-6">
                            <div className="section-area">
                                <Link className="section-title fs-4" href={`/entertainment`}>Entertainment <i className="bi bi-arrow-right-short"></i></Link>
                            </div>

                            <Section5 data={data.entertainmentContents} />

                        </div>
                    </div>
                </section>
            </LazySection>*/}

            <section className="container mt-5">
                <div className="section-area">
                    <Link className="section-title fs-4" href={`/international`}>International <i className="bi bi-arrow-right-short"></i></Link>
                </div>

                <Section4 data={data.internationalContents} />
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-area">
                            <Link className="section-title fs-4" href={`tech`}>Tech <i className="bi bi-arrow-right-short"></i></Link>
                        </div>
                        <Section2 data={data.techContents} />

                    </div>

                    <div className="col-lg-8">
                        <div className="section-area">
                            <Link className="section-title fs-4" href={`/sports`}>Sports <i className="bi bi-arrow-right-short"></i></Link>
                        </div>
 
                           <Section3 data={data.sportsContents} />  
                        

                    </div>
                </div>
            </section>
            {/*
            <LazySection fallback={<CardSkeleton />}>

                <VideoGallery data={data.videos} />
            </LazySection>
            */}
             




 








        </>
    );
}
export default HomePage;