import { Link } from "react-router-dom"
import SearchComponentContainer from "../features/search/SearchComponentContainer";

const HeaderMenu = () => {

    const headerMenuStyle: string = "flex flex-row space-x-8";

    return (
        <div className={headerMenuStyle}>
            <SearchComponentContainer></SearchComponentContainer>
            <Link to="/home" className={headerMenuStyle}>
                Home
            </Link>
            <Link to="/post" className={headerMenuStyle}>
                Post
            </Link>
            <Link to="/about" className={headerMenuStyle}>
                About
            </Link>
        </div>
    )
}

export default HeaderMenu;