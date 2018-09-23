const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}


class Welcome extends React.Component {
  render (){ 
    return (
      <div className="jumbotron">    
        <div className="row">

          <div className="col-lg-6 center">
            <img className="rounded-circle img-fluid" src={siteConfig.headerIcon}/>
          </div>
       
           <div className="col-lg-6 center">
              <h1>{siteConfig.title}</h1>
              <h3><i>{siteConfig.tagline}</i></h3>
              <ul className="skill-list">
                  <li>Software Engineer</li>
                  <li>Web Developer</li>
                  <li>Back-End &amp; Front-End</li>
                  <li>Computer Science</li>
                  <li>Acteur</li>
              </ul>
           </div>
        </div>
    </div>
    )
  }
}

class Bio extends React.Component {
  render() {
    return (
    <div className="row">
      <div className="col-lg-4">
         <a target="_blank" href={siteConfig.cv} className="btn btn-success btn-lg cv">Curriculum Vitae</a>
      </div>

      <div className="col-lg-8 card">
         <div className="card-body">
         Op dit moment studeer ik informatica(computer science) aan de Hogeschool van Rotterdam. 
         Ik zit in het derder jaar van mijn opleiding en loop stage bij Teqplay B.V. , op dit moment beheers ik de programmeertalen: Python, C#, Java, Javascript, Typescript, SQL, Java, Kotlin, HTML, CSS, PHP en R😉. 
         Het leukste aan mijn opleiding vind ik dat het een zowel technische als creatieve opleiding is, bij het bouwen van een website komt een hoop techniek kijken, maar bij de front-end helpt het als je je creatieviteit de vrije loop laat gaan. 
         Zelf heb heb ik een voorkeur voor de back-end en gebruik ik de front-end als visualitatie van wat er in de back-end gebeurt.
         </div>
      </div>
    </div>
    )
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className="row">
         <div className="col-lg-6 skills">
            <ul className="list-group">
              <li className="list-group-item">C#/.NET</li>
              <li className="list-group-item">Python</li>
              <li className="list-group-item">PHP</li>
              <li className="list-group-item">HTML, CSS, Javascript/Typescript</li>
            </ul>
         </div>

          <div className="col-lg-6 skills">
            <ul className="list-group">
              <li className="list-group-item">R Statistiek</li>
              <li className="list-group-item">Tensorflow</li>
              <li className="list-group-item">React, Angular, Docusaurus, Gatsby</li>
              <li className="list-group-item">SQL</li>
            </ul>
         </div>
      </div>
    )
  }
}


class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
        <div className="container">
           <Welcome/>
           <Bio/>
           <Skills/>
        </div>
    );
  }
}

module.exports = Index;
