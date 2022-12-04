import React, {FC, useState} from "react";

type Props = {
    dispatcher?: void;
    placeholder? : string;
}

export const SearchField: FC<Props> = ({placeholder, dispatcher}) => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <>
            <div className={` w-full `}>
                <input className={`rounded-lg border-black border-2 placeholder:pl-2`} placeholder={placeholder ? placeholder : "search for something"}/>
            </div>
        </>
    )
}