import { useNavigate } from "react-router-dom"

export default function OrderValidated () {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    }, 4500)

    return (
        <>
            <h2>Your order has been validated !</h2>
            <p>You will soon be redirected to the homepage</p>
        </>
    )
}