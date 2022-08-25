function Input(props) {
  return (
    <div>
      <input
        className={
          props.className +
          " my-3 border-[1px] opacity-50 indent-3 focus:outline-none focus:border-blue focus:opacity-100 focus:border-2 bg-black text-md rounded-sm"
        }
        type={props.type}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        //value={props.value}
        required
      />
    </div>
  );
}
export default Input;
