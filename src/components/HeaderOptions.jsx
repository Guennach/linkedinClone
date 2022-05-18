const HeaderOptions = ({Icon, title}) => {
    return (
        <div className="option__container">
           {Icon && <Icon className="header_option_icon"/>}
            <p>{title}</p>
        </div>
    );
}

export default HeaderOptions;