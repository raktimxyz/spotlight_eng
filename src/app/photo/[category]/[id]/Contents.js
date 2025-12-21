"use client";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-share.css";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgRotate from "lightgallery/plugins/rotate";
import lgShare from "lightgallery/plugins/share";
import lgFullScreen from "lightgallery/plugins/fullscreen";
import { formatBengaliTime } from "@/utils/Helpers";
import Image from "next/image";
import lazyLoaderImage from "@/assets/image/lazy-loader.jpg";

export default function Contents( {data, id, category} ) {
    const generatePhotoUrl = (startDate, photo) => {
        const pdate = new Date(startDate).toISOString().split('T')[0].replace(/-/g, '/');

        return `${process.env.NEXT_PUBLIC_STORAGE_SRC}/uploads/photogallery/${pdate}/${photo.img}`;
    };

    return (
        <>
            <div className="container mt-3">
                <div className="news-details">
                    <div className="headline">
                        <h1 className="text-bold">
                            { data.detailAlbum[ 0 ].album_info.title }
                        </h1>
                    </div>
                    <div className="updated-at">
                        <p className="mb-0">প্রকাশ: { formatBengaliTime( data.detailAlbum[ 0 ].updated_at ) }</p>
                    </div>
                    <div className="content">
                        <LightGallery
                            speed={ 500 }
                            plugins={ [ lgThumbnail, lgRotate, lgZoom, lgFullScreen, lgShare, lgAutoPlay ] }

                        >
                            { data.detailAlbum.map( ( photo, index ) => (
                                <a href={ generatePhotoUrl( photo.start_date, { img : photo.img } ) } key={ index }
                                   className="">
                                    <div className="card border offset-lg-1 col-lg-10 col-12 my-5">
                                        <div className="card-body">
                                            <Image src={generatePhotoUrl( photo.start_date, { img : photo.img } )} alt={photo.title} width={1200} height={600}  className="img-fluid" placeholder={`blur`}
                                                   blurDataURL={ lazyLoaderImage.src }/>
                                            <div className="card-text btn btn-danger my-3">
                                                { index + 1 } / { data.detailAlbum.length }
                                            </div>
                                            <div className="card-title  text-danger mb-0">
                                                <h5 className="mb-0">
                                                    { photo.title }
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>) ) }
                        </LightGallery>

                    </div>
                </div>
            </div>
        </>)
}