import { Outlet, useNavigation } from "react-router-dom"
import Loader from "./Loader";
import Header from "./Header";

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading: boolean = navigation.state === 'loading';

    return (
        <div className="w-full">
            { isLoading && <Loader />}

            <Header></Header>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default AppLayout;