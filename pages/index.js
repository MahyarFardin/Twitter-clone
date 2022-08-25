import { useState } from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import FirstPageButton from "../Components/FirstPageButton/FirstPageButton";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import EmailSignUpSnippet from "../Components/EmailSignUpSnippet/EmailSignUpSnippet.component.tsx";

const handleClickGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = provider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  const toggler = () => {
    setIsOn((prev) => !prev);
    console.log(isOn);
  };

  return (
    <>
      <div className={"grid grid-cols-2 h-screen w-screen gap-8 z-0 "+(isOn===true ? "blur-sm":"")} >
        <div className="relative w-[100%] h-full">
          <Image
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="relative h-full"
            src="/../public/lohp_en_1302x955.png"
          />

          <FaTwitter className="relative left-36 top-40 z-10" size={350} />
        </div>

        <div className="ml-6">
          <FaTwitter size={40} className={"text-elGray mt-8"} />
          <h1 className="text-elGray text-7xl font-extrabold my-8">
            Happening now
          </h1>
          <h3 className="text-elGray text-3xl font-bold">
            Join Twitter today.
          </h3>

          <FirstPageButton
            {...{
              text: "Sign up with Google",
              classname: "w-72 h-9 bg-white text-black text-sm font-bold",
              onClick: handleClickGoogle,
            }}
          >
            <FcGoogle size={28} />
          </FirstPageButton>

          <FirstPageButton
            {...{
              text: "Sign up with Apple",
              classname: "w-72 h-9 bg-white text-black text-sm font-bold",
            }}
          >
            <AiFillApple size={35} />
          </FirstPageButton>

          <div className="flex flex-row align-middle text-center ml-1">
            <div className="w-32 mt-3">
              <hr className="text-lGray opacity-40" />
            </div>
            <div className="text-sm mx-1">or</div>
            <div className="w-32 mt-3">
              <hr className="text-lGray opacity-40" />
            </div>
          </div>

          <FirstPageButton
            {...{
              text: "Sign in with phone or email",
              classname: "w-72 h-9 bg-blue text-white text-sm font-bold",
              onClick: toggler,
            }}
          ></FirstPageButton>

          <p className="text-xsm opacity-40 tracking-tight pr-64 leading-tight mt-3">
            By signing up, you agree to the Terms of Service and Privacy Policy
            including Cookie Use.
          </p>

          <h4 className="font-bold text-md mt-7">Already have an account?</h4>
          <FirstPageButton
            {...{
              text: "Sign in",
              classname:
                "w-72 h-9 bg-black text-blue text-sm font-bold border-[1px] border-elGray mb-5 ",
            }}
          ></FirstPageButton>
        </div>
      </div>

      {isOn && (
        <div className="absolute top-4 left-[20%] z-10 transpa">
          <EmailSignUpSnippet onclick={toggler}/>
        </div>
      )}
    </>
  );
}
