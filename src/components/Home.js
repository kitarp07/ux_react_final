import React, { useState } from "react";
import Navbar from './Navbar';
import Icons from "./Icons";
import Cards from "./Cards";


export default function Home(){

    const [selectedFilter, setSelectedFilter] = useState(1);

    return (
        <div>
            <Navbar />
            <Icons selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            <Cards selectedFilter={selectedFilter} />

        </div>
    );

}