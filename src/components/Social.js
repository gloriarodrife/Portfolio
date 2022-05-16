import '../styles/social.scss';

import { ReactComponent as TwitterIcon } from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg';
import { ReactComponent as GitHubIcon } from '@fortawesome/fontawesome-free/svgs/brands/github.svg';
import { ReactComponent as LinkedinIcon } from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg';
import { ReactComponent as EnvelopeIcon } from '@fortawesome/fontawesome-free/svgs/solid/envelope.svg';
const Social = (props) => {
  return (
    <section className="social">
      <ul className="social_links">
        <li className="social_media">
          <a
            className="icon"
            href="https://github.com/gloriarodrife"
            target={props.target}
            rel="noopener noreferrer"
          >
            <GitHubIcon className="icon_link" />
          </a>
        </li>
        <li className="social_media">
          <a
            className="icon"
            href="https://www.linkedin.com/in/gloriarodrife/"
            target={props.target}
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="icon_link" />
          </a>
        </li>
        <li className="social_media">
          <a
            className="icon"
            href="https://twitter.com/gloriarodrife"
            target={props.target}
            rel="noopener noreferrer"
          >
            <TwitterIcon className="icon_link" />
          </a>
        </li>
        <li className="social_media">
          <a
            className="icon"
            href="mailto:gloriarodrife@gmail.com"
            target={props.target}
            rel="noopener noreferrer"
          >
            <EnvelopeIcon className="icon_link" />
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
