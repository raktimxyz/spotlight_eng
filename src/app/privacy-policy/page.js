import React from 'react';
import ViewImg from "../../components/viewImg";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Spotlight",
    description: "Spotlight has embarked on its journey with the goal of becoming the top news brand in the country's media world, gaining acceptance from the public as an independent media outlet with a commitment to clarity, candor, and credibility.",
    keywords: ["Spotlight", "কিওয়ার্ড২", "কিওয়ার্ড৩"],
    authors: [{ name: "আপনার নাম" }],
    creator: "আপনার নাম",
    publisher: "Spotlight",
    openGraph: {
        title: "Privacy Policy | Spotlight",
        description: "Privacy Policy | Spotlight",
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
                <h1 className="mb-4 text-center">Privacy Policy</h1>

                <div className="row">
                    <p className='fs-5'>Spotlight is committed to protecting the privacy of your personal information. This policy clearly explains how the information you share with us when you use our website is collected, used, and protected. If you disagree with any part of this policy, we kindly request that you refrain from browsing our website.</p>
                    <p className='fs-5'>We may update this policy from time to time due to legal requirements or operational changes. Any changes will be notified from time to time and by using the website you will be deemed to have accepted these changes. Therefore, it is recommended to visit this page from time to time.</p>
                    <p className='fs-5'>This policy does not apply to third-party platforms (e.g. app stores or payment gateways).</p>

                    <h2 className='fs-4 fw-bold'>Information we collect:</h2>
                    <p className='fs-5'>The collection of specific user information depends on the type of reader accessing the Spotlight app or website. We may collect your name, phone number, or email address through information you voluntarily provide.</p>

                    <h2 className='fs-4 fw-bold'>We can get the information: </h2>
                    <p className='fs-5'>
                        If you register on our website or app, subscribe to our newsletter, or register to participate in our surveys or contests.</p>

                    <h2 className='fs-4 fw-bold'>We use your information to:</h2>
                    <p className='fs-5'>Spotlight does not sell or provide any personal information of any reader to anyone except those involved in operating the website or app or its business and management. However, it may work with this information internally to determine what type of reader is coming, how many of them are coming, how many are coming, how many are coming, how many are coming, or to further increase reader engagement.<br />
We do not share your personal information with any third party.<br />
However, Spotlight may do so if it is necessary to disclose personal information that can identify the reader in order to comply with government laws. Spotlight may also provide this information to protect its own interests in any legal process or in any forum.<br />
The information may also be disclosed to deliver various products and services to users/readers or to recommend them. However, in each of the above cases and in any other case, Spotlight will make every effort not to do so if a situation arises where the personal information of users is disclosed. Even then, if such information needs to be disclosed, it will disclose the information only as much as is necessary, and not as much as is not necessary.</p>

                    <h2 className='fs-4 fw-bold'>For a better experience</h2>
                    <p className='fs-5'>
                       We may use cookies, tracking pixels, or similar technologies to improve your experience. These technologies help us understand what is effective and what is not — and how to serve you better.</p>

                    <h2 className='fs-4 fw-bold'>Policy for children:</h2>
                    <p className='fs-5'>
                        Spotlight is not intended for use by anyone under the age of 13, and we do not knowingly collect information from them. If you believe we have received any information in error, please contact us immediately.
We operate in full compliance with the laws of the land. </p>
                    <h2 className='fs-4 fw-bold'>Notifications — according to your preferences</h2>
                    <p className='fs-5'>
                        You may choose to receive push notifications from us about important updates or breaking news. This is entirely up to you and you can turn it off at any time in your device settings.</p>

                    <p className='fs-5'>If you have any questions, comments or complaints about this Privacy Policy, please contact us: <br/> <span className='fw-bold'>Address: 10/2, Gausia Kashem Center, 9th Floor, Fakirapul Calvert Road, Motijheel, Dhaka-1000</span></p>

                    <h2 className='fs-4 fw-bold'>Comment policy</h2>
                    <p className='fs-5'>
                        At Spotlight, we welcome informed, relevant, and respectful discussion.<br />
Most comments will be published if they are on-topic and decent. However, the editorial department reserves the right to decide which comments will be published.<br />
The opinions expressed in comments are solely those of the reader concerned, and do not necessarily reflect the editorial position of Spotlight.</p>
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