"use client"

import React, { useRef, useEffect, useState } from 'react';

const LazySection = ({ children, threshold = 0.1, rootMargin = '200px' }) => {
    const componentRef = useRef(null);
    const [hasIntersected, setHasIntersected] = useState(false);

    useEffect(() => {
        if (hasIntersected) {
            return;
        }
        if (!('IntersectionObserver' in window)) {
            setHasIntersected(true);
            return;
        }

        // Store the current ref value in a variable
        const currentElement = componentRef.current;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHasIntersected(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: rootMargin,
                threshold: threshold,
            }
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            // Use the stored variable instead of componentRef.current
            if (currentElement) {
                observer.unobserve(currentElement);
            }
            observer.disconnect();
        };
    }, [hasIntersected, rootMargin, threshold]);

    return (
        <div ref={componentRef} className="l-s-min-h">
            {!hasIntersected ? (
                <div>Loading...</div>
            ) : (
                children
            )}
        </div>
    );
};

export default LazySection;