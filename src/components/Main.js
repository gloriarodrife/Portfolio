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
        <section className="about_description">
          <p>👩🏽‍💻 Frontend Developer</p>
          <p>🌱 Never stop learning</p>
          <p>🐶 Animal lover</p>
          <p>🏃🏽‍♀️ Sports</p>
        </section>
      </section>
    </main>
  );
};

export default Main;
