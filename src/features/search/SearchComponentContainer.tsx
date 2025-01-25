import { useState } from "react";
import SearchButton from "../../ui/SearchButton";
import { isBlank } from "../../utils/StringUtils";

const SearchComponentContainer = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const isSearchKeywordBlank = isBlank(searchKeyword);

    return (
        <>
        {isSearchKeywordBlank ? (<SearchButton></SearchButton>) : (<SearchButton></SearchButton>)}
        </>
        
    );
}

export default SearchComponentContainer;