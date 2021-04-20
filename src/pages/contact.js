import React from "react";
import Sidenav from "../components/Sidenav";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("xvodgbdk");
    if (state.succeeded) {
        return <p>Thanks for reaching out!</p>;
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
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button className='send' type="submit" disabled={state.submitting}>
                        Send
                    </button>
                </form>
            </div>
            <div className='column-2'>
                <label>Other ways to reach me</label>
                <ul>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>Medium</li>
                    <li>Xing</li>
                </ul>
            </div>
        </div>
    </React.Fragment>
  );
}