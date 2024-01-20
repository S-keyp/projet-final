import { useContext } from "react";
import { UserContext } from "./../../model/utils/context/index"
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function BaseAuth(){
    const { currentUser } = useContext(UserContext)

    if(!currentUser) return <Navigate to='/' />

    return (
        <div>
            <Outlet />
        </div>
    )
}