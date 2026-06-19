"use client"
import { useEffect, useState } from "react";
import PropTypes               from "prop-types";
import { FontAwesomeIcon }     from "@fortawesome/react-fontawesome";
import { faX }                 from "@fortawesome/free-solid-svg-icons";
import Image                   from "next/image";

const SiteBlockAdvertisements = ( { advertisements } ) => {
    const [ isVisible, setIsVisible ] = useState( false );
    const [ timeLeft, setTimeLeft ]   = useState( 6 );
    const key                         = ( position ) => {
        return advertisements.map( ( advertisement, index ) => advertisement.position === position ? index : null ).filter( index => index !== null );
    }
    const ad                          = ( ads ) => {
        return advertisements[ ads[ 0 ] ]
    }

    const desktopAd = ad( key( `desktop-home-popup` ) );
    // alert(desktopAd.file);
    const mobileAd  = ad( key( `mob-home-popup` ) );

    useEffect( () => {
        const showTimeout = setTimeout( () => {
            setIsVisible( true );
        }, 1000 );

        const hideTimeout = setTimeout( () => {
            setIsVisible( false );
        }, 8000 ); // 1000ms to show + 6000ms to hide

        return () => {
            clearTimeout( showTimeout );
            clearTimeout( hideTimeout );
        };
    }, [] );

    useEffect( () => {
        if ( timeLeft > 0 ) {
            const countdownInterval = setInterval( () => {
                setTimeLeft( ( prev ) => prev - 1 );
            }, 1000 );

            return () => clearInterval( countdownInterval );
        }
    }, [ timeLeft ] );

    const handleClose = () => {
        setIsVisible( false );
    };

    if ( !isVisible ) return null;

    return (
        <>
            { desktopAd && <div id="siteblock" className="site-block d-lg-block d-none" style={ { display : 'block' } }>
                <div className="siteblock-content">
                <span className="block-close" onClick={ handleClose }>
                    <FontAwesomeIcon icon={ faX }/>
                </span>
                    { desktopAd ? <>
                        <div className="d-lg-block d-none">
                            { desktopAd.type === 'image' ?
                                <a href={ desktopAd.url } data-id={ desktopAd.id } target="_blank">
                                    <Image src={`${process.env.NEXT_PUBLIC_STORAGE_SRC}/public/uploads/ad/${ desktopAd.file }`} alt={desktopAd.name} width={970} height={500} style={{ width : '100%' }}/>
                                    {/*<img src={ `https://apanel.spotlightnews24.com/uploads/ad/${ desktopAd.file }` }*/}
                                    {/*     style={ { width : '100%' } }*/}
                                    {/*     alt={ desktopAd.name }/>*/}
                                </a> :
                                <div data-id={ desktopAd.id }
                                     dangerouslySetInnerHTML={ { __html : desktopAd.custom_code } }/> }
                        </div>
                    </> : '' }

                    

                    <div className="clearfix" style={ { marginBottom : '5px' } }></div>
                </div>
            </div> }
 

            { mobileAd && <div id="siteblock" className="site-block d-lg-none d-block" style={ { display : 'block' } }>
                <div className="siteblock-content">
                <span className="block-close" onClick={ handleClose }>
                    <FontAwesomeIcon icon={ faX }/>
                </span>
                    

                    { mobileAd ? <>
                        <div className="d-lg-none d-block">
                            { mobileAd.type === 'image' ?
                                <a href={ mobileAd.url } data-id={ mobileAd.id } target="_blank">
                                    <Image src={`${process.env.NEXT_PUBLIC_STORAGE_SRC}/public/uploads/ad/${ mobileAd.file }`} alt={mobileAd.name} width={400} height={400} style={{ width : '100%' }}/>
                                    {/*<img src={ `https://apanel.spotlightnews24.com/uploads/ad/${ mobileAd.file }` }*/}
                                    {/*     style={ { width : '100%' } }*/}
                                    {/*     alt={ mobileAd.name }/>*/}
                                </a> :
                                <div data-id={ mobileAd.id }
                                     dangerouslySetInnerHTML={ { __html : mobileAd.custom_code } }/> }
                        </div>
                    </> : '' }

                    <div className="clearfix" style={ { marginBottom : '5px' } }></div>
                </div>
            </div> }


        </>);
}

SiteBlockAdvertisements.propTypes = {
    advertisements : PropTypes.array.isRequired,
}

export default SiteBlockAdvertisements;