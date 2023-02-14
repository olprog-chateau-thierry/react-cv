import {Outlet} from "react-router-dom";

const Root = () => {

    return (
        <>
            <header>Header</header>
            <Outlet />
        </>
    )
}

export default Root;