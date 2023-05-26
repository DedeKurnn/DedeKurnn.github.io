const Label = props => {
    return (
        <span className={`font-plusJakarta text-slate-700 dark:text-slate-400 font-semibold block mb-4 ${props.className}`}>{`{${props.children}}`}</span>
    )
}

export default Label;