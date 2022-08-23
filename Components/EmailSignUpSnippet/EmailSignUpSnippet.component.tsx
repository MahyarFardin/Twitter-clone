import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
import Input from "../Input/Input.component"

function EmailSignUpSnippet(){
    const [number, setNumber]= useState(1)
    
    interface information{
        name:string,
        phoneNumber:string,
        date:{
            day:number,
            month:string,
            year:number
        }
    }

    const [information, setInformation]= useState({
        name:"",
        phoneNumber:"",
        date:{
            day:"",
            month:"",
            year:""
        }
    })

    const handleChange=(e:object)=>{
        console.log(e);        
    }

    return(
        <div className="w-[50%] h-2/3 m-auto flex flex-col rounded-md">
            <div className="gap-10 fixed flex bg-black">
                <AiOutlineClose size={25} className="my-auto"/>
                <span className="font-bold text-xl">{`step ${number} of 5`}</span>
            </div>
            <div className="mt-14 px-16">
                <h3 className="font-bold mb-8 text-4xl">create your account</h3>
                <Input
                
                {...{
                    label:"Name",
                    handleChange: handleChange,
                    classname:"name"
                }}

                />
            </div>
        </div>
    )
}

export default EmailSignUpSnippet;