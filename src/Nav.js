import './Nav.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false)
    const history = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img onClick={() => history('/')} className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix logo" />
                <img onClick={() => history('/profile')} className="nav__avatar" src="https://i.pinimg.com/550x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="Avatar" />
            </div>
        </div>
    )
}

export default Nav