import { Link } from 'react-router-dom';
import '../css/App.css';
import '../fonts/Pocketmonk.otf';
import Header2 from './Header2';

const Github = () => {
  return (
    <div className='outercontainer'>
      <div className='innercontainer'>
        <Header2></Header2>
        <div className='pokedexcontainer'>
          <div className="github-container w-100 h-100 d-flex">
            <div className="github-sidebar d-flex justify-content-center align-items-center"><Link to="/">Terug naar pokedex</Link></div>
            <div className="github-content container-fluid">
              <h1 className="pt-4">Github repositories</h1>
              <div className="row">
                <div className="col-12 col-xxl-4 col-xl-4 col-md-6 col-sm-6 col pt-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">reactPokedex</h5>
                      <p class="card-text">React app made with PokeAPI</p>
                      <a href="https://github.com/ililuab/reactPokedex" class="card-link">Ga naar repo</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 col-xl-4 col-md-6 col-sm-6 col pt-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Book and Go</h5>
                      <p class="card-text">Simple travel site.</p>
                      <a href="https://github.com/ililuab/Book-and-Go" class="card-link">Ga naar repo<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/</svg></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 col-xl-4 col-md-6 col-sm-6 col pt-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Nature lookup</h5>
                      <p class="card-text">Nature Wordpress Application</p>
                      <a href="https://github.com/ililuab/Nature-lookup-app" class="card-link">Ga naar repo<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/</svg></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 col-xl-4 col-md-6 col-sm-6 col pt-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Twitter API</h5>
                      <p class="card-text">Twitter API application</p>
                      <a href="https://github.com/ililuab/Twitter-API-iLookup" class="card-link">Ga naar repo<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/</svg></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 col-xl-4 col-md-6 col-sm-6 col pt-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Admin plugins</h5>
                      <p class="card-text">Java made MC plugins</p>
                      <a href="https://github.com/ililuab/AdminCommands-plugins" class="card-link">Ga naar repo<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/</svg></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 col-xl-4 col-md-6 col-sm-6 col pt-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Camping Scrum</h5>
                      <p class="card-text">Camping site made with PHP</p>
                      <a href="https://github.com/ililuab/Camping-Scrum-V2" class="card-link">Ga naar repo<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/</svg></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Github;