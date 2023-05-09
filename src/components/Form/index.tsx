import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { ContactForm } from './style';

export default function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault(e)
        alert("Mensagem Enviada!")

        const templateParams = {
            from_name: name,
            email: email,
            subject: subject,
            message: message
        }

        emailjs.send("service_3jl1txh", "template_tegipr9", templateParams, "3cHcJiw2NmMSbTg7y")
        
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }


    return(
        <ContactForm onSubmit={sendEmail}>
            <input 
                type="text" 
                placeholder='Name:' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input 
                type="email" 
                placeholder='E-mail:' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input 
                type="text" 
                placeholder='Subject:' 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
            />
            <textarea 
                 
                placeholder='Type your message:' 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button type='submit'>Submit</button>
        </ContactForm>
    )
}