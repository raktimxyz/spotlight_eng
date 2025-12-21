import React from "react";
import styles from "@/css_module/leadArea.module.css";
import ViewImg from "./viewImg";
import Link from "next/link";
import ListGroupFlush from "@/components/listGroupFlush";
import NavTabs from "./navTabs";

const LeadNews = ({ data }) => {
    const [leadNews, leadNews2, leadNews3, ...moreNews] = data.leadContents;
    const latestData = data.latestContents || [];
    const popularData = data.popularContents || [];
    

    return (
        <div className="container mb-5 pb-3">
            <div className="top-lead-contents py-3 border-bottom">
                <div className="row">
                    <div className="col-12 col-lg-6 order-1 order-lg-2 border-lg-start border-lg-end d-flex flex-column align-items-stretch">
                        <Link className="lead-content pb-3 d-flex flex-row" href={`${leadNews.menu_info.workable_menu}/${leadNews.n_id}`}>
                            <div className="row">
                                <div className="image col-12">
                                    <ViewImg image={leadNews.img} cls="w-100 h-auto img-fluid" alt={leadNews.head} />
                                </div>
                                <div className="headline mt-2 col-12"><h1 className="text-bold">{leadNews.prefix?
                                    <span className="head-prefix">{leadNews.prefix+'/ '}</span> : ''
                                }{leadNews.head}</h1></div>
                                <div className="description">
                                    <div className="">
                                        <p>{leadNews.details}</p>
                                    </div>
                                    <small>
                                        {leadNews.menu_info.display_menu} | {leadNews.dateBn}
                                    </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-3 order-2 order-lg-1 pt-3 pt-lg-0">
                        <Link className="content d-flex border-bottom pb-3" href={`${leadNews2.menu_info.workable_menu}/${leadNews2.n_id}`}>
                            <div className="row">
                                <div className="col-6 col-lg-12 order-2 order-lg-1 image">
                                    <ViewImg image={leadNews2.img} cls="w-100 h-auto img-fluid" alt={leadNews2.head} />
                                </div>
                                <div className="col-6 col-lg-12 order-1 order-lg-2 description pt-lg-2 pt-0">
                                    <h5 className="">{leadNews.prefix?
                                    <span className="head-prefix">{leadNews.prefix+'/ '}</span> : ''
                                }{leadNews2.head}</h5>
                                    <small>
                                        {leadNews2.menu_info.display_menu} | {leadNews2.dateBn}
                                    </small>
                                </div>
                            </div>
                        </Link>
                        {leadNews3 != null ? (
<Link className="content d-flex pt-lg-3 pb-lg-0 py-3 border-bottom border-lg-none" href={`${leadNews3.menu_info.workable_menu}/${leadNews3.n_id}`}>
                            <div className="row">
                                <div className="col-6 col-lg-12 order-2 order-lg-1 image">
                                    <ViewImg image={leadNews3.img} cls="w-100 h-auto img-fluid" alt={leadNews3.head} />
                                </div>
                                <div className="col-6 col-lg-12 order-1 order-lg-2 description pt-lg-2 pt-0">
                                    <h5 className="">{leadNews3.prefix?
                                    <span className="head-prefix">{leadNews3.prefix+'/ '}</span> : ''
                                }{leadNews3.head}</h5>
                                    <small>
                                        {leadNews3.menu_info.display_menu} | {leadNews3.dateBn}
                                    </small>
                                </div>
                            </div>
                        </Link>
                            ) : (
                            <div></div>
                            )}
                        
                    </div>
                    <div className="col-12 col-lg-3 order-3 order-lg-3 pt-3 pt-lg-0">
                        {/*<div className="content d-flex justify-content-center pb-3 null">
                            <ViewImg image={`https://tpc.googlesyndication.com/simgad/10882361421005269336`} cls="w-100 h-auto img-fluid" alt={`ad`} />
                        </div>*/}

                        <NavTabs latestData={latestData} popularData={popularData} />
                    </div>
                </div>
            </div>

            <div className="rest-contents py-lg-3 pt-3 border-bottom-none border-lg-bottom">
                <div className="row">
                    {moreNews.slice(0, 4).map((row, i) =>
                        <div key={i} className={`col-lg-3 col-12 ${i === 0 ? 'border-lg-transparent-left' : 'border-lg-start'}`}>
                            <div className="content border-bottom border-lg-bottom-none py-3 py-lg-0">
                                <Link href={`${row.menu_info.workable_menu}/${row.n_id}`}>
                                    <div className="row">
                                        <div className="col-6 col-lg-12 order-2 order-lg-1 image ">
                                            <ViewImg image={row.img} cls="w-100 h-auto img-fluid" alt={row.head} />
                                        </div>
                                        <div className="col-6 col-lg-12 order-1 order-lg-2 description pt-0 mt-2 ">
                                            <h5>{row.head}</h5>
                                            {/*<p className="mb-0 d-none d-lg-block">{row.details}</p>*/}
                                            <small>
                                                {row.menu_info.display_menu} | {row.dateBn}
                                            </small>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="rest-contents py-lg-3 pb-3 border-bottom-none border-lg-bottom">
                <div className="row">
                    {moreNews.slice(4, 8).map((row, i) =>
                        <div key={i} className={`col-lg-3 col-12 ${i === 0 ? 'border-lg-transparent-left' : 'border-lg-start'}`}>
                            <div className="content border-bottom border-lg-bottom-none py-3 py-lg-0">
                                <Link href={`${row.menu_info.workable_menu}/${row.n_id}`}>
                                    <div className="row">
                                        <div className="col-6 col-lg-12 order-2 order-lg-1 image ">
                                            <ViewImg image={row.img} cls="w-100 h-auto img-fluid" alt={row.head} />
                                        </div>
                                        <div className="col-6 col-lg-12 order-1 order-lg-2 description pt-0 mt-2 ">
                                            <h5>{row.head}</h5>
                                            {/*<p className="mb-0 d-none d-lg-block">{row.details}</p>*/}
                                            <small>
                                                {row.menu_info.display_menu} | {row.dateBn}
                                            </small>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadNews;
