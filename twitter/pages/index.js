import Image from "next/image"
import { FaTwitter } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { AiFillApple } from "react-icons/ai"
import FirstPageButton from "../Components/FirstPageButton/FirstPageButton"

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen w-screen gap-8">
      <div className="relative w-[110%] h-full">
        <Image
          alt="Picture of the author"
          layout='fill'
          objectFit='cover'
          className="relative h-full"
          src="/../public/main-page.webp" />
      </div>

      <div className="ml-6">
        <FaTwitter size={25} className={"text-elGray mt-4"} />
        <h1 className="text-elGray text-4xl font-extrabold my-8">Happening now</h1>
        <h3 className="text-elGray text-xl font-bold">Join Twitter today.</h3>

        <FirstPageButton
          {...{
            text: "Sign up with Google",
            classname: "bg-elGray text-black text-xsm font-bold"
          }}
        >
          <FcGoogle size={15} />
        </FirstPageButton>

        <FirstPageButton
          {...{
            text: "Sign up with Apple",
            classname: "bg-elGray text-black text-xsm font-bold"
          }}
        >
          <AiFillApple size={15} />
        </FirstPageButton>

        <div className="flex flex-row align-middle text-center">
          <div className="w-20 mt-2">
            <hr className="text-lGray opacity-40" />
          </div>
          <div className="text-xsm mx-1">or</div>
          <div className="w-20 mt-2">
            <hr className="text-lGray opacity-40" />
          </div>
        </div>

        <FirstPageButton
          {...{
            text: "Sign in with phone or email",
            classname: "bg-blue text-elGray text-xsm font-bold"
          }}
        >
        </FirstPageButton>

        <p className="text-xxsm opacity-40 tracking-tight pr-36 leading-tight mt-1">
          By signing up, you agree to the Terms of Service and Privacy Policy including Cookie Use.
        </p>


        <h4 className="font-bold text-sm mt-7">Already have an account?</h4>
        <FirstPageButton
          {...{
            text: "Sign in",
            classname: "bg-black text-blue text-xsm font-bold border-[1px] border-elGray mb-5 "
          }}
        >
        </FirstPageButton>
      </div>
    </div>
  )
}
