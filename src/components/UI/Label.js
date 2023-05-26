const Label = props => {
    return (
        <span className="font-plusJakarta text-slate-700 font-semibold block mb-4">{`{${props.children}}`}</span>
    )
}

export default Label;