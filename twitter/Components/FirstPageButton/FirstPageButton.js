function FirstPageButton(props) {
    console.log(props);
    return (
        <div>
            <button className={"mt-4 w-44 h-6 rounded-2xl my-auto " + props.classname} {...props}>
                <div className="flex align-middle text-center justify-center gap-1">
                    <span>{props.children}</span>
                    <span>{props.text}</span>
                </div>
            </button>
        </div>
    )
}

export default FirstPageButton;