import { StyleBreadcrumb, StyleBreadCrumbSection } from "@/css_module/Styles";
import Link from "next/link";
import Contents from "@/app/photo/[category]/Contents";

export default async function Page({params}) {
    const galleryCategoryResponse = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/photos/${params.category}`, {cache: "no-store"} );
    const data                   = await galleryCategoryResponse.json();

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
                                    <Link href={ `/gallery` }>ভিডিও</Link>
                                </li>
                                <li>
                                    <Link
                                        href={ `/gallery/${ data.data.category.cat_slug }` }>{ data.data.category.cat_name_bn } </Link>
                                </li>
                            </ul>
                        </StyleBreadcrumb>
                    </StyleBreadCrumbSection>
                </div>
                <div className="py-3">
                    <Contents initialData={ data } category={params.category}/>
                </div>
            </div>
        </div> 
    </>)
}