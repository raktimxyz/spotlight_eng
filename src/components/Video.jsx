import PropTypes from "prop-types";
import Link      from "next/link";
import Image         from "next/image";
import lazyLoaderImage from "@/assets/image/lazy-loader.jpg";

export default function Video( { data, class_name } ) {

    const imageURL = ( content ) => {
        if ( !content.thumb ) {
            return `https://i3.ytimg.com/vi/${ content.link.trim().slice( -11 ) }/hqdefault.jpg`;
        } else {
            return `${process.env.NEXT_PUBLIC_STORAGE_SRC}/uploads/video/${ content.v_date.replace( /-/g, '/' ) }/thumbnail/${ content.thumb }`;
        }
    }

    return (<Link href={ `/videos/${data.cat_info.cat_slug}/${ data.v_id }` }>
        <div className="row">
            <div className="image position-relative">
                <Image src={ imageURL( data ) } alt={ data.title } className={ class_name } width={1200} height={600} placeholder={"blur"} blurDataURL={lazyLoaderImage.src}/>
                <div className="play-button">
                    <i className="fa-solid fa-play text-white"></i>
                </div>
            </div>
            <div className="description pt-2">
                <h5>
                    { data.title }
                </h5>
            </div>
        </div>
    </Link>)
}

Video.propTypes = {
    data : PropTypes.object.isRequired, class_name : PropTypes.string.isRequired,
}