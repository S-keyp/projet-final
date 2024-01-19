import { useContext } from "react";
import { userContext } from "./../../model/utils/context/index"
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function BaseAuth(){
    const { currentUser } = useContext(userContext)

    if(!currentUser) return <Navigate to='/' />

    return (
        <div>
            <Outlet />
        </div>
    )
}