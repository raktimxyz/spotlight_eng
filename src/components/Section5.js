import Link from "next/link";
import React from "react";
import ViewImg from "./viewImg";

const Section5 = ({ data }) => {
    const [leadNews, news2nd, ...moreNews] = data;

    return (
        <div className="row mt-3 section3">
            <div className="col-lg-6 border-lg-end">
                <div className="lead-content pb-3 border-bottom">
                    <Link className="row" href={`${leadNews.menu_info.workable_menu}/${leadNews.n_id}`}>
                        <div className="image">
                            <ViewImg image={leadNews.img} cls="img-fluid w-100 h-auto" alt={leadNews.head} />
                        </div>
                        <div className="description pt-2">
                            <h5 className="text-bold">{leadNews.head}</h5>
                            <p>{leadNews.details}</p>
                            <small>{leadNews.menu_info.display_menu} | {leadNews.dateBn}</small>
                        </div>
                    </Link>
                </div>
                
                <div className="second-lead-content pt-3">
                    <Link className="row" href={`${news2nd.menu_info.workable_menu}/${news2nd.n_id}`}>
                        <div className="col-12 pb-3 pb-lg-0">
                            <div className="content border-bottom border-lg-none h-100-add-1rem">
                                <h5>{news2nd.head}</h5>
                                <div className="">
                                    <ViewImg image={news2nd.img} cls="float-end w-50 h-auto" alt={news2nd.head} />
                                    <p className="mb-0">{news2nd.details}</p>
                                    <small>{news2nd.menu_info.display_menu} | {news2nd.dateBn}</small>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="">
                    <div className="row">
                        {moreNews.slice(0, 3).map((row, i) =>
                            <Link key={i} className="col-12 py-3 py-lg-0" href={`${row.menu_info.workable_menu}/${row.n_id}`}>
                                <div className="content h-100-add-1rem pb-4 mb-2 border-bottom d-inline-block">
                                    <h5 className="text-limit-2">-{row.head}</h5>
                                    <div className="">
                                        <ViewImg image={row.img} cls="float-end w-50 h-auto" alt={row.head} />
                                        <p className="mb-0 text-limit-3">{row.details}</p>
                                        <small>{row.menu_info.display_menu} | {row.dateBn}</small>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Section5;
