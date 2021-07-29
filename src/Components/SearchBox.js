import React from 'react'
const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input onChange
            = { searchChange }
            type = "search"
            placeholder = "search robots"
            className = "pa3 bg-lightestblue bw3" />
        </div>
    )
}    
export default SearchBox