"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "@/css_module/details.module.css";
import axios from "axios";
import ViewImg from "@/components/viewImg";
import Script from 'next/script';

const ArticleComponent = ({ newsData }) => {
    const [details, setDetails] = useState(newsData);
    const [loading, setLoading] = useState(true);
    const [getUrl, setSetUrl] = useState();

    useEffect(() => {
    }, [newsData]);

    useEffect(() => {
        if (newsData.n_id) {
            // axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/hit`, {
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Content-Type': 'application/json',
            //     },
            //     n_id: newsData.n_id,
            // });
        }

        if (newsData) {
            setDetails(newsData);
            setSetUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/${details.menu_info.workable_menu}/${details.n_id}`);
            setLoading(false);
        }

    }, [newsData, details.menu_info.workable_menu, details.n_id]);


    if (newsData.length == 0) {
        return '';
    }
    if (loading) {
        return (<div className="loader"></div>);
    }

    return (<section className="single_news" data-url={getUrl} data-head={details.head} data-nid={details.n_id}>

        <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href={`/`}><i className="bi bi-house"></i></Link></li>
                <li className="breadcrumb-item"><Link href={`${details.menu_info.workable_menu}`} className="text-decoration-none">{details.menu_info.display_menu}</Link></li>
            </ol>
        </nav>

        <div className="mb-4">
            <h3>{details.sholder}</h3>
            <h1 className="fw-bold">
            
            {details.prefix?
                <span className="head-prefix">{details.prefix+'/ '}</span> : ''
            }
             
            {details.head}
            </h1>
            <p className="lead">{details.subhead}</p>
        </div>

        <div className="article-meta d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                {/* <ViewImg image={details.img} cls={`${styles.authorImg} me-3 w-100 h-auto`} alt={details.head} /> */}
                <div>
                    <h6 className="mb-0">{details.author}</h6>
                    <small className="text-muted">{details.author_name}</small>
                </div>
            </div>
            <div className="text-end">
                <p className="mb-0 text-muted"><i className="far fa-calendar-alt me-1"></i> {details.dateBn}</p>
            </div>
        </div>

        <div className="my-4"> 
            <div className={styles.socialShare}>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${getUrl}`}className="bg-primary"><i className="bi bi-facebook"></i></Link>
                <Link href={`https://twitter.com/share?url=${getUrl}`}className="bg-info"><i className="bi bi-twitter"></i></Link>
                <Link href={`https://api.whatsapp.com/send?text=${getUrl}`}className="bg-success"><i className="bi bi-whatsapp"></i></Link>
                <Link href={`https://www.linkedin.com/shareArticle?url=${getUrl}`}className="bg-secondary"><i className="bi bi-linkedin"></i></Link>
            </div>
        </div>

        <div className="my-4">
            <ViewImg image={details.img} cls={`img-fluid rounded w-100 h-auto`} alt={details.head} />

            <small className="d-block text-muted mt-2">{details.caption}</small>
        </div>

        <div className={styles.articleContent}>
            <article dangerouslySetInnerHTML={{ __html: details.details }} />
        </div>

        {/* <div className="my-4">
            <h5>Tags:</h5>
                <Link href="#" className="badge bg-secondary text-decoration-none me-1">Renewable Energy</Link>
        </div> */}

        <div className="my-4"> 
            <div className={styles.socialShare}>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${getUrl}`}className="bg-primary"><i className="bi bi-facebook"></i></Link>
                <Link href={`https://twitter.com/share?url=${getUrl}`}className="bg-info"><i className="bi bi-twitter"></i></Link>
                <Link href={`https://api.whatsapp.com/send?text=${getUrl}`}className="bg-success"><i className="bi bi-whatsapp"></i></Link>
                <Link href={`https://www.linkedin.com/shareArticle?url=${getUrl}`}className="bg-secondary"><i className="bi bi-linkedin"></i></Link>
            </div>
        </div>

        {/* <div className="card bg-light my-4">
            <div className="card-body">
                <div className="d-flex">
                    
                    <div>
                        <h5 className="card-title">About the Author</h5>
                        <p className="card-text">John Smith is a technology correspondent for Daily News with over 15 years of experience covering renewable energy innovations and climate technologies. He holds a Masters degree in Environmental Science from Stanford University.</p>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="my-5">
            {/*<h3 className="mb-4">Comments (5)</h3>*/}
            <div id="fb-root"></div>
            <Script
                async
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v23.0"
            />

            <div class="fb-comments" data-href="{`${getUrl}`}" data-width="100%" data-numposts="2"></div>

        </div>
    </section>);
};

export default ArticleComponent;
