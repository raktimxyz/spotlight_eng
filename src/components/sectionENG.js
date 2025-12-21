import React from "react"; 
import Link from "next/link";
import Image from 'next/image';

async function getEngData() {
    const res = await fetch(`https://dash.spotlightnews24.com/api/v1/eng-recent`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
        next: { revalidate: 30 },
        // cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
 
const SectionENG = async () => {
    
    const endata =  await getEngData();   
    const news = endata.contents.data;
    return (
        <div className="section1 mt-3"> 
 

                <div className="row pb-3">
                    {news.slice(0,8).map((row, i) =>
                        <div key={i} className={`col-lg-3 col-12 ${i === 0 || i === 4? 'border-lg-transparent-left' : 'border-lg-start'}`}>
                            <div className="content border-bottom border-lg-bottom-none py-3 py-lg-0 mb-3">
                                <Link href={`https://english.spotlightnews24.com/${row.menu_info.workable_menu}/${row.n_id}`}>
                                    <div className="row">
                                        <div className="col-6 col-lg-12 image ">          
                                           <Image
                                            src={row.img}
                                            width={150}
                                            height={100}
                                            alt={row.head}
                                            quality={100}
                                            style={{ width: '100%', height: 'auto' }}
                                            />
                                        </div>
                                        <div className="col-6 col-lg-12 order-1 order-lg-2 description pt-0 mt-2 ">
                                            <h5>{row.head}</h5>
                                            {/* <p className="mb-0 d-none d-lg-block">{row.details}</p> */}
                                            <small>
                                                {row.menu_info.display_menu} | {row.dateBn}
                                            </small>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>  
 
        </div>
    );
};

export default SectionENG;
