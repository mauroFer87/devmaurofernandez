import '../styles/Skills.css'; 

const Skills = () => {

  return (
    <section id="skills" className="skills">
      <h1>Habilidades</h1>
      
        <div key="1">
          <h2>Lenguajes de programación</h2>
          <ul>      
              <li key="1a">Python</li>
              <li key="1b">Php</li>
              <li key="1c">JavaScript</li>
              <li key="1d">Java</li>
              <li key="1e">Sql</li>
          </ul>
        </div>



        <div key="2">
          <h2>Frameworks y Librerías</h2>
          <ul>
              <li key="2a">Django</li>
              <li key="2b">Laravel</li>
              <li key="2c">React</li>
              <li key="2d">Node.js</li>
              <li key="2e">Tailwind Css</li>
              <li key="2f">Bootstrap</li>
          </ul>
        </div>



        <div key="3">
              <h2>Bases de datos</h2>
              <ul>
                  <li key="3a">MySQL</li>
                  <li key="3b">PostgreSQL</li>
                  <li key="3c">SQLite</li>
              </ul>
            </div>


           <div key="4">
              <h2>Control de versiones y colaboracion</h2>
              <ul>
                  <li key="4a">Git (GitHub, GitLab)</li>
              </ul>
            </div>

          
        <div key="5">
              <h2>DevOps y Cloud</h2>
              <ul>
                  <li key="5a">Docker</li>
                  <li key="5b">GitHub Actions</li>
                  <li key="5c">AWS</li>
              </ul>
            </div>



          
        <div key="6">
              <h2>Testing y QA</h2>
              <ul>
                  <li key="6a">Mantis</li>
                  <li key="6b">TestLink</li>
                  <li key="6c">PyTest</li>
              </ul>
            </div>
            


            <div key="7">
              <h2>Sistemas y redes</h2>
              <ul>
                  <li key="7a">Linux (administracion de sistemas)</li>
                  <li key="7b">Servidores Apache y Nginx</li>
                  <li key="7c">Solucion de problemas de red</li>
              </ul>
            </div>



            <div key="8">
              <h2>Herramientas de desarrollo</h2>
              <ul>
                  <li key="8a">Visual Studio Code</li>
                  <li key="8b">IntelliJ IDEA</li>
                  <li key="8c">Postman</li>
              </ul>
            </div>

            <div key="9">
              <h2>APIs y autenticacion</h2>
              <ul>
                  <li key="9a">APIs REST</li>
                  <li key="9b">Autenticación con OAuth y JWT</li>
              </ul>
            </div>

      
    </section>
  );
};

export default Skills;
