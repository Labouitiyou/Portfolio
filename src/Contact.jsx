import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9f7s248', 'template_yxgkz77', form.current, 'fN6omQmFjOar9b1Lv')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé avec succès !');
      }, (error) => {
          console.log(error.text);
          alert('Erreur lors de l\'envoi du message.');
      });

    e.target.reset(); // Réinitialise le formulaire après envoi
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label>Nom</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
