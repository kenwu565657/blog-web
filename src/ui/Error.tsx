// import { useRouteError } from "react-router-dom"
import LinkButton from "./LinkButton";

/*
interface RouteErrorType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
    message: string
}
*/

const Error = () => {
    //const error: RouteErrorType = useRouteError();

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            {/*<p>{error.data || error.message}</p>*/}

            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    )
}

export default Error;