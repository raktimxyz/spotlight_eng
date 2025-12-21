import React from "react";
import styles from "@/css_module/section2.module.css";
import ViewImg from "./viewImg";
import Link from "next/link";

const Section2 = ({ data }) => {
    return (
        <div className={`${styles.categoryContentsHeight} mt-3 section2`}>
            <div className={`row pb-5 pb-lg-0 ${styles.categoryContentsHeight}`}>

                {data.slice(0, 4).map((row, i) =>
                    <React.Fragment key={i}>
                        <Link className={`col-6 {(i == 0 || i == 2) ? 'border-lg-transparent-left' : 'border-start'}`}href={`${row.menu_info.workable_menu}/${row.n_id}`}>
                            <div className="content d-flex">
                                <div className="row">
                                    <div className="image">
                                        <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                                    </div>
                                    <div className="description pt-2">
                                        <h5>{row.head}</h5>
                                        <small>{row.menu_info.display_menu} | {row.dateBn}</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {i==1 && <div className="col-12 my-3"><div className="border-bottom"></div></div> }
                    </React.Fragment>
                )}
                <div className="container py-3 d-block d-lg-none"><div className="border-bottom"></div></div>
            </div>
            {/* <div className="content d-flex justify-content-center pb-3 null border-top">
                <ViewImg image={`https://tpc.googlesyndication.com/simgad/10882361421005269336`} width="300"   cls="py-3 h-auto img-fluid" alt={`ad`}  />
            </div> */}
        </div>
    );
};

export default Section2;
