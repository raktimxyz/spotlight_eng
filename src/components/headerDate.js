"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";

const HeaderDate = () => {
    const [date, setDate] = useState();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/date`, {
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            setDate(response.data);
        }).catch(function (res) {
            console.log('error', res)
        });
    }, []);

    return date && <div> {date.enDate}</div>;
};

export default HeaderDate;
