import { useState } from 'react'
import "../styles/FooterApp.css"

function FooterApp(){
    const[mail, setMail]= useState("Sisesta siia oma e-mail!!")


    return (
        <div className="footer-container">
            <div className="saisieMail">
                <span>✉ Uudiste jaoks lisa oma email siia ✉</span>

                <input type="text" size="30"
                 value={mail} 
                onChange={(e)=>{setMail(e.target.value)}}
                onBlur={(e)=>{handleBlur(e.target.value)}} />
            </div>
        </div>
    )
}

function handleBlur(value){
    if(!value.includes("@")){
        alert(value+ " E-mail ei ole korrektne!")
    }
    else{
        alert("Värskete uudisteni ;)! : "+value)
    }

}

export default FooterApp