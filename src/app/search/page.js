import React from 'react';
import Script from 'next/script';

export const metadata = {
	title: 'স্পটলাইট',
    description: 'স্পটলাইট.',
    keywords: ['স্পটলাইট'],
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/search?cx=31929c92cfec14a0f`,
	},
}

const Search = () => {

	return (
		<>
			<section className="categoryLead section">
				<div className="container">
					<div className="d-flex justify-content-center">	
						<Script async src="https://cse.google.com/cse.js?cx=31929c92cfec14a0f"></Script>
						<div className="gcse-searchresults-only"></div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Search