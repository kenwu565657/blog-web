import { Link } from "react-router-dom"
import HeaderMenu from "./HeaderMenu"


const Header = () => {
    return (
            <div className="w-full px-4 py-3 uppercase">
                    <div className="relative flex items-center justify-between">
                        <Link to="/home">
                            Content Farm
                        </Link>
                        <HeaderMenu></HeaderMenu>
                    </div>
            </div>

    );
}

export default Header;