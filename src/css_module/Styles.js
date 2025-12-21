"use client"
import styled from "styled-components";

const size = {
    mobile : `1199px`, desktop : `1200px`,

}

export const Device = {
    mobile : `(max-width: ${ size.mobile })`, desktop : `(min-width: ${ size.desktop })`,
}

export const StyleLatestCategory = styled.div`
    & div:nth-of-type(2) {
        max-height : 250px;
        overflow   : hidden;
        overflow-y : scroll
    }
`;

export const StylePopularCategory = styled.div`
    & div:nth-of-type(2) {
        max-height : 250px;
        overflow   : hidden;
        overflow-y : scroll
    }
`;

export const StyleCategoryName = styled.div`
    position      : relative;
    border-bottom : 4px var(--bs-border-style) var(--bs-border-color) !important;

    & h4 {
        font-weight     : bold;
        position        : absolute;
        bottom          : -24px;
        left            : 0;
        padding         : 0 .7rem 0 0;
        background      : white;
        display         : flex;
        align-items     : center;
        justify-content : center;

        &:after {
            content     : '\\f061';
            font-family : "Font Awesome 6 Free", sans-serif;
            font-weight : 900;
            color       : #ba1223;
            font-size   : 1.25rem;
            margin-left : 8px;
            margin-top  : 1px;
        }
    }
`;


export const StyleOnlyHeadingContents = styled.div`
    margin-top : 3rem;

    & a {
        &:nth-of-type(1) {
            & h5 {
                padding-top : 0 !important;
            }
        }

        &:nth-last-child(1) {
            & h5 {
                padding-bottom : 0 !important;
                border-bottom  : none;
            }
        }

        & h5 {
            margin-bottom : 0;
            padding       : .5rem 0;
            border-bottom : 1px solid var(--global-border-color);

            &::before {
                content      : '\\f0c8';
                font-family  : "Font Awesome 6 Free", sans-serif;
                font-weight  : 900;
                color        : #ba1223;
                margin-right : .5rem;
            }
        }
    }
`;

export const StyleDesignOneContents = styled.div`
    margin-top : 3rem;
`;

export const StyleBreadCrumbSection = styled.div`
    //border-top    : 1px solid var(--global-border-color);
    border-bottom : 1px solid var(--global-border-color);
`;

export const StyleBreadcrumb = styled.div`
    margin : .5rem 0;

    & ul {
        display        : flex;
        flex-direction : row;
        margin-bottom  : 0;
        padding-left   : 0;

        & li {
            margin-left     : 0;
            margin-right    : .5rem;
            font-weight     : bold;
            display         : flex;
            justify-content : center;
            align-items     : center;

            &:not(:nth-last-child(1)) {
                &::after {
                    content     : '\\2f';
                    font-family : "Font Awesome 6 Free", sans-serif;
                    font-weight : 900;
                    color       : var(--site-color);
                    margin-left : .5rem;
                    font-size   : 1.25rem;
                }
            }
        }
    }
`;

export const StyleBreadcrumbSubCategory = styled.div`
    margin : .5rem 0;

    & ul {
        display        : flex;
        flex-direction : row;
        margin-bottom  : 0;
        padding-left   : 0;

        & li {
            margin-left     : 0;
            margin-right    : .5rem;
            font-weight     : bold;
            display         : flex;
            justify-content : center;
            align-items     : center;
        }

        & li:not(:nth-last-child(1)) {
            &:after {
                content     : '\\f111';
                font-family : "Font Awesome 6 Free", sans-serif;
                font-weight : 900;
                color       : #ba1223;
                margin-left : .5rem;
                font-size   : .5rem;
            }
        }
    }
`;

export const StyleOtherCategoryContents = styled.div`
    padding-top : .5rem;

    & .contents {
        margin-top : 1.5rem;

        & a {
            &:nth-of-type(1) .content {
                padding-top : 0
            }

            & .content {
                padding-top    : var(--full);
                padding-bottom : var(--full);
                border-bottom  : 1px solid var(--global-border-color);
            }
        }
    }
`;

export const StyleTopContents = styled.div`
    @media screen And ${ Device.desktop } {
        border-bottom : 1px solid var(--global-border-color);
        & div {
            & div {
                display        : flex;
                flex-direction : column;

                & a {
                    padding-bottom : var(--full);

                    & div:nth-of-type(1) {
                        overflow : hidden;
                        position : relative;
                    }

                    & div:nth-of-type(2) {
                        padding-top     : var(--half);
                        display         : flex;
                        justify-content : start;
                    }
                }
            }
        }
    }
`;
export const StyleCategoryContents = styled.div`
`;
export const StyleCategoryContent  = styled.div`
    padding-top    : var(--full);
    padding-bottom : var(--full);
    border-bottom  : 1px solid var(--global-border-color);
`;