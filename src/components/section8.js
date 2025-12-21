import Link from "next/link";
import React from "react";
import ViewImg from "./viewImg";

const Section8 = ({data}) => {
    const [leadNews, secLeadNews] = data;

    return (
        <div className="section8 mt-5">
            <Link className="" href={`${leadNews.menu_info.workable_menu}/${leadNews.n_id}`}>
                <div className="lead-content pb-3 border-bottom">
                    <ViewImg image={leadNews.img} cls="img-fluid w-100 h-auto" alt={leadNews.head} />
                    <h5 className="mb-0 pt-2 text-bold">{leadNews.head}</h5>
                </div>
            </Link>
            <Link href={`${secLeadNews.menu_info.workable_menu}/${secLeadNews.n_id}`}>
                <h5 className="content content-headline py-3 mb-0 border-bottom">{secLeadNews.head}</h5>
            </Link>
        </div>
    );
};

export default Section8;
