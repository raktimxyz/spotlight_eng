import React from 'react';
import ViewImg from "../../components/viewImg";
import Link from "next/link";

export const metadata = {
    title: "সব খবর | স্পটলাইট",
    description: "স্পষ্টতা, স্পষ্টভাষিতা ও বিশ্বাসযোগ্যতার অঙ্গীকার নিয়ে একটি স্বাধীন সংবাদমাধ্যম হিসেবে গণমানুষের কাছে গ্রহণযোগ্যতা অর্জন করে  দেশের গণমাধ্যম জগতে শীর্ষ সংবাদ ব্র্যান্ড হওয়ার লক্ষ্য নিয়ে যাত্রা শুরু করেছে স্পটলাইট ।",
    keywords: ["স্পটলাইট", "কিওয়ার্ড২", "কিওয়ার্ড৩"],
    authors: [{ name: "আপনার নাম" }],
    creator: "আপনার নাম",
    publisher: "স্পটলাইট",
    openGraph: {
        title: "সব খবর | স্পটলাইট",
        description: "সব খবর | স্পটলাইট",
        images: [
            {
                url: "https://example.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ছবির বিবরণ"
            }
        ],
        locale: "bn_BD",
        type: "website",
    },
    alternates: {
        canonical: "https://example.com/current-page",
    }
};

export default async function TodaysNews({ searchParams }) {
    const page = parseInt(searchParams?.page) || 1;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/recent-news?page=${page}`,
            { cache: "no-store" }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch news");
        }

        const data = await res.json();

        const newsList = data.contents?.data || [];
        const currentPage = parseInt(data.contents?.current_page) || 1;
        const lastPage = parseInt(data.contents?.last_page) || 1;
        const total = parseInt(data.contents?.total) || 0;
        const perPage = parseInt(data.contents?.per_page) || 15;

        return (
            <div className="container my-5">
                <h2 className="mb-4 text-center">আজকের খবর</h2>

                <div className="row">
                    {newsList.length > 0 ? (
                        newsList.map((news) => (
                            <div key={news.n_id} className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/${news.menu_info.workable_menu}/${news.n_id}`}>
                                        <ViewImg image={news.img} cls="w-100 h-auto " alt={news.head} />
                                        <div className="card-body">
                                            <h5 className="card-title">{news.head}</h5>
                                        </div>
                                        <div className="card-footer bg-white border-0 text-end">
                                            <small className="text-secondary">{news.date}</small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>কোন খবর পাওয়া যায়নি।</p>
                        </div>
                    )}
                </div>

                {lastPage > 1 && (
                    <nav aria-label="Page navigation" className="mt-4">
                        <ul className="pagination justify-content-center">

                            {currentPage > 1 && (
                                <li className="page-item">
                                    <a className="page-link" href={`?page=${currentPage - 1}`}>
                                        &laquo; পূর্ববর্তী
                                    </a>
                                </li>
                            )}

                            {currentPage > 3 && (
                                <>
                                    <li className="page-item">
                                        <a className="page-link" href="?page=1">১</a>
                                    </li>
                                    <li className="page-item disabled">
                                        <span className="page-link">...</span>
                                    </li>
                                </>
                            )}

                            {Array.from({ length: lastPage }, (_, i) => i + 1)
                                .filter(p =>
                                    p >= Math.max(1, currentPage - 2) &&
                                    p <= Math.min(lastPage, currentPage + 2)
                                )
                                .map((p) => (
                                    <li
                                        key={p}
                                        className={`page-item ${p === currentPage ? "active" : ""}`}
                                    >
                                        <a className="page-link" href={`?page=${p}`}>
                                            {p}
                                        </a>
                                    </li>
                                ))
                            }

                            {currentPage < lastPage - 2 && (
                                <>
                                    <li className="page-item disabled">
                                        <span className="page-link">...</span>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href={`?page=${lastPage}`}>
                                            {lastPage}
                                        </a>
                                    </li>
                                </>
                            )}

                            {currentPage < lastPage && (
                                <li className="page-item">
                                    <a className="page-link" href={`?page=${currentPage + 1}`}>
                                        পরবর্তী &raquo;
                                    </a>
                                </li>
                            )}

                        </ul>

                        <div className="text-center mt-2">
                            <small className="text-muted">
                                পেজ {currentPage} / {lastPage} | মোট {total}টি খবর | প্রতি পেজে {perPage}টি
                            </small>
                        </div>
                    </nav>
                )}

                {lastPage <= 1 && (
                    <div className="text-center mt-4">
                        <small className="text-muted">
                            সব খবর এই পেজেই দেখানো হয়েছে। (মোট {total}টি)
                        </small>
                    </div>
                )}
            </div>
        );

    } catch (error) {
        console.error('Error fetching news:', error);
        return (
            <div className="container my-5">
                <div className="alert alert-danger text-center">
                    <h4>খবর লোড করতে সমস্যা হয়েছে</h4>
                    <p>পরে আবার চেষ্টা করুন।</p>
                    <a href="?page=1" className="btn btn-primary">
                        পুনরায় চেষ্টা
                    </a>
                </div>
            </div>
        );
    }
}