interface props {
  items: number[] | string[];
  onChange:() => void;
}
function DropDown(props: props) {
  return (
    <select onChange={props.onChange} className="h-14 w-full my-3 border-[1px] opacity-50 indent-3 focus:outline-none focus:border-blue focus:opacity-100 focus:border-2 bg-black text-md rounded-sm ">
      {props.items.map((item:number|string) => {
        return(<option>{item}</option>)
      })}
    </select>
  );
}

export default DropDown;
