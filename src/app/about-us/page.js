import React from 'react';
import ViewImg from "../../components/viewImg";
import Link from "next/link";

export const metadata = {
    title: "About Us | Spotlight",
    description: "স্পষ্টতা, স্পষ্টভাষিতা ও বিশ্বাসযোগ্যতার অঙ্গীকার নিয়ে একটি স্বাধীন সংবাদমাধ্যম হিসেবে গণমানুষের কাছে গ্রহণযোগ্যতা অর্জন করে  দেশের গণমাধ্যম জগতে শীর্ষ সংবাদ ব্র্যান্ড হওয়ার লক্ষ্য নিয়ে যাত্রা শুরু করেছে Spotlight ।",
    keywords: ["Spotlight", "কিওয়ার্ড২", "কিওয়ার্ড৩"],
    authors: [{ name: "আপনার নাম" }],
    creator: "আপনার নাম",
    publisher: "Spotlight",
    openGraph: {
        title: "About Us | Spotlight",
        description: "About Us | Spotlight",
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

export default async function TodaysNews({ searchParams }) {
    const page = parseInt(searchParams?.page) || 1;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/recent-news?page=${page}`,
            { cache: "no-store" }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch news");
        }

        const data = await res.json();

        const newsList = data.contents?.data || [];
        const currentPage = parseInt(data.contents?.current_page) || 1;
        const lastPage = parseInt(data.contents?.last_page) || 1;
        const total = parseInt(data.contents?.total) || 0;
        const perPage = parseInt(data.contents?.per_page) || 15;

        return (
            <div className="container my-5">
                <h1 className="mb-4 text-center">About Us</h1>

                <div className="col-12 col-lg-8 m-auto">
                     <p className="fs-5">Spotlight has embarked on a journey to become the leading news brand in the countrys media world by gaining acceptance from the masses as an independent media outlet with a commitment to clarity, candor and credibility. <br/> It is currently operating as a digital-first newsroom and is soon to launch a print edition. <br/> <span className="fw-bold">Spotlight</span>, owned by JM Media, is headquartered in Dhaka.</p>

                    <p className="fs-5"><span className="fw-bold">Its core mission is simple yet powerful:</span> To provide the public with information that is truthful and unbiased — free from bias and unnecessary embellishment. <br /> We believe that when there is only noise, truth should be the loudest voice. <span className="fw-bold">Spotlight</span> will shine its light on everything from politics to governance, corruption to economics, sports to health and education. Nothing will remain in the dark. <span className="fw-bold">Spotlight</span> will expose everything.</p>

                    <p className="fs-5">Along with journalists with many years of experience in the media, young people are our strength.</p>

                    <p className="fs-5">In addition to the original reporting, we will also highlight the global perspective through selected messages from our journalists as well as local news organizations and information from international media.</p>

                    {/*<p className="fs-4"><b className="fs-5">Acting Editor:</b> Morshed Noman</p>*/}

                </div>
 
            </div>
        );

    } catch (error) {
        console.error('Error fetching news:', error);
        return (
            <div className="container my-5">
                <div className="alert alert-danger text-center">
                    <h4>Problem Loading news</h4>
                    <p>Try Again</p>
                    <a href="?page=1" className="btn btn-primary">
                        Try Again
                    </a>
                </div>
            </div>
        );
    }
}