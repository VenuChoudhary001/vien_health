import React from 'react'
import Button from '../../../Components/Button';
import { Card2 } from '../../../Components/Cards';
import {useNavigate} from 'react-router-dom'
const Section2 = () => {
  let navigate=useNavigate()
  const handleClick=()=>{
      navigate('/demo');
  }
  return (
    <>
  <div className="bg-neutral-50">

    <div className="container">
      
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="w-full   bg-neutral-">
        <div className="flex flex-col md:max-w-[320px] lg:max-w-[600px] gap-12 mx-auto py-12">
          <div className="text-navy-900  font-euclid-bold text-xl sm:text-3xl xl:text-5xl">
            ABOUT US{" "}
          </div>
          <div className="flex lg:max-w-[350px] xl:max-w-[470px] flex-col gap-8 text-neutral-600 font-euclid-normal text-sm lg:text-base xl:text-lg">
            <div className="">
              Vien Health is a health tech company focused on better outcomes
              and early access to healthcare for Africa.
              <br /> We provide everything hospital and health systems need to
              serve patients virtually, including a complete virtual care
              platform. Our offering makes it easy for hospitals and health
              systems to build virtual care services and for clinicians to
              manage their practice in one place — including onboarding,
              support, and the ability to work across several highly-vetted
              opportunities.
            </div>
            <div className="">
              With a mission to provide early access and better outcomes in
              healthcare for Africa, Vien’s online marketplace delivers the
              accessible, seamless, and simple experience patients and providers
              expect.
            </div>
            <div className="">
              Imagine a future without waiting rooms, where patients are quickly
              seen by the best clinician for their care need, who is happily
              working on their own schedule and on their own terms. That’s just
              a glimpse of the future we’re building—where everyone has access
              to equitable, high-quality care without traditional barriers.
            </div>
            <div className="">
              Having already been recognized by Twilio as the startup of the
              year (2021), we’re just getting started.
            </div>
          </div>
          <Button
            placeholder={"Let’s talk"}
            icon={"/icons/line.svg"}
            style={
              "  bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-36 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
            }
            action={handleClick}
          />
        </div>
      </div>
      <div className=" flex flex-col   sm:max-w-[400px  xl:max-w-[620px] mx-auto gap-12 py-12">
        <div className="text-navy-900  font-euclid-bold text-xl sm:text-3xl xl:text-5xl">
          OUR VALUES
        </div>
        <div className="flex flex-col  sm:px-0 gap-8">
          <Card2
            title={`Innovation`}
            info={`The core of who we are stems from our innovative ideologies and ability to produce results. We aim to truly understand the needs and wants of our patients by tackling the biggest challenges in healthcare`}
            img={`/images/glow.png`}
          />
          <Card2
            title={`Simplicity`}
            info={`Personalized and personable care is now truly attainable because of our user-friendly design. Our products are designed with customers in mind, to engage you in a simple yet effective way to connect and benefit from our services.`}
            img={`/images/shapes.png`}
          />
          <Card2
            title={`Quality`}
            info={`Personalized and personable care is now truly attainable because of our user-friendly design. Our products are designed with customers in mind, to engage you in a simple yet effective way to connect and benefit from our services.`}
            img={`/images/excel.png`}
          />
          <Card2
            title={`Excellence`}
            info={`Our standard of excellence is driven by our desire to consistently deliver high quality service to our patients. We believe in establishing a foundation for transparent and solution-oriented communication within our executive team, medical staff, and most importantly, our
patients.`}
            img={`/images/stars.png`}
          />
        </div>
      </div>
    </div>
    </div>
  </div>
    </>
  );
}

export default Section2