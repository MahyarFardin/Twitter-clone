import Input from "../Input/Input.component";

function ESUSTh(props) {
  const handleChange = (event) => {
    props.setCode(event.target.value);
  };

  return (
    <>
      <h3 className="font-bold mb-3 text-xl">We have sent you a code</h3>
      <p className="text-sm w-[90%]">Enter that code</p>
      <Input
        {...{
          type: "text",
          handleChange: props.handleChange,
          className: "verified h-14 w-full mt-10",
          onChange: handleChange,
          // value:
          //   +information.type === 0 ? information.Phone : information.Email
        }}
      />
      <h3
        onClick={props.toggle}
        className="text-blue text-end hover:cursor-pointer hover:underline"
      >
        Did not recived code?
      </h3>
    </>
  );
}

export default ESUSTh;
