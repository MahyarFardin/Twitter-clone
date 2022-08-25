import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import FirstPageButton from "../FirstPageButton/FirstPageButton";
import Input from "../Input/Input.component";
import DropDown from "../DropDown/DropDown.component";
import { allYears } from "./years";

function EmailSignUpSnippet(props) {
  enum type {
    Phone,
    Email,
  }
  const [number, setNumber] = useState(1);
  const [monthes, setMonthes] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December",
  ]);

  let days: number[] = [];

  interface information {
    name: string;
    Phone: string;
    Email: string;
    type: string;
    date: {
      day: number;
      month: string;
      year: number;
    };
  }

  const [information, setInformation] = useState({
    name: "",
    Phone: "",
    Email: "",
    type: type.Phone.toString(),
    day: "",
    month: "January",
    year: "",
  });

  const assigner = () => {
    let day: number;
    days = [];

    if (
      information.month === "January" ||
      information.month === "March" ||
      information.month === "July" ||
      information.month === "Agust" ||
      information.month === "October" ||
      information.month === "December" ||
      information.month === "May"
    )
      day = 31;
    else if (information.month === "February") day = 28;
    else day = 30;

    for (let i = 1; i <= day; i++) {
      days.push(i);
    }
  };

  assigner();

  const handleChange = (event: any) => {
    const name = event.target.className.split(" ")[0];
    setInformation((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const toggle = () => {
    setInformation((prev) => ({
      ...prev,
      type: +information.type === 0 ? "1" : "0",
    }));
  };

  return (
    <form className="w-[80%] h-full m-auto flex flex-col rounded-2xl bg-black">
      <div onClick={props.onclick} className="gap-10 flex bg-black m-3 hover:cursor-pointer">
        <AiOutlineClose size={25} className="my-auto" />
        <span className="font-bold text-xl">{`step ${number} of 5`}</span>
      </div>
      <div className="mt-5 px-16">
        <h3 className="font-bold mb-8 text-4xl">create your account</h3>
        <Input
          {...{
            type: "text",
            handleChange: handleChange,
            classVame: "name",
            placeholder: "Name",
            onChange: handleChange,
            // value:
            //   +information.type === 0 ? information.Phone : information.Email,
          }}
        />

        <Input
          {...{
            type: "text",
            handleChange: handleChange,
            classVame: +information.type === 0 ? "Phone" : "Email",
            placeholder: +information.type === 0 ? "Phone" : "Email",
            onChange: handleChange,
            // value:
            //   +information.type === 0 ? information.Phone : information.Email,
          }}
        />

        <h3 onClick={toggle} className="text-blue text-end hover:cursor-pointer hover:underline">
          Use email instead
        </h3>

        <h4 className="font-bold mt-5">Date of birth</h4>
        <small className="opacity-50">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </small>

        <div className="flex gap-2">
          <DropDown
            className={"month"}
            items={monthes}
            onChange={handleChange}
          />
          <DropDown className={"day"} items={days} onChange={handleChange} />
          <DropDown
            className={"year"}
            items={allYears}
            onChange={handleChange}
          />
        </div>

        <FirstPageButton
          {...{
            text: "Next",
            classname:
              "w-full h-12 bg-white text-black text-md font-bold border-[1px] border-elGray mb-5 ",
          }}
        />
      </div>
    </form>
  );
}

export default EmailSignUpSnippet;
