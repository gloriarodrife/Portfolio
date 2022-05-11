import '../styles/social.scss';

const Social = (props) => {
  return (
    <section className="social">
      <ul className="social_links">
        <li className="social_media">
          <a
            className="icon"
            href="https://github.com/"
            target={props.target}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github icon_link"></i>
          </a>
        </li>
        <li className="social_media">
          <a
            className="icon"
            href="https://www.linkedin.com/in/gloriarodrife/"
            target={props.target}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin icon_link"></i>
          </a>
        </li>
        <li className="social_media">
          <a
            className="icon"
            href="https://twitter.com/gloriarodrife"
            target={props.target}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter icon_link"></i>
          </a>
        </li>
        <li className="social_media">
          <a
            className="icon"
            href="mailto:gloriarodrife@gmail.com"
            target={props.target}
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-envelope icon_link"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

Social.defaultProps = {
  target: '_blank',
};
export default Social;
