import React, { useState } from "react";
import Sidenav from "../components/sidenav/Sidenav";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("xvodgbdk");
    const [value, setValue] = useState('');

    if (state.succeeded) {
        return <div>
            <Sidenav/>
            <div className='contact-wrapper'>
                <p>Thanks for reaching out!</p>;
                </div>
            </div>
        }
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const btnDisabled = () => {
        if (state.submitting || !value) {
            return true;
        }
    }


  return (
    <React.Fragment>
        <Sidenav/>
        <div className='contact-wrapper'>
            <div className='column-1'>
                <form onSubmit={handleSubmit}>
                    <label>Contact form</label>
                    <input
                        placeholder="Email Address"
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        placeholder="Your message"
                        id="message"
                        name="message"
                        value={value}
                        onChange={handleChange}
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button className='send' type="submit" disabled={btnDisabled()}>
                        Send
                    </button>
                </form>
            </div>
            <div className='column-2'>
                <label>Other ways to reach me</label>
                <ul>
                    <li><a target="_blank" href='https://twitter.com/room_n'>Twitter</a></li>
                    <li><a target="_blank" href='https://linkedin.com/in/rmanev'>LinkedIn</a></li>
                    <li><a target="_blank" href='https://github.com/rum_n'>GitHub</a></li>
                    <li><a target="_blank" href='https://room-n.medium.com/'>Medium</a></li>
                    <li><a target="_blank" href='https://www.xing.com/profile/Rumen_Manev'>Xing</a></li>
                </ul>
            </div>
        </div>
    </React.Fragment>
  );
}