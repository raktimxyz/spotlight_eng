import React from "react";
import styles from "@/css_module/video.module.css";
import Link from "next/link";
import ViewImg from "@/components/viewImg";

async function getData(category) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos/${category}`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export const metadata = {
    title: " ওয়েবসাইটের নাম",
    description: "আপনার ওয়েবসাইটের বিবরণ",
    keywords: ["কিওয়ার্ড১", "কিওয়ার্ড২", "কিওয়ার্ড৩"],
    authors: [{ name: "আপনার নাম" }],
    creator: "আপনার নাম",
    publisher: "আপনার কোম্পানি",
    openGraph: {
        title: "আপনার পেজের টাইটেল",
        description: "পেজের বিবরণ",
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

const Page = async ({params}) => {
    const { category } = await params;
    const data = await getData(category);

    if (!data) {
        return (<div className="loader"></div>);
    }

    const cat_info = data.contents.data[0].cat_info;

    return (
        <div className="container">
                <>
                    <div className="section-area mb-4">
                        <span className="section-title fs-4" >{cat_info.cat_name} <i className="bi bi-arrow-right-short"></i></span>
                    </div>
                    <div className="row">
                        {data.contents.data && data.contents.data.map((row, i) =>
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className={`${styles.fadeIn} ${styles.videoItem}`}>
                                    <div className={styles.videoCard}>
                                        <Link href={`/video/play/${row.v_id}`}>
                                            <div className={styles.videoThumbnail}>
                                                <ViewImg image={`https://img.youtube.com/vi/${row.link}/sddefault.jpg`} cls="w-100 h-auto" alt={row.title} />
                                                <span className={styles.playButton}>
                                                    <i className="bi bi-play-fill"></i>
                                                </span>
                                            </div>
                                            <div className={styles.videoInfo}>
                                                <h6 className={styles.videoTitle}>{row.title}</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
        </div>
    );
};

export default Page;
