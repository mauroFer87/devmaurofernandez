
import '../styles/About.css'; 
import profileImage from './img/profile.jpeg'

const About = () => {
  

  return (
    <section id="about" className="about">

      <h1>Sobre mi</h1>
      <img src={profileImage} alt="About" />
      <p>Soy desarrollador de software con experiencia profesional en frontend y backend, capaz de diseñar y construir aplicaciones web completas, seguras y escalables. He trabajado tanto en entornos corporativos como de manera independiente, lo que me permitió desarrollar una sólida capacidad de adaptación, comunicación y resolución de problemas.
        <br></br>Estoy abierto a brindar servicios como freelance, pero también en búsqueda de una posición en relación de dependencia que me permita seguir creciendo profesionalmente, aportar valor real a un equipo y participar en el desarrollo de soluciones tecnológicas de impacto.
      </p>
      
    </section>
  );
};

export default About;
