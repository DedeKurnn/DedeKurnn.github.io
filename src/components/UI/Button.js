const Button = props => {
    
    return (
        <button onClick={props.onClick} className={`pt-4 pb-4 pr-8 pl-8 bg-background rounded-xl text-white font-semibold hover:text-secondary-darker transition-all ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button;