<template>
  <div class="main">
    <section class="container">
      <img src="/profile.jpg" alt="Gloria" class="container_image" />
      <h1 class="container_title">Hi, I'm Gloria</h1>
      <section class="social">
        <ul class="social_links">
          <li class="social_media">
            <a
              class="icon"
              href="https://github.com/gloriarodrife"
              rel="noopener noreferrer"
            >
              <GitHubIcon class="icon_link" />
            </a>
          </li>
          <li class="social_media">
            <a
              class="icon"
              href="https://www.linkedin.com/in/gloriarodrife/"
              rel="noopener noreferrer"
            >
              <LinkedinIcon class="icon_link" />
            </a>
          </li>
          <li class="social_media">
            <a
              class="icon"
              href="https://twitter.com/gloriarodrife"
              rel="noopener noreferrer"
            >
              <TwitterIcon class="icon_link" />
            </a>
          </li>
          <li class="social_media">
            <a
              class="icon"
              href="mailto:gloria@gloriarodrife.com"
              rel="noopener noreferrer"
            >
              <EnvelopeIcon class="icon_link" />
            </a>
          </li>
        </ul>
      </section>
    </section>
    <section class="section_about">
      <section class="about_description">
        <p>👩🏽‍💻 Frontend Developer</p>
        <p>🌱 Never stop learning</p>
        <p>🐶 Animal lover</p>
        <p>🏃🏽‍♀️ Sports</p>
      </section>
    </section>
  </div>
</template>

<style lang="scss">
:root {
  --primary: rgb(252, 231, 244);
  --primary--dark: #9c0d2e;
  --primary--ligth: #f0849e;
  --color-text: rgb(30, 29, 29);
}

body {
  background-color: var(--primary);
  font-family: monospace;
  margin: 0;
}

.main,
.container,
.social {
  display: flex;
  align-items: center;
}

.main,
.container {
  flex-direction: column;
}

.main {
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  gap: 5rem;
  padding: 1rem;

  @media all and (min-width: 680px) {
    flex-direction: row;
    justify-content: space-around;
  }

  .container {
    gap: 0.625rem;

    &_image {
      width: 210px;
      height: 210px;
      border-radius: 50%;
    }

    &_title,
    &_subtitle {
      color: var(--color-text);
    }

    &_title {
      font-weight: 400;
      font-size: 1.8rem;
      margin: 0.5rem 0;
    }

    &_subtitle {
      font-size: 1.5rem;
    }
  }

  .section {
    &_about {
      max-width: 600px;
      text-align: center;
      .about {
        &_title {
          font-size: 2rem;
          font-weight: 400;
          color: var(--primary--dark);
          margin-bottom: 1.5rem;

          @media all and (min-width: 680px) {
            text-align: left;
          }
        }

        &_description {
          font-size: 1.3rem;
          max-width: 500px;
          color: var(--color-text);
          p {
            margin: 1rem 0;

            @media all and (min-width: 680px) {
              text-align: left;
            }
          }
        }
      }
    }
  }
}

.social {
  justify-content: center;

  &_links {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
  }

  &_media {
    font-size: 1.563rem;

    .icon {
      &_link {
        fill: var(--primary--dark);
        width: 25px;
        height: 25px;
        &:hover {
          fill: var(--primary--ligth);
        }
      }
    }
  }
}
</style>
