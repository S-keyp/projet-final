import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function OrderValidated() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 4500)
    }, [])

    return (
        <section className="section">
            <h2 className="section__subtitle">Thanks for your order !</h2>
            <p className="section__paragraph">Everything is validated and you will soon be redirected to the homepage</p>
        </section>
    )
}