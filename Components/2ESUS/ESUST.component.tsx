import Input from "../Input/Input.component";

function ESUST({ handleChange, information }) {
  return (
    <>
      <h3 className="font-bold mb-8 text-4xl">Customize your experience</h3>
      <div>
        {information.Email && (
          <>
            <h5 className="font-bold mb-3 text-xl">Get more out of Twitter</h5>
            <div className="flex flex-row justify-between">
              <p className="text-sm w-[90%]">
                Receive email about your Twitter activity and recommendations.
              </p>
              <Input
                {...{
                  type: "checkbox",
                  handleChange: handleChange,
                  className: "MP  h-5 w-5 ",
                  onChange: handleChange,
                  // value:
                  //   +information.type === 0 ? information.Phone : information.Email
                }}
              />
            </div>
          </>
        )}

        <h5 className="font-bold mb-3 text-xl">Connect with people you know</h5>
        <div className="flex flex-row justify-between">
          <p className="text-sm w-[90%]">
            Let others find your Twitter account by your email address.
          </p>
          <Input
            {...{
              type: "checkbox",
              handleChange: handleChange,
              className: "GMOT my-0 h-5 w-5 ",
              onChange: handleChange,
              // value:
              //   +information.type === 0 ? information.Phone : information.Email
            }}
          />
        </div>

        <h5 className="font-bold mb-3 text-xl">Personalized ads</h5>
        <div className="flex flex-row justify-between">
          <p className="text-sm w-[90%]">
            You will always see ads on Twitter based on your Twitter activity.
            When this setting is enabled, Twitter may further personalize ads
            from Twitter advertisers, on and off Twitter, by combining your
            Twitter activity with other online activity and information from our
            partners.
          </p>
          <Input
            {...{
              type: "checkbox",
              handleChange: handleChange,
              className: "PA my-0 h-5 w-5 ",
              onChange: handleChange,
              // value:
              //   +information.type === 0 ? information.Phone : information.Email
            }}
          />
        </div>

        <p className="text-sm opacity-50 mt-8">
          By signing up, you agree to our Terms, Privacy Policy, and Cookie Use.
          Twitter may use your contact information, including your email address
          and phone number for purposes outlined in our Privacy Policy. Learn
          more
        </p>
      </div>
    </>
  );
}

export default ESUST;
