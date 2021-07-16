import './input.css';


function Input(props) {

    const { className, onChange } = props;

    return (
        <div className={className}>
            <i className="fa fa-search searchIcon"></i>
            <input type="text" className="input" onChange={onChange} />
        </div>
    );
}

export default Input;
