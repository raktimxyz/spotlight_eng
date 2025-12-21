import React from "react";
import styles from "@/css_module/section7.module.css";
import Link from "next/link";
import ViewImg from "./viewImg";

const Section7 = ({ data }) => {
    const [leadNews, ...moreNews] = data;

    return (
        <div className="row mt-3 section7">
            <div className="col-lg-4 order-2 order-lg-1 pt-3 pt-lg-0 border-bottom border-lg-none">
                <div className="row h-100">
                    {moreNews.slice(0, 4).map((row, i) =>
                        <Link key={i} className="col-12 pb-3" href={`${row.menu_info.workable_menu}/${row.n_id}`}>
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
            </div>
            <div className="col-lg-4 order-1 order-lg-2 d-flex align-items-lg-stretch border-lg-start border-lg-end">
                <Link className="lead-content pb-3 pb-lg-3 border-bottom border-lg-none" href={`${leadNews.menu_info.workable_menu}/${leadNews.n_id}`}>
                    <div className="image">
                        <ViewImg image={leadNews.img} cls="img-fluid w-100 h-auto" alt={leadNews.head} />
                    </div>
                    <div className="description py-2">
                        <h5 className="text-bold">{leadNews.head}</h5>
                        <p>{leadNews.details}</p>
                        <small>{leadNews.menu_info.display_menu} | {leadNews.dateBn}</small>
                    </div>
                </Link>
            </div>
            <div className="col-lg-4 order-3 order-lg-3 pt-3 pt-lg-0">
                <div className="row h-100">
                    {moreNews.slice(4, 8).map((row, i) =>
                        <Link key={i} className="col-12 pb-3" href={`${row.menu_info.workable_menu}/${row.n_id}`}>
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
            </div>
        </div>
    );
};

export default Section7;
