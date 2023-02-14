import {Outlet} from "react-router-dom";
import Header from "./components/Header.jsx";

const Root = () => {

    return (
        <main id="app">
            <Header />
            <Outlet />
        </main>
    )
}

export default Root;