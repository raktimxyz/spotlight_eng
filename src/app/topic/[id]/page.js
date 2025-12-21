import ListGroupFlush from "@/components/listGroupFlush";
import Link from "next/link";
import React from "react";
import LoadMorePagination from "./loadMorePagination";
import ViewImg from "@/components/viewImg";
import NavTabs from "@/components/navTabs";

export const revalidate = 60; // 60 seconds = 1 minute

const getCategoryData = async (id, searchParams) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${id}`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    if (!res.ok) {
        // throw new Error('Failed to fetch category data');
        console.log("Fetch failed with status:", res.status, res.statusText);

    }

    return res.json();
}

export async function generateMetadata({ params, searchParams }) {
    const { id } = await params;
    const data = await getCategoryData(id);

    const getUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/topic/${data.tag.tag_id}`;

    return {
        title: data.tag.tag_name,
        description: data.tag.description,
        keywords: data.tag.m_keywords,
        alternates: {
            canonical: getUrl,
        },
        openGraph: {
            title: data.tag.tag_name,
            description: data.tag.description,
            url: getUrl,
            siteName: 'spotlightnews24.com',
            // images: [
            //     {
            //         url: data.details.openGraphImg,
            //         width: 800,
            //         height: 600,
            //     }
            // ],
        },
    };
}

const CategoryPage = async ({ params }) => {

    const { id } = await params;

    if (!id) {
        return '';
    }

    const data = await getCategoryData(id);
    const [firstItem, ...moreNews] = data.contents.data;
    
    const latestData = data.latestContents || [];
    const popularData = data.popularContents || []; 
    const navInfo = data.tag;

    if (!data) {
        return <h1 className="text-center my-5">কোন খবর পাওয়া যায়নি...</h1>
    }
    if (firstItem == null) {
        return <h1 className="text-center my-5">কোন খবর পাওয়া যায়নি...</h1>
    }

    return (
        <div className="container">
            <div aria-label="breadcrumb">
                <ol className="breadcrumb mt-5">
                    <li className="breadcrumb-item"><Link href={`/`}><i className="bi bi-house"></i></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{navInfo.tag_name}</li>
                </ol>
            </div>

            <div className="row">
                <div className="col-lg-9 col-12 py-3">

                    <div className="infinite-scroll-component__outerdiv">
                        <div className="infinite-scroll-component overflow-hidden">
                            <div className="sc-khLCKb fcngen">
                                <div className="row">
                                    <div className="col-lg-6 col-12 pb-3 pb-lg-0">
                                        <Link href={`/${firstItem.menu_info.workable_menu}/${firstItem.n_id}`}>
                                            <div>
                                                <ViewImg image={firstItem.img} cls="img-fluid w-100 h-auto" alt={firstItem.head} />
                                            </div>

                                            <div className="pt-2">
                                                <h4 className="text-bold lh-base">{firstItem.head}</h4>
                                                <small>{firstItem.dateBn}</small>
                                            </div>
                                        </Link>
                                    </div>
                                    {
                                    moreNews.slice(0, 6).map((row, i) => (
                                        
                                        <div key={i} className="col-lg-3 col-6">
                                            <Link href={`/${row.menu_info?row.menu_info.workable_menu:''}/${row.n_id}`}>
                                                <div>
                                                    <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                                                </div>
                                                <div className="pt-2">
                                                    <h5 className="lh-base">{row.head}</h5>
                                                    <p className="text-limit-3">{row.details}</p>
                                                    <small>{row.dateBn}</small>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4 border-top pt-4">
                                <div className="row">

                                    {moreNews.slice(6).map((row, i) =>
                                        {if(row.menu_info != null){
                                            (<div key={i} className="col-12 col-lg-6 d-flex">
                                            <div className="sc-keTIit cAOoDE border-bottom pb-3 mb-3">
                                                <Link href={`/${row.menu_info.workable_menu}/${row.n_id}`}>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h5 className="lh-base">{row.head}</h5>
                                                            <p>{row.details}</p>
                                                            <small>{row.dateBn}</small>
                                                        </div>
                                                        <div className="col-6">
                                                            <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>)
                                        }
                                        }
                                        
                                    )}

                                </div>
                            </div>

                            {data.contents.last_page > 1 &&
                                <LoadMorePagination cat={id} />
                            }
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-12 py-3">
                    {/* <div className="section-area">
                        <Link className="section-title fs-4" href="">রাজনীতি <i className="bi bi-arrow-right-short"></i></Link>
                    </div> */}
                    

                    <NavTabs latestData={latestData} popularData={popularData} />

                    <div className="sticky-top">
                        {data.otherContents.data.slice(1, 3).map((row, i) =>
                        {if(row.menu_info != null){
                            (
                            <Link key={i} href={`/${row.menu_info.workable_menu}/${row.n_id}`}>
                                <div className="content pb-3 border-bottom">
                                    <div className="row">
                                        <div className="col-7">
                                            <h5 className="lh-base">{row.head}</h5>
                                            <small>{row.menu_info.tag_name} | {row.dateBn}</small>
                                        </div>
                                        <div className="col-5">
                                            <div className="image">
                                                <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            )
                        }}
                            
                        )}
                    </div>
 
                </div>

            </div>
        </div>

    );
}

export default CategoryPage;