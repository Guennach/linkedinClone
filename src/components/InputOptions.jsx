import "./InputOptions.css";

const InputOptions = ({Icon, title, color}) =>{
    return (
        <div className="inputOption">
            <Icon style={{color:color}} />
            <p className="option_title">{title}</p>
        </div>
    );
}

export default InputOptions;