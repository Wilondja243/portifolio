import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Button from "../../components/ui/button";
import useLoginValidation from "../../hooks/use-contact-validation";


export default function Contact() {
  const {handleSubmit, errors} = useLoginValidation();

  const [username, setUsername] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  const onFormSubmit = (e)=> {
    e.preventDefault();
    const isValid = handleSubmit({username, subject, description});

    if(isValid){
      setIsSending(true);
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: username,
          subject: subject,
          message: description,
          reply_to: "monalinacampany@gmail.com",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ).then(()=> {
        toast.success('Message envoyé avec success !', {
          style: {
            border: '1px solid #009776',
            padding: '16px',
            color: '#009776',
            background: '#171c22',
          },
          iconTheme: {
            primary: '#009776',
            secondary: '#FFFAEE',
          },
        });

        setIsSending(false);
        setUsername("");
        setSubject("");
        setDescription("");
      }).catch(error => {
        console.log("Error: ", error)
        setIsSending(false);
      })
    }
  }
    
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>
          Un projet, une idée ou une collaboration ?
          Envoyez-moi un message, je vous répondrai rapidement.
        </p>
      </div>

      <form className="contact-form" method="post">
        {Object.values(errors).map((error, i)=>(
          <div key={i} className="errors">{error}</div>
        ))}
        
        <input
          type="text"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          placeholder="Nom complet"
        />
        <input
          type="text"
          value={subject}
          onChange={(e)=> setSubject(e.target.value)}
          placeholder="Sujet"
        />
        <textarea
          rows="6"
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          placeholder="Votre message">
        </textarea>
        <Button 
          onClick={onFormSubmit}
          text={isSending ? "Envoi en cours..." : "Envoyer le message"}
        />
      </form>
    </section>
  );
}
