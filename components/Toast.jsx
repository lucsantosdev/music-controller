import { useState } from "react";

export default function Toast() {
    const [message, setMessage] = useState("")
    return (
        <div
		  id="toast"
		  className="absolute right-0 bottom-20 hidden z-10 items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-primary-100 bg-clip-ppadding px-4 pb-2 pt-2.5 text" //incomplete
		>
		    <p className="flex items-center font-bold text-white">
			    <svg
			      aria-hidden="true"
			      focusable="false"
			      data-prefix="fas"
			      data-icon="info-circle"
			      className="mr-2 h-4 w-4 fill-current"
			      role="img"
			      xmlns="http://www.w3.org/2000/svg"
			      viewBox="0 0 512 512"
			    >  
				    <path
					  fill="currentColor"
					  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18" // incomplete
					/>
					  {message}
				</svg>
                </p>	
				<div className="flex items-center">	
					<button
					  type="button"
					  className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity0100 focus:shadow-none focus:outline-none"
					  data-te-toast-dismiss
					  aria-label="Close"   
					> 
						<span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabeld]:pointer-events-none [&.disabled:select-none" > //incomplete
						  <svg
							  xmlns="http://www.w3.org/2000/svg"
							  fill="none"
							  viewBox="0 0 24 24"
							  strokeWidth="1.5"
							  stroke="#FFF"
							  className="h-6 w-6"
						  >
							  <path
								  strokeLinecap="round"
								  strokeLinejoin="round"
								  d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</span>
			    </button>
				</div>
			</div>
    )
}