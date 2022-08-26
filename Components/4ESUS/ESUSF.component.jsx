import Input from "../Input/Input.component";

function ESUSTF(props) {
  const handleChange = (event) => {
    props.setCode(event.target.value);
  };

  return (
    <>
      <h3 className="font-bold mb-3 text-xl">You'll need a password</h3>
      <p className="text-sm w-[90%]">Make sure it's 6 or more character</p>
      <Input
        {...{
          type: "text",
          handleChange: props.handleChange,
          className: "password h-14 w-full mt-10",
          onChange: handleChange,
          // value:
          //   +information.type === 0 ? information.Phone : information.Email
        }}
      />
    </>
  );
}

export default ESUSTF;
