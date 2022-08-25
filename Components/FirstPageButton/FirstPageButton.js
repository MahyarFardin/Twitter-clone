function FirstPageButton(props) {
    console.log(props);
    return (
        <div>
            <button className={"mt-4 rounded-full my-auto " + props.classname} {...props}>
                <div className="flex align-middle text-center justify-center gap-2">
                    <span>{props.children}</span>
                    <span className="my-auto">{props.text}</span>
                </div>
            </button>
        </div>
    )
}

export default FirstPageButton;