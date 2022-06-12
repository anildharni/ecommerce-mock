import React, { useContext } from "react";
import "./SearchBar.css";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import StoreContext from "../../store/StoreContext";

function SearchBar({ placeholder }) {

    // Idea is to get all product titles and compare it with the search string.
    // Most of the logic abstracted away to a context file

    const ctx = useContext(StoreContext);

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={ctx.wordEntered}
                    onChange={ctx.handleFilter}
                />
                <div className="searchIcon">
                    {ctx.filteredData.length === 0
                        ? <FaSearch />
                        : <AiOutlineClose id="clearBtn" onClick={ctx.clearInput} />
                    }
                </div>
            </div>
            {ctx.filteredData.length !== 0 && (
                <div className="dataResult">
                    {ctx.filteredData.slice(0, 10).map((value, key) => {
                        return (
                            <a                                 // The link here will help us to click directly
                                key={key}                      // on the product and takes you to product page
                                className="dataItem"
                                href={`http://localhost:3000/products/${value.id}`}
                                target="_blank"
                                rel="noreferrer">
                                <p>
                                    {value.title}
                                </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;