import Link      from "next/link";
import PropTypes from "prop-types";

export default function GalleryPhoto( { content } ) {
    const imageLink = ( content ) => {
        return `${process.env.NEXT_PUBLIC_STORAGE_SRC}/uploads/photogallery/${ content.start_date.split( " " )[ 0 ].replace( /-/g, "/" ) }/${ content.img }`;
    };

    const fAlbumURL = ( album, catSlug ) => {
        // Define your URL logic here
        return `/photo/${ catSlug }/${ album }`; // Adjust based on actual logic
    };

    return (<Link key={ content.album } href={ fAlbumURL( content.album, content.category_info.cat_slug ) } className="">
            <div className="image-box">
                <img className="img-fluid" src={ imageLink( content ) } alt={ content.album_info.name }/>
                <div className="overlay">
                    <h5 className="img-title-small">{ content.album_info.name }</h5>
                </div>
                <span className="image-icon"><i className="fa-solid fa-images"></i></span>
            </div>
        </Link>)
}

GalleryPhoto.propTypes = {
    content : PropTypes.object.isRequired,
}