import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header.css';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin_icon" className="linkedin_icon" />
                <div className="search_bar">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                qsd
            </div>
        </div>
    );
}

export default Header;