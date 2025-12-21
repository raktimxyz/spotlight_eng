import React from "react";
import ListGroupFlush from "@/components/listGroupFlush";
import Link from "next/link";

import styles from "@/css_module/details.module.css";
import ArticleScroller from "./article-scroller";
import ViewImg from "@/components/viewImg";

export const revalidate = 60; // 60 seconds = 1 minute

const getCategoryData = async (category, slug, searchParams) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/details/${category}/${slug}`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch Details data');
    }

    return res.json();
}


export async function generateMetadata({ params, searchParams }) {
    const { category, slug } = await params;
    const data = await getCategoryData(category, slug);

    if (!data.scrollContents[0]) {
        return '';
    }

    let details = data.scrollContents[0];

    const getUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${details.menu_info.workable_menu}/${details.n_id}`;

    return {
        title: details.head,
        description: details.meta_description,
        keywords: details.meta_keyword,
        alternates: {
            canonical: getUrl,
        },
        openGraph: {
            title: details.head,
            description: details.meta_description,
            url: getUrl,
            siteName: 'spotlight.com',
            publishedTime: details.datePublished,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_STORAGE_SRC}/${details.ogimg}`,
                    width: 800,
                    height: 600,
                }
            ],
            locale: 'en_US',
            type: 'article',
        },
    };
}

const DetailsPage = async ({ params }) => {

    const { category, slug } = await params;
    const data = await getCategoryData(category, slug);

    if (!data.scrollContents[0].head) {
        return <h1 className="text-center my-5">Could not find requested resource</h1>
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8">
                    <ArticleScroller scrollContents={data.scrollContents} />

                    <div className="row">
                        {data.relatedContents.map((row, i) =>
                            <div key={i} className="col-6 col-md-4 mb-3">
                                <div className="card">

                                    <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/${row.menu_info.workable_menu}/${row.n_id}`}>

                                        <ViewImg image={row.img} cls="card-img-top w-100 h-auto" alt={row.head} />
                                        <div className="card-body">
                                            <h5 className="card-title">{row.head}</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                <div className="col-lg-4">
                            
                    <div className="content d-flex justify-content-center pb-3 null ">
                        {/*<ViewImg image={`https://tpc.googlesyndication.com/simgad/10882361421005269336`} width="300"   cls="py-3 h-auto img-fluid" alt={`ad`}  />*/}
                    </div>
                    <div className="sticky-top py-3 mt-3">
                        
                        <div className="section-area mb-3">
                            <Link className="section-title fs-4" href="">More News <i className="bi bi-arrow-right-short"></i></Link>
                        </div>
                        {data.moreContents.slice(0, 6).map((row, i) =>
 
                            <Link key={i} href={`${process.env.NEXT_PUBLIC_BASE_URL}/${row.menu_info.workable_menu}/${row.n_id}`}>
 
                                <div className="content pb-3 border-bottom mb-3">
                                    <div className="row">
                                        <div className="col-7">
                                            <h5>{row.head}</h5>
                                            <small>{row.dateBn}</small>
                                        </div>
                                        <div className="col-5">
                                            <div className="image">
                                                <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                        <div className="section-area">
                            <Link className="section-title fs-4" href="">সর্বশেষ <i className="bi bi-arrow-right-short"></i></Link>
                        </div>
                        <ListGroupFlush hrf="" data="" />
                        <div className="section-area">
                            <Link className="section-title fs-4" href="">সর্বাধিক পঠিত <i className="bi bi-arrow-right-short"></i></Link>
                        </div>
                        <ListGroupFlush hrf="" data="" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DetailsPage;