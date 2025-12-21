'use client'

import React from "react";
import ViewImg from "./viewImg";
import logoImg from "../../public/img/logo.png";
import Link from "next/link";
import Image from "next/image";
import HeaderDate from "./headerDate";

const Offcanvas = ({ data }) => {
    const closeOffCanvas = () => {
        document.getElementById('offcanvasClose').click();
    }

    return (
        <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title bg-body-tertiary" id="offcanvasDarkNavbarLabel">
                    <Image
                        src={logoImg.src}
                        className={`w-100 h-auto`}
                        alt={`logo`}
                        width={800}
                        height={483}
                        quality={100}
                    />

                    <span className="fs-6 mt-2 d-block">
                        <HeaderDate />
                    </span>
                </h5>
                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link text-dark fs-5" aria-current="page" href={`/`}><i className="bi bi-house"></i> Home</a>
                    </li>
                    {data.slice(0, 12).map((nav, i) => {
                        if (nav.child_menu.length > 0) {
                            let isDropdown = (nav.slug == '#') ? 'dropdown' : 'dropdown';
                            return (
                                <li key={i} className="nav-item dropdown">
                                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/${nav.workable_menu}`} className="nav-link text-dark dropdown-toggle fs-5" role="button" data-bs-toggle={isDropdown} aria-expanded="false">{nav.display_menu}</Link>
                                    <ul className="dropdown-menu">
                                        {nav.child_menu.map((row, i) =>
                                            <li key={i}><Link prefetch={false} href={`${process.env.NEXT_PUBLIC_BASE_URL}/${row.workable_menu}`} className="dropdown-item fs-5">{row.display_menu}</Link></li>
                                        )}
                                    </ul>
                                </li>
                            );
                        }
                        return <li key={i} className="nav-item"><Link prefetch={false} href={`${process.env.NEXT_PUBLIC_BASE_URL}/${nav.workable_menu}`} className="nav-link text-dark fs-5">{nav.display_menu}</Link></li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Offcanvas;
