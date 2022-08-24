function Input(props) {
  return (
    <div>
      <input
        id="inp"
        className={
          "h-14 w-full my-3 border-[1px] opacity-50 indent-3 focus:outline-none focus:border-blue focus:opacity-100 focus:border-2 bg-black text-md rounded-sm " +
          props.classname
        }
        {...props}
      />
    </div>
  );
}
export default Input;
