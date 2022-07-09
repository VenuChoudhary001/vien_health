import React from 'react'

const Video = ({img,link}) => {
    const [play,setPlay]=React.useState(false);
  return (
    <>
      <div className=" h-[500px] w-3/4 m-auto relative z-[1]">
        {!play && (
          <>
            <div className="flex z-[2] items-center justify-center absolute top-0 left-0 w-full h-full">
              <svg
                width="126"
                height="126"
                viewBox="0 0 126 126"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:fill-white cursor-pointer"
                onClick={() => setPlay(!play)}
              >
                <path d="M63 3.93391e-06C28.2082 3.93391e-06 0 28.2083 0 63C0 97.7918 28.2082 126 63 126C97.7917 126 126 97.7918 126 63C126 28.2083 97.7917 3.93391e-06 63 3.93391e-06ZM47.25 94.4527V31.5473L94.5 63L47.25 94.4527Z" />
              </svg>
            </div>
            <img src={img} alt="" className="block h-[500px] w-full object-cover" />
          </>
        )}
        {play && (
          <video
            className="w-screen md:h-[500px] object-cover"
            controls
            autoPlay={play}
            onEnded={()=>setPlay(false)}
            onPauseCapture={()=>setPlay(false)}
            
          >
            <source src={link} type="video/mp4" />
          </video>
        )}
      </div>
    </>
  );
}

export default Video