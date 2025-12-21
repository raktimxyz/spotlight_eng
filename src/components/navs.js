// "use client"

import React from "react";
import ViewImg from "./viewImg";

import Image from "next/image";
import logoImg from "../../public/img/logo.png?v=1";
import Link from "next/link";
import Offcanvas from "@/components/offcanvas";
import styles from "@/css_module/nav.module.css";

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
        next: { revalidate: 300 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Navs = async () => {
    const data = await getData();

    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark navDark sticky-top py-0">
            <div className="container">
                <a className="navbar-brand d-block d-xl-none" href={`/`}>
                    <Image
                        src={logoImg.src}
                        className={`h-auto`}
                        alt={`logo`}
                        width={150}
                        height={32}
                        quality={100}
                    />
                </a>
                
                <a href="https://spotlightnews24.com" className="btn btn-outline-danger btn-sm d-block d-lg-none">বাংলা</a>
                <button className="navbar-toggler text-secondary fs-1 d-block d-lg-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light fs-5" aria-current="page" href={`/`}><i className="bi bi-house"></i></a>
                        </li>

                        {data.slice(0, 8).map((nav, i) => {
                            if (nav.child_menu.length > 0) {
                                let isDropdown = (nav.slug == '#') ? 'dropdown' : 'dropdown';
                                return (
                                    <li key={i} className="nav-item dropdown">
                                        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/${nav.workable_menu}`} className="nav-link text-light dropdown-toggle fs-5" role="button" aria-expanded="false">{nav.display_menu}</Link>
                                        <ul className="dropdown-menu">
                                            {nav.child_menu.map((row, i) =>
                                                <li key={i}><Link prefetch={false} href={`${process.env.NEXT_PUBLIC_BASE_URL}/${row.workable_menu}`} className="dropdown-item fs-6">{row.display_menu}</Link></li>
                                            )}
                                        </ul>
                                    </li>
                                );
                            }
                            return <li key={i} className="nav-item"><Link prefetch={false} href={`${process.env.NEXT_PUBLIC_BASE_URL}/${nav.workable_menu}`} className={`${styles.menuPadding} nav-link text-light fs-5`}>{nav.display_menu}</Link></li>;
                        })}

                        <li className="nav-item dropdown">
                            <Link href={`#`} className="nav-link text-light dropdown-toggle fs-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">Other</Link>
                            <ul className="dropdown-menu">
                                {data.slice(8).map((row, i) =>
                                    <li key={i}><Link prefetch={false} href={`${process.env.NEXT_PUBLIC_BASE_URL}/${row.workable_menu}`} className="dropdown-item fs-5">{row.display_menu}</Link></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                    <span className="navbar-text p-0">
                        <button className="navbar-toggler text-secondary fs-1 py-0 d-block  border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <i className="bi bi-list"></i>
                        </button>
                    </span>
                </div>
            </div>
        </nav>

        <Offcanvas data={data} />
    </>
    );
};

export default Navs;