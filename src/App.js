import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
   <div id="app">
     <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" type="text" id="github_username" required />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" type="text" id="techs" required />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" type="text" id="latitude" required />  
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" type="text" id="longitude" required />  
          </div>
        </div>
        
        <button type="submit">Salvar</button>
      </form>
     </aside>
     <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://placedog.net/300/300?random" alt=""/>
            <div className="user-info">
              <strong>Gustavo Rocha</strong>
              <span>Wordpress, VueJs, ReactJS</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum qui repellendus error modi, mollitia reprehenderit dolorem ab hic voluptatibus.</p>
          <a href="https://github.com/gustavo-a">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://placedog.net/300/300?random" alt=""/>
            <div className="user-info">
              <strong>Gustavo Rocha</strong>
              <span>Wordpress, VueJs, ReactJS</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum qui repellendus error modi, mollitia reprehenderit dolorem ab hic voluptatibus.</p>
          <a href="https://github.com/gustavo-a">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://placedog.net/300/300?random" alt=""/>
            <div className="user-info">
              <strong>Gustavo Rocha</strong>
              <span>Wordpress, VueJs, ReactJS</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum qui repellendus error modi, mollitia reprehenderit dolorem ab hic voluptatibus.</p>
          <a href="https://github.com/gustavo-a">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://placedog.net/300/300?random" alt=""/>
            <div className="user-info">
              <strong>Gustavo Rocha</strong>
              <span>Wordpress, VueJs, ReactJS</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum qui repellendus error modi, mollitia reprehenderit dolorem ab hic voluptatibus.</p>
          <a href="https://github.com/gustavo-a">Acessar perfil no Github</a>
        </li>
      </ul>
     </main>
   </div>
  );
}

export default App;
