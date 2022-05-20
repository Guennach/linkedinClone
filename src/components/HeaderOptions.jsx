import { Avatar } from "@mui/material";
const HeaderOptions = ({avatar, Icon, title}) => {
    return (
        <div className="option__container">
           {Icon && <Icon className="header_option_icon"/>}
           {avatar && 
               <Avatar className="header_option_avatar" src={avatar}/>
           }
            <p>{title}</p>
        </div>
    );
}

export default HeaderOptions;