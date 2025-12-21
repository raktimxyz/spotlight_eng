"use client"

import { useEffect, useState } from 'react';

export default function FBComments({ url }) {
    const [commentsKey, setCommentsKey] = useState(0);

    useEffect(() => {
        // Load SDK once
        if (!window.FB && !document.getElementById('facebook-jssdk')) {
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v23.0';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Force re-render when URL changes
    useEffect(() => {
        if (url) {
            setCommentsKey(prev => prev + 1);
            
            // Parse after component re-renders
            setTimeout(() => {
                if (window.FB?.XFBML) {
                    window.FB.XFBML.parse();
                }
            }, 500);
        }
    }, [url]);

    return (
        <div key={commentsKey}>
            <div 
                className="fb-comments" 
                data-href={url}
                data-width="100%" 
                data-numposts="5"
            />
        </div>
    );
}