import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOptions from './HeaderOptions';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="header__left">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin_icon" className="linkedin_icon" />
                    <div className="search_bar">
                        <SearchIcon />
                        <input type="text" />
                    </div>
                </div>
                <div className="header__right">
                    <HeaderOptions Icon={HomeIcon} title="Home" />
                    <HeaderOptions Icon={PeopleIcon} title="My Network" />
                    <HeaderOptions Icon={WorkIcon} title="Jobs" />
                    <HeaderOptions Icon={MessageIcon} title="Messaging" />
                    <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                    <HeaderOptions avatar="https://g7y6h3a7.rocketcdn.me/wp-content/uploads/2020/03/dummy-image-square.jpg" title="me"/>
                </div>
            </div>
        </header>
    );
}

export default Header;