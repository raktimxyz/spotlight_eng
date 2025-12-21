import React from "react";
import ViewImg from "./viewImg";

import logoImg from "../../public/img/logo.png?v=1";
import Image from "next/image";
import Link from "next/link";
import HeaderDate from "./headerDate";
import SearchBTN from "./searchBTN";

const Header = () => {
    return (
        <header className="container d-none d-lg-block">
            <div className="row">
                <div className="d-flex mb-3">
                    <div className="me-auto p-2">
                        <a href={`/`}>
                            <Image
                                src={logoImg.src}
                                className={`h-auto`}
                                alt={`logo`}
                                width={300}
                                height={80}
                                quality={100}
                            />
                        </a>
                    </div>
                    <div className="p-2">
                        <ul className="list-group list-group-horizontal mb-2 float-end">
                            <li className="list-group-item">
                                <a target="_blank" className="text-dark fs-5" href="https://facebook.com/spotlightnews24"><i className="bi bi-facebook"></i></a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" className="text-dark fs-5" href="https://www.youtube.com/@SpotlightNewsbd24"><i className="bi bi-youtube"></i></a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" className="text-dark fs-5" href="https://x.com/Spotlightbd24"><i className="bi bi-twitter-x"></i></a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" className="text-dark fs-5" href="https://www.linkedin.com/company/spotlight-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A6%9F%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%9F/?viewAsMember=true"><i className="bi bi-linkedin"></i></a>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                        <div className="d-flex align-items-center justify-content-end">
                            <span className="bangla-text me-3">
                                <HeaderDate />
                            </span>
                            <div className="d-flex">
                                <Link href={`https://spotlightnews24.com`} className="btn btn-dark text-white pt-1 search-btn me-2">বাংলা</Link>
                                <div className="input-group">
                                    <SearchBTN />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
