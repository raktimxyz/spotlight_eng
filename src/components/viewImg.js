"use client"

import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality}`;
}

const ViewImg = ({ image, cls, id = '', alt , width='800'}) => {

    const isValidUrl = (image) => {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlRegex.test(image);
    };

    const getImg = isValidUrl(image) ? image : `${process.env.NEXT_PUBLIC_STORAGE_SRC}/${image}`;


    if (id == '') {
        return (
            <Image
                loader={imageLoader}
                src={getImg}
                className={cls}
                alt={alt}
                width={width}
                height={483}
                quality={100}
            />
        );
    } else {
        return (
            <Image
                loader={imageLoader}
                src={getImg}
                id={id}
                className={cls}
                alt={alt}
                width={800}
                height={483}
                quality={100}
            />
        );
    }
};


export default ViewImg;
