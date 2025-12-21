"use client"

import React, { useEffect, useMemo, useState } from "react";

const SearchBTN = () => {
    const [searchOpen, setSearchOpen] = useState(0);

    const searchBtnOpen = () => {
        setSearchOpen(1)
    }

    const searchBtnClose = () => {
        setSearchOpen(0)
    }

    const searchGo = () => {
        setSearchOpen(0)
    }


    return (
        <>
            <button className="btn border-0 px-0 mt-1" onClick={searchBtnOpen}>
                <i className="bi bi-search"></i>
            </button>

            {searchOpen == 1 &&
                <div className="searchArea">
                    <div className="container">
                        <div className="m-5 p-5 d-flex justify-content-center position-relative">
                            <div className="col-12 col-md-6 mt-5 pt-5">
                                <form action={`/search`} method="get">
                                    <div className="input-group mb-3">
                                        <input type="hidden" value="31929c92cfec14a0f" name="cx" />
                                        <input type="hidden" name="cof" value="FORID:10" />
                                        <input type="hidden" value="UTF-8" name="ie" />
                                        <input name="q" className="form-control border-0" type="search" placeholder="Search" aria-label="Search" required />
                                        <button className="btn btn-secondary" type="submit"><i className="bi bi-search"></i></button>
                                    </div>
                                </form>

                            </div>

                            <button className="btn btn-danger position-absolute top-5 end-0" type="button" onClick={searchBtnClose}><i className="bi bi-x-lg"></i></button>

                        </div>
                    </div>
                </div>
            }

        </>
    );
};

export default SearchBTN;
