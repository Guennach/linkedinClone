import "./Sidebar.css"
import {Avatar} from "@mui/material"

const Sidebar = () => {
    return (
        <div className="sidebar__container">
            <div className="profile__container">
                <div className="background">
                    <img src="https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?w=2000" alt="background_profile" />
                </div>
                <div className="picture">
                    <Avatar/>
                </div>
                <div className="profile__information">
                    <h3 className="profile__name">dummy test</h3>
                    <p className="profile__profession">Student at .......</p>
                </div>
                <div className="connection__container">
                    <div className="connection">
                        <p>Connections</p>
                        <p className="number">22</p>
                    </div>
                    <p className="bold_text">Grow your network</p>
                </div>
                <div className="third__container">
                    <p className="light_text">Access exclusive tools &#38; insights</p>
                    <p className="dark_text">Get Hired Faster, Try Premium Free</p>
                </div>
                <div className="forth__container">
                    <p className="dark_text">My items</p>
                </div>
            </div>
            <div className="recent__container">

            </div>
        </div>
    );
}

export default Sidebar;