import React from "react";
import styles from "@/css_module/video.module.css";
import Link from "next/link";
import ViewImg from "@/components/viewImg";

async function getData(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video/${id}`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export async function generateMetadata({ params, searchParams }) {
    const { id } = await params;
    const data = await getData(id);
    console.log('data',data)

    const getUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/video/play/2/${id}`;

    return {
        title: data.data.video.title,
        description: data.data.video.v_caption,
        alternates: {
            canonical: getUrl,
        },
        openGraph: {
            title: data.data.video.title,
            description: data.data.video.v_caption,
            url: getUrl,
            siteName: 'spotlightnews24.com',
            publishedTime: data.data.video.start_date,
            images: [
                {
                    url: `https://img.youtube.com/vi/${data.data.video.link}/maxresdefault.jpg`,
                    width: 800,
                    height: 600,
                }
            ],
        },
    };
}

const Page = async ({ params }) => {
    const { id } = await params;
    const data = await getData(id);

    if (!data) {
        return (<div className="loader"></div>);
    }

    return (
        <div className="container">
            <div className="ratio ratio-16x9 mt-4">
                <iframe src={`https://www.youtube.com/embed/${data.data.video.link}?rel=0&autoplay=1&mute=1`} title="YouTube video" allowFullScreen></iframe>
            </div>

            {data.data.video.title &&
                <figure className="border p-2">
                    <blockquote className="blockquote">
                        <p>{data.data.video.title}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {data.data.video.title}
                    </figcaption>
                    <figcaption className="text-body-tertiary">
                        <i className="bi bi-stopwatch"></i> {data.data.video.start_date}
                    </figcaption>
                </figure>
            }



            <div className="section-area mb-4">
                <span className="section-title fs-4" >সাম্প্রতিক ভিডিও <i className="bi bi-arrow-right-short"></i></span>
            </div>
            <div className="row">
                {data.data.latestVideos && data.data.latestVideos.map((row, i) =>
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
        </div>
    );
};

export default Page;
