import Link from "next/link";
import React from "react";
import ViewImg from "./viewImg";

const Section10 = ({ data }) => {
    const [leadNews, ...moreNews] = data;
    return (
        <div className="mt-3 section10">
            <Link className="" href={`${leadNews.menu_info.workable_menu}/${leadNews.n_id}`}>
                <div className="lead-content pb-3 border-bottom">
                    <ViewImg image={leadNews.img} cls="img-fluid w-100 h-auto" alt={leadNews.head} />
                    <h5 className="mb-0 pt-2 text-bold">{leadNews.head}</h5>
                </div>
            </Link>
            {moreNews.slice(0, 3).map((row, i) =>
                <Link key={i} href={`${row.menu_info.workable_menu}/${row.n_id}`}>
                    <h5 className="content content-headline py-3 mb-0 border-bottom">{row.head}</h5>
                </Link>
            )}

        </div>

    );
};

export default Section10;
