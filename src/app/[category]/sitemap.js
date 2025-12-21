import React from 'react';

export default async function sitemap({ params }) { 
  const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sitemap-dailynews/${params}?page=1`,
        { cache: "no-store", responseType: 'json' }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch news");
    }

    const data = await res.json();

    const newsList = data.contents?.data || [];

  return newsList.map((news) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${news.menu_info.workable_menu}/${news.n_id}`,
    lastModified: news.start_date,
    changeFrequency: 'daily',
  }))
  
}




