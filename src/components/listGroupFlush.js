import React from "react";
import styles from "@/css_module/listGroupFlush.module.css";

const ListGroupFlush = ({ hrf, listData }) => {
    return (
        <div className={`${styles.homeLatest} mt-2 p-0`}>
            <ul className="list-group list-group-flush mb-3">
                {listData && listData.map((row, i) => {
                    if (row.menu_info) {
                        return (
                            <li key={i} className="list-group-item ps-0 bi bi-file-fill">
                                <a className="ms-2" href={`${row.menu_info.workable_menu}/${row.n_id}`}>{row.head}</a>
                            </li>
                        )
                    }
                })}
            </ul>
            <button className="btn btn-dark w-100">
                <a className="text-white" href={hrf}>সব খবর</a>
            </button>
        </div>
    );
};

export default ListGroupFlush;
