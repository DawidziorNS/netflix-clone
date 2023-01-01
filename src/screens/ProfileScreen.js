import './ProfileScreen.css'
import Nav from "../Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {auth} from "../firebase";
import PlanScreen from "./PlanScreen";

const ProfileScreen = () => {
    const user = useSelector(selectUser);

    return <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src="https://i.pinimg.com/550x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="Avatar" />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <PlanScreen />
                        <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileScreen