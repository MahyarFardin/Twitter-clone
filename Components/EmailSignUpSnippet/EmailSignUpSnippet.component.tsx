import { useState } from "react";
import ESUSO from "../1ESUS/ESUSO.component";
import { AiOutlineClose } from "react-icons/ai";

function EmailSignUpSnippet(props) {
  const [number, setNumber] = useState(1);
  enum type {
    Phone,
    Email,
  }

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
    day: number;
    month: string;
    year: number;
    privacy: {
      MP: boolean;
      GMOT: boolean;
      PA: boolean;
    };
  }

  const [information, setInformation] = useState<information>({
    name: "",
    Phone: "",
    Email: "",
    type: type.Phone.toString(),
    day: 0,
    month: "January",
    year: 0,
    privacy: {
      // map people based on their phone numbers if given
      MP: false,

      // get more out of twitter
      GMOT: false,

      //personalize ads
      PA: false,
    },
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
    console.log(event);
    
    if (number === 1) {
      const name = event.target.className.split(" ")[0];
      setInformation((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    } else if (number === 2) {
    }
  };

  const toggle = () => {
    setInformation((prev) => ({
      ...prev,
      type: +information.type === 0 ? "1" : "0",
    }));
  };

  return (
    <form className="w-[80%] h-full m-auto flex flex-col rounded-2xl bg-black">
      <div
        onClick={props.onclick}
        className="gap-10 flex bg-black m-3 hover:cursor-pointer"
      >
        <AiOutlineClose size={25} className="my-auto" />
        <span className="font-bold text-xl">{`step ${number} of 5`}</span>
      </div>
      {number === 1 && (
        <ESUSO
          {...{
            toggle: toggle,
            handleChange: handleChange,
            information: information,
            setInformation: setInformation,
            monthes:monthes,
            days:days
          }}
        />
      )}
    </form>
  );
}

export default EmailSignUpSnippet;
