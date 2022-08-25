import FirstPageButton from "../FirstPageButton/FirstPageButton";
import Input from "../Input/Input.component";
import DropDown from "../DropDown/DropDown.component";
import { allYears } from "./years";

function ESUSO({toggle, handleChange, information, monthes, days}) {

  return (
    <>
      <div className="mt-5 px-16">
        <h3 className="font-bold mb-8 text-4xl">create your account</h3>
        <Input
          {...{
            type: "text",
            handleChange: handleChange,
            className: "name",
            placeholder: "Name",
            onChange: handleChange,
            // value:
            //   +information.type === 0 ? information.Phone : information.Email,
          }}
        />

        <Input
          {...{
            type: +information.type === 0 ? "text" : "email",
            handleChange: handleChange,
            className: +information.type === 0 ? "Phone" : "Email",
            placeholder: +information.type === 0 ? "Phone" : "Email",
            onChange: handleChange,
            // value:
            //   +information.type === 0 ? information.Phone : information.Email,
          }}
        />

        <h3
          onClick={toggle}
          className="text-blue text-end hover:cursor-pointer hover:underline"
        >
          Use {+information.type === 1 ? "Phone" : "Email"} instead
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
    </>
  );
}

export default ESUSO;
