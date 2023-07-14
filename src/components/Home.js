import React, { useState } from "react";
import Navbar from './Navbar';
import Icons from "./Icons";
import Cards from "./Cards";

import FlightCardTopBar from "./FlightCardTopBar";
import FlightCardMidBar from "./FlightCardMidBar";
import { Footer } from "./Footer";

export default function Home(){

    const [selectedFilter, setSelectedFilter] = useState(1);
    const [searchItem, setSearchItems] = useState("");
    const [searchDate, setSearchDate] = useState("");

    const [data, setData] = useState([]);

    const handleSearch = (searchText, searchDate) => {
        setSearchItems(searchText)
        setSearchDate(searchDate)
      };


    return (
        <div>
            <Navbar onSearch = {handleSearch}  />
            <Icons selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            {selectedFilter ===2 && <FlightCardTopBar/>}
            {selectedFilter ===2 && <FlightCardMidBar/>}
            <Cards selectedFilter={selectedFilter} searchItem={searchItem} searchDate={searchDate} setSearchItem={setSearchItems} setSearchDate={setSearchDate} />
          
           

        </div>
    );

}