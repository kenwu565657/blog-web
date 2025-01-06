import { Outlet, useNavigation } from "react-router-dom"
import Loader from "./Loader";

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading: boolean = navigation.state === 'loading';

    return (
        <div>
            { isLoading && <Loader />}

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default AppLayout;