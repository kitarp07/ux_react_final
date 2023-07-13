import React, { useState } from "react";
import Navbar from './Navbar';
import Icons from "./Icons";
import Cards from "./Cards";

import FlightCardTopBar from "./FlightCardTopBar";
import FlightCardMidBar from "./FlightCardMidBar";
import { Footer } from "./Footer";

export default function Home(){

    const [selectedFilter, setSelectedFilter] = useState(1);



    return (
        <div>
            <Navbar />
            <Icons selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            {selectedFilter ===2 && <FlightCardTopBar/>}
            {selectedFilter ===2 && <FlightCardMidBar/>}
            <Cards selectedFilter={selectedFilter} />
          
           

        </div>
    );

}