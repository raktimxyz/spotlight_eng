import React from 'react';

export default async function sitemap() { 
  const resss = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/sitemap-news?page=1`,
            { cache: "no-store" }
        );

        if (!resss.ok) {
            throw new Error("Failed to fetch news");
        }

        const data = await resss.json();

        const newsList = data.contents?.data || [];

  return newsList.map((sss) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${sss.menu_info.workable_menu}/${sss.n_id}`,
    lastModified: sss.start_date,
    changeFrequency: 'hourly',
  }))
  
}




