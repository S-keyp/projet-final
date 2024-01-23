import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function OrderValidated () {
    
    const navigate = useNavigate()
    useEffect(() =>{
        setTimeout(() => {
            navigate('/')
        }, 4500)
    },[])
    

    return (
        <>
            <h2>Thanks for your order !</h2>
            <p>Everything is validated and you will soon be redirected to the homepage</p>
        </>
    )
}