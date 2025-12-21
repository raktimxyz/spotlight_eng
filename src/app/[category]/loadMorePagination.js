"use client";
import ViewImg from '@/components/viewImg';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const LoadMorePagination = ({ cat }) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // Load initial data
    // useEffect(() => {
    //     fetchPosts();
    // }, []);

    const fetchPosts = async () => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        try {
            const response = await fetch(`/api/posts?cat=${cat}&page=${currentPage}`);
            const data = await response.json();

            if (data.data.contents.data.length === 0) {
                setHasMore(false);
            } else {
                setPosts(prevPosts => [...prevPosts, ...data.data.contents.data]);
                setCurrentPage(prevPage => prevPage + 1);
            }
        } catch (error) {
            console.error('এই পোস্টগুলি লোড করতে সমস্যা হয়েছে:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="">

            <div className="row">
                {posts.map((row, i) => (
                    <div key={i} className="col-12 col-lg-6 d-flex">
                        <div className="sc-keTIit cAOoDE border-bottom pb-3 mb-3">
                            <Link href={`${row.menu_info.workable_menu}/${row.n_id}`}>
                                <div className="row">
                                    <div className="col-6">
                                        <h5>{row.head}</h5>
                                        <p>{row.details}</p>
                                        <small>{row.dateBn}</small>
                                    </div>
                                    <div className="col-6">
                                        <ViewImg image={row.img} cls="img-fluid w-100 h-auto" alt={row.head} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
                {hasMore && (
                    <button
                        onClick={fetchPosts}
                        disabled={isLoading}
                        className="btn btn-secondary"
                    >
                        {isLoading ? 'লোড হচ্ছে...' : 'আরো দেখুন'}
                    </button>
                )}

                {!hasMore && posts.length > 0 && (
                    <p className="mt-6 text-center text-secondary">সব পোস্ট দেখানো হয়েছে</p>
                )}
            </div>
        </div>
    );
}


export default LoadMorePagination;