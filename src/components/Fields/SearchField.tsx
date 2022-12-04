import React, {FC, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

type Props = {
    dispatcher?: void;
    placeholder? : string;
}

export const SearchField: FC<Props> = ({placeholder, dispatcher}) => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <>
            <div className={` w-full rounded-lg border-black border-4 flex `}>
                <div className=" float-left">
                    <input type='text' className={`outline-0 m-1 pl-2 w-content font-arial`} placeholder={placeholder ? placeholder : "search for something"}/>
                </div>
                <div className="float-right w-full m-auto">
                    <div className="mr-1">
                        <FontAwesomeIcon className="text-primary float-right active:text-black" icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
        </>
    )
}