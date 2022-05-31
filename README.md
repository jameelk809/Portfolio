<p align="center">
  <h1 align="center">PORTFOLIO</h1>

  <p align="center">
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects. <br>Deployment: 
    <a href="https://jameelk809.github.io/Portfolio/">jameelk809.github.io/Portfolio/</a>
    <br />
    <br />
  </p>
</p>

[![Site Preview](/public/social-image.png)](https://jameelk809.github.io/Portfolio/)


## Table of Contents

- [Technology Stack](#technology-stack-)
- [Structure](#structure-)
- [Sharing](#sharing-)
- [Prerequisites](#prerequisites-)
- [Setup And Deployment](#setup-and-deployment-)
- [Contributing](#contributing-)

## Technology Stack

Dependencies defined in `package.json`:

- [Reactjs](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Typist](https://github.com/jstejada/react-typist)
- [GitHub API](https://developer.github.com/v3/repos/)

## Structure
```bash
Portfolio
│   .gitignore
│   package-lock.json
│   package.json
│   pages.js
│   README.md
│
├───public
│       favicon.ico
│       index.html
│       logo192.png
│       logo512.png
│       manifest.json
│       robots.txt
│       social-image.png
│
└───src
   │   App.js
   │   App.test.js
   │   index.js
   │   logo.svg
   │   serviceWorker.js
   │
   ├───components
   │   │   Footer.jsx
   │   │   Navbar.jsx
   │   │
   │   ├───blog
   │   │       Blog.jsx
   │   │       BlogBuilder.jsx
   │   │       BlogPost.jsx
   │   │
   │   └───home
   │           AboutMe.jsx
   │           Experience.jsx
   │           ExperienceCard.jsx
   │           Experience_old.jsx
   │           GetInTouch.jsx
   │           Leadership.jsx
   │           MainBody.jsx
   │           Project.jsx
   │           ProjectCard.jsx
   │           ProjectTimeline.jsx
   │           Skills.jsx
   │           SkillsBar.jsx
   │           SkillsTab.jsx
   │           style.min.css
   │
   ├───editable-stuff
   │       blog.jsx
   │       config.js
   │       kamran.jpg
   │       resume.pdf
   │
   ├───hooks
   │       useIsomorphicLayoutEffect.js
   │       useResizeObserver.js
   │       useScrollPosition.js
   │
   └───scss
            custom.scss
            _animations.scss
            _index.scss
            _stars.scss
            _typography.scss
```

## Sharing

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [`src/editable-stuff/config.js`](./src/editable-stuff/config.js) and add resume. Mark star ⭐ if you like the project.

## Prerequisites

You should have [`Node.js`](https://nodejs.org/en/) and [`Git`](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [`src/editable-stuff/config.js`](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [`src/editable-stuff/resume.pdf`](./src/editable-stuff/)

5. Edit [`title`](./public/index.html#L34) and meta [`description`](./public/index.html#L13) in [`public/index.html`](./public/index.html).
6. Change URL in [`package.json`](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain, refer [`create-react-app.dev`](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/Portfolio
   ```

   Next time if you make changes, repeat from step 8.

Facing issues? Feel free to contact at jameelk809@gmail.com.

## Contributing 🙌

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
