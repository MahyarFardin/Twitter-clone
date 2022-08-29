import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { randomNumber } from "../../pages/api/index";
import { sendMail } from "../../pages/api/verification";
import FirstPageButton from "../FirstPageButton/FirstPageButton";
import ESUSO from "../1ESUS/ESUSO.component";
import ESUST from "../2ESUS/ESUST.component";
import ESUSTh from "../3ESUS/ESUSTh.component";
import ESUSF from "../4ESUS/ESUSF.component";

function EmailSignUpSnippet(props) {
  const [number, setNumber] = useState(1);
  const [code, setCode] = useState("");

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
    verified: boolean;
    password: string;
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
    verified: false,
    password: "",
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

    if (number === 1) {
      setInformation((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    } else if (number === 2) {
      setInformation((prev) => ({
        ...prev,
        [`privacy.${name}`]: event.target.value,
      }));
    } else if (number === 3) {
      //sendMail(information.Email);
      if (+code === randomNumber)
        setInformation((prev) => ({ ...prev, verified: true }));
    }
  };

  const toggle = () => {
    setInformation((prev) => ({
      ...prev,
      type: +information.type === 0 ? "1" : "0",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber((prev) => prev + 1);

    if (number === 4) {
      console.log("good");
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setNumber((prev) => prev - 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] h-[500px] m-auto flex flex-col rounded-2xl bg-black"
    >
      <div className="gap-10 w-full flex bg-black m-3 hover:cursor-pointer">
        {number === 1 ? (
          <AiOutlineClose
            onClick={props.onclick}
            size={25}
            className="my-auto"
          />
        ) : (
          <AiOutlineArrowLeft
            onClick={handleBack}
            size={25}
            className="my-auto"
          />
        )}
        <span className="font-bold text-xl">{`step ${number} of 4`}</span>
      </div>
      <div className="px-16 py-5 overflow-scroll">
        {number === 1 && (
          <ESUSO
            {...{
              toggle: toggle,
              handleChange: handleChange,
              information: information,
              monthes: monthes,
              days: days,
            }}
          />
        )}
        {number === 2 && (
          <ESUST
            {...{
              handleChange: handleChange,
              information: information,
            }}
          />
        )}
        {number === 3 && (
          <ESUSTh
            {...{
              handleChange: handleChange,
              information: information,
              setCode: setCode,
            }}
          />
        )}
        {number === 4 && (
          <ESUSF
            {...{
              handleChange: handleChange,
              setInformation: setInformation,
            }}
          />
        )}
      </div>
      <div className="px-16 h-fit align-baseline">
        {number < 3 ? (
          <FirstPageButton
            {...{
              text: "Next",
              classname:
                "w-full h-12 bg-white text-black text-md font-bold border-[1px] border-elGray mb-5 ",
            }}
          />
        ) : (
          <FirstPageButton
            {...{
              text: "Sign in",
              classname:
                "w-full h-12 bg-blue text-white text-md font-bold mb-5 ",
            }}
          />
        )}
      </div>
    </form>
  );
}

export default EmailSignUpSnippet;
