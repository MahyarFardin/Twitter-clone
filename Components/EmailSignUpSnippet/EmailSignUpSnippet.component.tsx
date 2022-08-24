import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import Input from "../Input/Input.component";
import DropDown from "../DropDown/DropDown.component";
import { allYears } from "./years";

function EmailSignUpSnippet() {
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
    email: string;
    type:string;
    date: {
      day: number;
      month: string;
      year: number;
    };
  }

  console.log(allYears);

  const [information, setInformation] = useState({
    name: "",
    Phone: "",
    email:"",
    type:"Phone",
    date: {
      day: "",
      month: "January",
      year: "",
    },
  });

  const assigner = () => {
    let day: number;
    days = [];    

    if (
      information.date.month === "January" ||
      information.date.month === "March" ||
      information.date.month === "July" ||
      information.date.month === "Agust" ||
      information.date.month === "October" ||
      information.date.month === "December" ||
      information.date.month === "May"
    )
      day = 31;
    else if (information.date.month === "February") day = 28;
    else day = 30;

    for (let i = 1; i <= day; i++) {
      days.push(i);
    }
  };

  assigner();

  const handleChange = () => {
    console.log("test");
  };

  return (
    <div className="w-[50%] h-2/3 m-auto flex flex-col rounded-md">
      <div className="gap-10 fixed flex bg-black">
        <AiOutlineClose size={25} className="my-auto" />
        <span className="font-bold text-xl">{`step ${number} of 5`}</span>
      </div>
      <div className="mt-14 px-16">
        <h3 className="font-bold mb-8 text-4xl">create your account</h3>
        <Input
          {...{
            type: "text",
            handleChange: handleChange,
            classname: "name",
            placeholder: "Name",
          }}
        />
        <Input
          {...{
            type: "text",
            handleChange: handleChange,
            classname: information.type,
            placeholder: information.type,
          }}
        />

          <h3 onClick={} className="text-blue text-end">Use email instead</h3>

        <h4 className="font-bold mt-5">Date of birth</h4>
        <small className="opacity-50">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </small>

        <div className="flex">
          <DropDown items={days} onChange={handleChange} />
          <DropDown items={monthes} onChange={handleChange} />
          <DropDown items={allYears} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default EmailSignUpSnippet;
