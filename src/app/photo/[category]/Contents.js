"use client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GalleryPhoto from "@/components/GalleryPhoto";

export default function Contents( {initialData, category} ) {
    const data = initialData.contents.data;
    const lastPage = initialData.contents.last_page;
    const [articles, setArticles] = useState(data);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(lastPage > 1);
    const [loadingPaginate, setLoadingPaginate] = useState(false);

    const loadMore = async () => {
        if ( !hasMore ) return;
        setLoadingPaginate(true);
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photos/${category}?page=${page}`, {
                cache: "no-store"
            });

            const newData = await response.json();
            const newArticles = newData.contents.data;
            if (newArticles.length > 0) {
                setArticles((prevArticles) => [...prevArticles, ...newArticles]);
                setPage((prevPage) => prevPage + 1);
                setHasMore(newData.contents.current_page < newData.contents.last_page);
            } else {
                setHasMore(false);
            }
        } catch ( e ) {
            console.error("Error fetching more articles:", e);
        } finally {
            setLoadingPaginate(false);
        }
    }
    return (
        <InfiniteScroll next={loadMore}
                        hasMore={hasMore}
                        loader={loadingPaginate && articles > 0 && <div className="paginate-loader">
                            <div className="load-line"></div>
                        </div>}
                        dataLength={articles.length}
                        endMessage={<p className="text-center pt-3
                                                          pb-5">No More contents</p>}
                        className={`overflow-hidden row`}
        >
            {articles.map((v, index) => (<div className="col-lg-3 col-6 py-3" key={index}>
                <GalleryPhoto content={v}/>
            </div>))}
        </InfiniteScroll>)
}