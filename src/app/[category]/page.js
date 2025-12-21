import ListGroupFlush from "@/components/listGroupFlush";
import Link from "next/link";
import React from "react";
import LoadMorePagination from "./loadMorePagination";
import ViewImg from "@/components/viewImg";

export const revalidate = 60; // 60 seconds = 1 minute

const getCategoryData = async (cat, searchParams) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category-contents/${cat}`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch category data');
    }

    return res.json();
}

export async function generateMetadata({ params, searchParams }) {
    const { category } = await params;
    const data = await getCategoryData(category);

    const getUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${data.data.category.workable_menu}`;

    return {
        title: data.data.category.display_menu,
        description: data.data.category.meta_description,
        keywords: data.data.category.meta_keyworks,
        alternates: {
            canonical: getUrl,
        },
        openGraph: {
            title: data.data.category.display_menu,
            description: data.data.category.meta_description,
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

    const { category } = await params;

    if (!category) {
        return '';
    }

    const data = await getCategoryData(category);
    const [firstItem, ...moreNews] = data.data.contents.data;
    const navInfo = data.data.category;

    if (!firstItem) {
        return <h1 className="text-center my-5">Not Found</h1>
    }

    return (
        <div className="container">
            <div aria-label="breadcrumb">
                <ol className="breadcrumb mt-5">
                    <li className="breadcrumb-item"><Link href={`/`}><i className="bi bi-house"></i></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{navInfo.display_menu}</li>
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
                                                <h4 className="text-bold">{firstItem.head}</h4>
                                                <small>{firstItem.dateBn}</small>
                                            </div>
                                        </Link>
                                    </div>
                                    {moreNews.slice(0, 6).map((row, i) => (
                                        <div key={i} className="col-lg-3 col-6">
                                            <Link href={`/${row.menu_info.workable_menu}/${row.n_id}`}>
                                                <div>
                                                    <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                                                </div>
                                                <div className="pt-2">
                                                    <h5 className="">{row.head}</h5>
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
                                        <div key={i} className="col-12 col-lg-6 d-flex">
                                            <div className="sc-keTIit cAOoDE border-bottom pb-3 mb-3">
                                                <Link href={`/${row.menu_info.workable_menu}/${row.n_id}`}>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h5>{row.head}</h5>
                                                            {/*<p>{row.details}</p>*/}
                                                            <small>{row.dateBn}</small>
                                                        </div>
                                                        <div className="col-6">
                                                            <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                            {data.data.contents.last_page > 1 &&
                                <LoadMorePagination cat={category} />
                            }
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-12 py-3">
                    {/* <div className="section-area">
                        <Link className="section-title fs-4" href="">রাজনীতি <i className="bi bi-arrow-right-short"></i></Link>
                    </div> */}
                    <div className="sticky-top">
                        {data.data.otherContents.slice(0, 4).map((row, i) =>
                            <Link key={i} href={`/${row.menu_info.workable_menu}/${row.n_id}`}>
                                <div className="content pb-3 border-bottom">
                                    <div className="row">
                                        <div className="col-7">
                                            <h5>{row.head}</h5>
                                            <small>{row.menu_info.display_menu} | {row.dateBn}</small>
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
                    </div>

                    {/* <div className="section-area">
                        <Link className="section-title fs-4" href="">সর্বশেষ <i className="bi bi-arrow-right-short"></i></Link>
                    </div>
                    <ListGroupFlush hrf="" data="" />
                    <div className="section-area">
                        <Link className="section-title fs-4" href="">সর্বাধিক পঠিত <i className="bi bi-arrow-right-short"></i></Link>
                    </div>
                    <ListGroupFlush hrf="" data="" /> */}
                </div>

            </div>
        </div>

    );
}

export default CategoryPage;