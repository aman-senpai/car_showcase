"use client";

import { useState } from "react";

import { SearchManufacturer } from ".";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");

    function handleSearch() {
        throw new Error("Function not implemented.");
    }

    return (
        <form
            action="searchbar"
            onSubmit={handleSearch}
        >
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
            </div>
        </form>
    );
};

export default SearchBar;
