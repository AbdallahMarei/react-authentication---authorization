import React from 'react'

const SearchBar = ({...otherProps}) => {
    return (
        <div>
            <input className="search-bar" {...otherProps} />
        </div>
    )
}

export default SearchBar
