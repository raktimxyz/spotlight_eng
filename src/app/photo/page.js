
import {
    StyleBreadcrumb, StyleBreadCrumbSection, StyleBreadcrumbSubCategory,
}                   from "@/css_module/Styles";
import Link         from "next/link";
import CategoryName from "@/components/CategoryName";
import GalleryPhoto from "@/components/GalleryPhoto";

export default async function Page() {
    const galleryResponse = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/photos`, {cache: "no-store"} );
    const data            = await galleryResponse.json();

    const advertisementResponse = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/advertisements`, { next : { revalidate : 60 } } )
    const advertisementData     = await advertisementResponse.json();
    return (<> 
        <div className="container">
            <div className="row">
                <div className="container">
                    <StyleBreadCrumbSection>
                        <StyleBreadcrumb>
                            <ul>
                                <li>
                                    <Link href={ `/` }><i className="fa-solid fa-house"></i> </Link>
                                    
                                </li>
                                <li>
                                    <Link href={ `/gallery` }>গ্যালারি </Link>
                                </li>
                            </ul>
                        </StyleBreadcrumb>
                        <StyleBreadcrumbSubCategory>
                            <ul className="d-flex flex-wrap">
                                { data.data.photoCategories.map( ( v, index ) => (<li key={ index }>
                                    <Link href={ `/gallery/${ v.cat_slug }` }> { v.cat_name_bn } </Link>
                                </li>) ) }
                            </ul>
                        </StyleBreadcrumbSubCategory>
                    </StyleBreadCrumbSection>
                </div>

                <div className="container mt-5 pt-3">
                    <div className="single-category">
                        <CategoryName name="গ্যালারি" route="/gallery"/>
                        <div className="contents mt-5">
                            <div className="row">
                                <div className="col-lg-6 col-12 pb-3">
                                    <GalleryPhoto content={ data.data.photoAlbums[ 0 ] }/>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="row ">
                                        { data.data.photoAlbums.slice( 1, 3 )
                                              .map( v => (<div key={ v.album } className="col-lg-6 col-12 pb-3">
                                                  <GalleryPhoto content={ v }/>
                                              </div>) ) }
                                    </div>
                                    <div className="row">
                                        { data.data.photoAlbums.slice( 3, 5 )
                                              .map( v => (<div key={ v.album } className="col-lg-6 col-12 pb-3">
                                                  <GalleryPhoto content={ v }/>
                                              </div>) ) }
                                    </div>
                                </div>
                                { data.data.photoAlbums.slice( 5, 9 )
                                      .map( v => (<div key={ v.album } className="col-lg-3 col-12 pb-3">
                                          <GalleryPhoto content={ v }/>
                                      </div>) ) }
                            </div>
                        </div>
                    </div>
                </div>

                { data.data.photoCategories && data.data.photoCategories.map( photoCategory => {
                    const filterPhotos = data.data.categoryPhotos.filter( ( content ) => content.category_id ===
                                                                                         photoCategory.cat_id );

                    if ( !filterPhotos.length ) {
                        return null;
                    }

                    return (<div className="container mt-5" key={ photoCategory.cat_id }>
                        <CategoryName name={ photoCategory.cat_name_bn }
                                      route={ `/gallery/${ photoCategory.cat_slug }` }/>
                        <div className="row mt-3">
                            { filterPhotos.map( ( v, index ) => (<div className="col-6 col-lg-3 py-3" key={ index }>
                                <GalleryPhoto content={ v }/>
                            </div>) ) }
                        </div>
                    </div>)
                } ) }

            </div>
        </div> 
    </>)
}