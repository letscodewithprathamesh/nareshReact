import React from "react";


function Modal(props)
{

    const{close}=props

    return(
        <div className="modalbackground">

           <div className="modalcontainer">

            <div className="titleClosebtn">
                 <button onClick={close}>X</button>
            </div>

            

            <div className="title">
                <h1>Are You Sure you want to Continue ?</h1>
                
            </div>
            <div className="body">
                <p>The next page is Awesome 😎 </p>
            </div>
            <div className="footer">
                <button>Continue</button>
                <button onClick={close} id="cancelbtn">Cancel</button>
            </div>
           </div>
        </div>
    )
}


export default Modal