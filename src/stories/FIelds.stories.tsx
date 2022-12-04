import React from "react";
import { SearchField } from "../components";

export default {
    title: 'SearchField',
    component: SearchField
};


export const SearchBar = () => {
    return (
        <>
        <div className="w-64">
            <SearchField />
        </div>
        
        </>
    )
}