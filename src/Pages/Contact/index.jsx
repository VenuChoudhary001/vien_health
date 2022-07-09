import React from "react";
import Button from "../../Components/Button";
import TextBox, {
  // DropDown,
  DropDownSelect,
  TextArea,
} from "../../Components/TextBox";
import { useForm, Validate } from "../../Utils";
import { ApiService } from "../../Utils/ApiService";
import {useNavigate} from 'react-router-dom';
import PhoneInput from "react-phone-number-input";
 import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
   const notify = () => toast("Wow so easy!");
  const fName = useForm("");
  const lName = useForm("");
  const email = useForm("");
  const location = useForm("");
  const [phone,setPhone]=React.useState()
  const message = useForm("");
  const hearAbout = useForm("Social Media");
  
  const navigate=useNavigate()
  const handleClick = async (e) => {
    e.preventDefault();
    let error =
      Validate(fName.value) &&
      Validate(lName.value) &&
      Validate(location.value) &&
      Validate(message.value) &&
      Validate("number", phone);
    if (!error) {
      let body = {
        contact: {
          first_name: fName.value,
          last_name: lName.value,
          email: email.value,
          custom_field:{ 
            cf_contact_location: location.value,
            cf_message: message.value,
            cf_hear_about_us: hearAbout.value,
          },
          mobile_number:phone
          
        },
      };
      let res = await ApiService(body);
      if(res.contact) navigate('/');
      else {
        alert("Please try again later.")
        navigate('/');
      }
    } else {
      console.log("ERROR");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 mb-[1px]  lg:grid-cols-2 h-scree ">
        <div className="bg-navy-900 h-full flex flex-col  py-8 lg:py-0 px-8">
          <img
            src="/images/pattern.png"
            alt=""
            className="block max-w-[100px] ml-auto"
          />
          <div className="flex flex-col m-auto gap-4 lg:max-w-[500px]">
            <div className="text-white text-4xl leading-11 font-euclid-bold">
              We’ve been waiting to hear from you{" "}
            </div>
            <div className="text-neutral-100 text-lg font-euclid-light">
              See how Vien’s all-in-one platform lets you deliver an exceptional
              patient experience that’s convenient for them and efficient for
              you, virtual or walk-in.
            </div>
          </div>
          <img
            src="/images/illu.png"
            alt=""
            className="hidden lg:block max-w-[400px] xl:max-w-[500px] m-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-2 xl:gap-4 py-2 px-8 lg:px-5  ">
          <div className="text-navy-900 text-2xl font-euclid-bold">
            Get in touch
          </div>
          <div className="text-neutral-500 text-sm max-w-[600px] font-euclid-medium">
            Call us on +233 543854328 or send us an email at
            hello@vienhealth.com You can also contact us by filling out this
            form and we’ll get back to you within a few hours.
          </div>

          <div className="grid grid-cols-2 gap-4">
            <TextBox
              lable={"First Name"}
              value={fName.value}
              action={fName.onChange}
            />
            <TextBox
              lable={"Last Name"}
              value={lName.value}
              action={lName.onChange}
            />
          </div>

          <TextBox
            lable={"Email"}
            value={email.value}
            type="email"
            action={email.onChange}
          />
          <TextBox
            lable={"Location"}
            value={location.value}
            action={location.onChange}
          />
          <div className="flex flex-col gap-2">
            <div className="text-xs text-neutral-600 font-euclid-bold">
              Phone Number
            </div>
            <div className="flex gap-1 p-2 border-">
              <PhoneInput
                international
                label="Phone number"
                placeholder="Enter your phone number"
                type="tel"
                className="w-full border-[1px] rounded-lg border-neutral-300 p-3  outline-none"
                defaultCountry="GH"
                onChange={setPhone}
              />
            </div>
          </div>
          <TextArea
            lable={"Your message"}
            action={message.onChange}
            value={message.value}
          />
          <DropDownSelect
            action={hearAbout.onChange}
            list={["Social Media", "Referral", "Website", "Google", "Article"]}
            lable={`How did you hear about Vien Health?`}
          />
          <Button
            placeholder={"Submit"}
            action={handleClick}
            style={
              " bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-full h-8 sm:h-10 shadow  rounded-lg"
            }
          />
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Contact;
