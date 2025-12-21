 
import { StyleBreadcrumb, StyleBreadCrumbSection } from "@/css_module/Styles";
import Link from "next/link";
import CategoryName from "@/components/CategoryName";
import GalleryPhoto from "@/components/GalleryPhoto";
import Contents from "@/app/photo/[category]/[id]/Contents";

export default async function Page( {params} ) {
    const galleryDetailsResponse = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/photo/${params.category}/${params.id}` );
    const data                  = await galleryDetailsResponse.json();

    const advertisementsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/advertisements`,{cache: "no-store"});
    const advertisementsData     = await advertisementsResponse.json();
    return (<> 
        <div className="container">
            <StyleBreadCrumbSection>
                <StyleBreadcrumb>
                    <ul>
                        <li>
                            <Link href="/">
                                <i className="fa-solid fa-house"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href={ `/gallery` }>গ্যালারি</Link>
                        </li>
                        <li>
                            <Link href={ `/gallery/${ data.data.detailAlbum[ 0 ].category_info.cat_slug }` }>
                                { data.data.detailAlbum[ 0 ].category_info.cat_name_bn }
                            </Link>
                        </li>
                        <li className="text-danger">
                            { data.data.detailAlbum[ 0 ].album_info.title }
                        </li>
                    </ul>
                </StyleBreadcrumb>
            </StyleBreadCrumbSection>
        </div>
        <Contents data={data.data} id={params.id} category={params.category}/>
        <div className="container mt-5">
            <CategoryName name="আরও দেখুন" route={``}/>
            <div className="row mt-3">
                { data.data.moreAlbums.map( ( v, index ) => (<div className="col-6 col-lg-3 py-3" key={ index }>
                    <GalleryPhoto content={ v }/>
                </div>) ) }
            </div>
        </div> 
    </>)
}