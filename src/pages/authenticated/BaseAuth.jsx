import { useContext, useEffect } from "react";
import { UserContext } from "../../model/utils/context/UserContext"
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function BaseAuth() {
    const { user } = useContext(UserContext)


    if (!user) return <Navigate to='/' />


    return (
            <Outlet />
    )





}