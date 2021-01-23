

const SearchBox = (props) => {


    return (
        <label>
            Search:
            <input type="text" className="form-control mb-3" onChange={props.handleSearch}></input>
        </label>
        
    )
}

export default SearchBox;