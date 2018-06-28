const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="footer-content">
           <div className="row">
 
          <div className="col-lg-4">
          <a href={this.props.config.baseUrl}>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="55"
                height="58"
              />
            )}
          </a>
          </div>

          <div className="col-lg-4 social-bar">
            <h5>Find me on:</h5>
            <a href="https://github.com/Steven24K" target="_blank"><img height="90px" width="90px" src={`${this.props.config.baseUrl}img/GitHub.png`}/></a>
            <a href="https://www.youtube.com/channel/UCYoHlYm31DGTR3Soqs6My6Q/featured" target="_blank"><img height="80px" width="100px" src={`${this.props.config.baseUrl}img/youtube.png`}/></a>
            <a href="https://nl.linkedin.com/in/steven-koerts-223aa3135" target="_blank"><img height="90px" width="90px" src={`${this.props.config.baseUrl}img/linkedin.png`}/></a>
            <a href="https://www.instructables.com/member/stevenk102/" target="_blank"><img height="90px" width="90px" src={`${this.props.config.baseUrl}img/instruct.png`}/></a>
          </div>

          <div className="col-lg-4 powered">
              <h5>Powerd by:</h5>
              <a href="https://docusaurus.io/" target="_blank"><img height="80px" width="80px" src={`${this.props.config.baseUrl}img/docusaurus.svg`}/></a>
              <a href="https://pages.github.com/" target="_blank"><img height="100px" width="250px" src={`${this.props.config.baseUrl}img/pages.png`}/></a>

              <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>

          </div>
        </section>


        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
