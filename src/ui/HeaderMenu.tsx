import { Link } from "react-router-dom"

const HeaderMenu = () => {

    const headerMenuStyle: string = "flex flex-row space-x-8";

    return (
        <div className={headerMenuStyle}>
            <Link to="/" className={headerMenuStyle}>
                Home
            </Link>
            <Link to="/" className={headerMenuStyle}>
                Post
            </Link>
            <Link to="/" className={headerMenuStyle}>
                About
            </Link>
        </div>
    )
}

export default HeaderMenu;