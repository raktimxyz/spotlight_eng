import React from "react";
import styles from "@/css_module/section9.module.css";
import Link from "next/link";
import ViewImg from "./viewImg";

const Section9 = ({data}) => {
    const [leadNews, secLeadNews] = data;

    return (
        <div className="section9 mt-5">
            <div className="lead-category-content mb-3">
                <Link href={`${leadNews.menu_info.workable_menu}/${leadNews.n_id}`}>
                    <div className="row">
                        <div className={`col-lg-3 col-4 ${styles.authorImage}`}>
                            <div className={styles.circleBase}>
                                <ViewImg image={leadNews.img} cls="w-100 h-auto" alt={leadNews.head} />
                            </div>
                        </div>
                        <div className="col-lg-9 col-8">
                            <div className="opinion-details">
                                <h4>{leadNews.head}</h4>
                                <div className="d-none d-md-block"></div>
                                <p className="author-name">{leadNews.author}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="lead-category-content">
                <Link href={`${secLeadNews.menu_info.workable_menu}/${secLeadNews.n_id}`}>
                    <div className="row">
                        <div className={`col-lg-3 col-4 ${styles.authorImage}`}>
                            <div className={styles.circleBase}>
                                <ViewImg image={secLeadNews.img} cls="w-100 h-auto" alt={secLeadNews.head} />
                            </div>
                        </div>
                        <div className="col-lg-9 col-8">
                            <div className="opinion-details">
                                <h4>{secLeadNews.head}</h4>
                                <div className="d-none d-md-block"></div>
                                <p className="author-name">{secLeadNews.author}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            
        </div>
    );
};

export default Section9;
