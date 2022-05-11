import '../styles/main.scss';
import Social from '../components/Social';
import image from '../images/profile_image.jpg';

const Main = () => {
  return (
    <main className="main">
      <section className="container">
        <img src={image} alt="Gloria" className="container_image" />
        <h1 className="container_title">Hi, I'm Gloria</h1>
        <Social />
      </section>
      <section className="section_about">
        <h1 className="about_title">About me</h1>
        <section className="about_description">
          <p>Galician animal lover.</p>
          <p>
            Coming from the customer service world, I decided to start a new
            path in technology through web programming. I started with online
            courses until I trained as a frontend developer at Adalab.
          </p>
        </section>
      </section>
    </main>
  );
};

export default Main;
