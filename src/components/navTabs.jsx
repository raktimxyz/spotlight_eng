'use client'; // যদি Next.js ব্যবহার করো

import React, { useState } from "react";
import styles from "@/css_module/navTabs.module.css";
import Link from "next/link";

const NavTabs = ({ latestData, popularData }) => {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div>
            <nav>
                <div className="nav nav-tabs w-100 row mx-0" role="tablist">
                    <button
                        className={`nav-link col text-center fs-5 ${activeTab === "home" ? `active ${styles.tabActive}` : ''}`}
                        type="button"
                        role="tab"
                        onClick={() => setActiveTab("home")}
                    >
                        Latest
                    </button>
                    <button
                        className={`nav-link col text-center fs-5 ${activeTab === "profile" ? `active ${styles.tabActive}` : ''}`}
                        type="button"
                        role="tab"
                        onClick={() => setActiveTab("profile")}
                    >
                        Most Read
                    </button>
                </div>
            </nav>

            <div className="tab-content mt-2">
                {activeTab === "home" && (
                    <div className={`${styles.NavTabsArea} tab-pane fade show active`} role="tabpanel">
                        <ul className="list-group list-group-flush">
                            {latestData &&
                                latestData.map((row, i) => {
                                    if (row.menu_info) {
                                        return (
                                            <li key={i} className="list-group-item ps-0 bi bi-file-fill">
                                                <Link
                                                    className="ms-4 d-block"
                                                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/${row.menu_info.workable_menu}/${row.n_id}`}
                                                >
                                                    {row.head}
                                                </Link>
                                            </li>
                                        );
                                    }
                                })}
                        </ul>
                    </div>
                )}

                {activeTab === "profile" && (
                    <div className={`${styles.NavTabsArea} tab-pane fade show active`} role="tabpanel">
                        <ul className="list-group list-group-flush mb-3">
                            {popularData &&
                                popularData.map((row, i) => {
                                    if (row.menu_info) {
                                        return (
                                            <li key={i} className="list-group-item ps-0 bi bi-file-fill">
                                                <Link
                                                    className="ms-4 d-block"
                                                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/${row.menu_info.workable_menu}/${row.n_id}`}
                                                >
                                                    {row.head}
                                                </Link>
                                            </li>
                                        );
                                    }
                                })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavTabs;
