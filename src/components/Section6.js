import React from "react";
import styles from "@/css_module/section6.module.css";
import Link from "next/link";
import ViewImg from "./viewImg";

const Section6 = ({ data }) => {
    if(data == null){
        return (<div></div>);
    }
    const [leadNews, ...moreNews] = data;
    if(leadNews == null){
        return (<div></div>);
    }
    if(moreNews == null){
        return (<div></div>);
    }
    return (
        <div className={`mt-5 ${styles.categoryContentsHeight} section6`}>
            <div className={`row contents ${styles.categoryContentsHeight}`}>
                <div className="pb-3">
                    <Link className="lead-content" href={`${leadNews.menu_info.workable_menu}/${leadNews.n_id}`}>
                        <ViewImg image={leadNews.img} cls="float-end margin-5055 w-50 h-auto" alt={leadNews.head} />

                        <h5 className="text-bold">{leadNews.head}</h5>
                        <p>{leadNews.details}</p>
                        <small>{leadNews.menu_info.display_menu} | {leadNews.dateBn}</small>
                    </Link>
                </div>
                {moreNews.slice(0, 8).map((row, i) =>
                <Link key={i} className="col-lg-4 col-6  mb-lg-3 mb-3" href="">
                    <div className="h-100">
                        <div className="image">
                            <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                        </div>
                        <div className="description mt-2">
                            <h5>{row.head}</h5>
                            <small>{row.menu_info.display_menu} | {row.dateBn}</small>
                        </div>
                    </div>
                </Link>
                 )}
            </div>
        </div>

    );
};

export default Section6;
