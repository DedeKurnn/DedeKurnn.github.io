const Button = props => {
    
    return (
        <button onClick={props.onClick} className={`pt-4 pb-4 pr-8 pl-8 bg-background dark:bg-primary-lighter dark:hover:bg-primary-darker rounded-xl text-white dark:text-container-dark font-semibold hover:text-secondary-darker transition-all ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button;