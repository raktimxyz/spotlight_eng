import React from "react";
import styles from "@/css_module/videoGallery.module.css";
import Link from "next/link";
import ViewImg from "./viewImg";

const VideoGallery = ({ data }) => {
    return (
        <div className="container">
            <div className={styles.galleryContainer}>
                <div className="section-area mb-4">
                    <Link className="section-title fs-4" href={`/video`}>Video Gallery <i className="bi bi-arrow-right-short"></i></Link>
                </div>

                <div id="videoGrid">
                    <div className="row mb-4">
                        {data && data.slice(0, 2).map((row, i) =>
                            <div className="col-6 col-md-6" key={i}>
                                <div className={`${styles.fadeIn} ${styles.videoItem}`} data-category="demo">
                                    <div className={styles.videoCard}>
                                        <Link href={`/video/play/${row.v_id}`}>
                                            <div className={styles.videoThumbnail}>
                                                <ViewImg image={`https://img.youtube.com/vi/${row.link}/sddefault.jpg`} cls="w-100 h-auto" alt={row.title} />

                                                <span className={styles.playButton}>
                                                    <i className="bi bi-play-fill"></i>
                                                </span>
                                            </div>
                                            <div className={styles.videoInfo}>
                                                <h5 className={styles.videoTitle}>{row.title}</h5>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="row">
                        {data && data.slice(2, 6).map((row, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className={`${styles.fadeIn} ${styles.videoItem}`}>
                                    <div className={styles.videoCard}>
                                        <Link href={`/video/play/${row.v_id}`}>
                                            <div className={styles.videoThumbnail}>
                                                <ViewImg image={`https://img.youtube.com/vi/${row.link}/sddefault.jpg`} cls="w-100 h-auto" alt={row.title} />
                                                <span className={styles.playButton}>
                                                    <i className="bi bi-play-fill"></i>
                                                </span>
                                            </div>
                                            <div className={styles.videoInfo}>
                                                <h6 className={styles.videoTitle}>{row.title}</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
