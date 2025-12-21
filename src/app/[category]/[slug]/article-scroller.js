"use client";

import React, { useEffect, useState, useCallback } from "react";
import ArticleComponent from "./article-component";
import axios from "axios";

const ArticleScroller = ({ scrollContents }) => {
    const [title, setTitle] = useState();
    const [newsUrl, setNewsUrl] = useState();

    const handleScroll = useCallback(() => {
        const Wscroll = window.scrollY + 500;
        const newsItems = document.querySelectorAll(".single_news");

        newsItems.forEach((el) => {
            const ThisOffsetTop = el.offsetTop;
            const ThisOffsetHeight = el.offsetHeight;

            if (Wscroll > ThisOffsetTop && Wscroll < ThisOffsetTop + ThisOffsetHeight) {
                const currentNid = el.getAttribute("data-nid");
                const prevNid = localStorage.getItem("NidDebounced");

                if (prevNid !== currentNid) {
                    localStorage.setItem("NidDebounced", currentNid);

                    const n_url = el.getAttribute("data-url");
                    const head = el.getAttribute("data-head");

                    setTitle(head);
                    setNewsUrl(n_url);

                    if (typeof window !== "undefined") {
                        window.history.pushState({}, head, n_url);
                        document.title = head;
                    }

                    // axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/hit`, {
                        //   n_id: currentNid,
                        // });

                    gtag("config", "G-3NMSMXE8B8", {
                        page_title: head,
                        page_path: n_url,
                    });
                }
            }
        });
    }, []);

    useEffect(() => {
        if (!scrollContents || scrollContents.length === 0) return;

        localStorage.setItem("NidDebounced", scrollContents[0].n_id);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollContents, handleScroll]);

    return (
        <>
            {scrollContents.map((rowNews, i) => (
                <ArticleComponent key={i} newsData={rowNews} />
            ))}
        </>
    );
};

export default ArticleScroller;
