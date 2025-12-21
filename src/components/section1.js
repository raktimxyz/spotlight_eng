import React from "react";
import ViewImg from "./viewImg";
import Link from "next/link";

import FGetWord from "../utils/Helpers";

const Section1 = ({ data }) => {
    const [leadNews, ...moreNews] = data;

    return (
        <div className="section1 mt-3">


            <div className="row pb-3">
                <div className="col-lg-9" >
                <a className="lead-content" href={`${leadNews.menu_info.workable_menu}/${leadNews.n_id}`}>
                    <div className="pb-3">
                        <ViewImg image={leadNews.img} cls="float-end w-50 h-auto" alt={leadNews.head} />
                        <h5 className="text-bold">{leadNews.head}</h5>
                        <p>{FGetWord(leadNews.details,40)}</p>
                        <small>
                            {leadNews.menu_info.display_menu} | {leadNews.dateBn}
                        </small>
                    </div>
                </a>
                </div>
                <div className="col-lg-3" >
                    <div className="row border-lg-start">
                        <div className="col-6 col-lg-12 order-2 order-lg-1 image ">
                            <ViewImg image={moreNews[0].img} cls="w-100 h-auto img-fluid" alt={moreNews[0].head} />
                        </div>
                        <div className="col-6 col-lg-12 order-1 order-lg-2 description pt-0 mt-2 ">
                            <h5>{moreNews[0].head}</h5>
                            {/* <p className="mb-0 d-none d-lg-block">{moreNews[0].details}</p> */}
                            <small>
                                {moreNews[0].menu_info.display_menu} | {moreNews[0].dateBn}
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-3 h-100 border-top">
                <div className="row">
                    {moreNews.slice(1, 5).map((row, i) =>
                        <React.Fragment key={i}>
                            <Link className={`col-lg-6 ${i == 0 ? 'border-lg-transparent-left pb-3 pb-lg-0' : ''} ${i == 1 ? 'border-lg-start py-3 py-lg-0' : ''} ${i == 2 ? 'border-lg-transparent-left py-3 py-lg-0' : ''} ${i == 3 ? 'border-lg-start pt-3 pt-lg-0' : ''}`} href={`${row.menu_info.workable_menu}/${row.n_id}`}>
                                <div className="content border-bottom border-lg-none h-100-add-1rem">
                                    
                                    <div>
                                        <ViewImg image={row.img} cls="w-50 h-auto float-end ms-2" alt={row.head} />
                                        <h5>{row.head}</h5>
                                        <p>{FGetWord(row.details,19)}</p>
                                        <small>
                                            {row.menu_info.display_menu} | {row.dateBn}
                                        </small>
                                    </div>
                                </div>
                            </Link>
                            {(i == 1) &&
                                <div className="d-none d-lg-block container py-3"><div className="border-bottom"></div></div>
                            }
                        </React.Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Section1;
