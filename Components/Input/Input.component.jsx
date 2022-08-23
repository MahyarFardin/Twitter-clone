import { useState } from "react";

function Input(props) {
  const [text, setText] = useState("top-[-40px]");

  const handleFocuse = () => {
    setText("top-[-60px] text-xsm opacity-100 ");
  };

  console.log(text);

  return (
    <div>
      <input
        id="inp"
        onFocusCapture={handleFocuse}
        className={
          "h-14 w-full border-[1px] opacity-30 bg-black text-md rounded-sm " +
          props.classname
        }
        {...props}
      />
      <span className={"opacity-30 relative left-2 " + text}>
        {props.label}
      </span>
    </div>
  );
}
export default Input;
