import '../styles/Contact.css';

import linkedinIcon from './img/linkedin.png';
import githubIcon from './img/github.png';
import gmailIcon from './img/gmail.png'

const Contact = () => {



  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>Si deseas ponerte en contacto, no dudes en enviarme un correo electrónico o conectar conmigo en las redes sociales. ¡Siempre estoy abierto a nuevas oportunidades y colaboraciones!</p>


     
        <div>
         
          <div className="social-media">
            <a href="mailto:dev.maurofernandez@gmail.com" target="_blank" rel="noopener noreferrer" className="social-media-link">
              <img src={gmailIcon} alt="email" className="social-media-icon" />
              dev.maurofernandez@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/mauro-fernandez-82483723b/" target="_blank" rel="noopener noreferrer" className="social-media-link">
              <img src={linkedinIcon} alt="Perfil de LinkedIn" className="social-media-icon" />
              LinkedIn
            </a>
            <a href="https://github.com/mauroFer87" target="_blank" rel="noopener noreferrer" className="social-media-link">
              <img src={githubIcon} alt="Perfil de GitHub" className="social-media-icon" />
              GitHub
            </a>
            
          </div>
        </div>
    
    </section>
  );
};

export default Contact;
