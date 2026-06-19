// app/news-sitemap.xml/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const resss = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/sitemap-gnews?page=1`,
              { cache: "no-store" }
          );

    if (!resss.ok) {
        throw new Error("Failed to fetch news");
    }

    const data = await resss.json();

    const newsList = data.contents?.data || [];

    // ডেটা অ্যারে না হলে খালি অ্যারে সেট করার সেফটি গার্ড
    const articles = Array.isArray(newsList) ? newsList : [];

    // ২. XML-এর লুপ স্ট্রাকচার তৈরি করুন
    const urlElements = articles.map((article) => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const url = `${baseUrl}/${article?.menu_info?.workable_menu}/${article?.n_id}`;
      const title = article?.head || '';
      const date = article?.date || new Date().toISOString().split('T')[0];

      return `  <url>
    <loc>${url}</loc>
    <news:news>
      <news:publication>
        <news:name>Spotlight</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${date}</news:publication_date>
      <news:title>${escapeXml(title)}</news:title>
    </news:news>
  </url>`;
    }).join('\n');

    // ৩. সম্পূর্ণ XML টেমপ্লেট একসাথে জোড়া লাগান
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlElements}
</urlset>`;

    // ৪. ব্রাউজার এবং গুগল ক্রলারকে XML রেসপন্স হিসেবে রিটার্ন করুন
    return new NextResponse(sitemapXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
      },
    });

  } catch (error) {
    console.error('Sitemap error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// স্পেশাল ক্যারেক্টার (&, <, >) থাকলে XML যাতে ক্র্যাশ না করে তার জন্য একটি হেল্পার ফাংশন
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
