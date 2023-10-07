import { useRouteError } from "react-router-dom";
const Error=()=>
{
    const error=useRouteError();
    return (
        <div>
            <h1>Ooops..</h1>
            <p>Something went wromg</p>
            <p>{error.status}:{error.statusText}</p>
        </div>
    )
}
export default Error;