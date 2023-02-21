<a name="readme-top"></a>
<div align="center">

  ![Project Banner](readme_assets/readme_banner.png#gh-dark-mode-only)
  ![Project Banner](readme_assets/readme_banner-light.png#gh-light-mode-only)

  ![Yariga Logo](readme_assets/yariga_logo.svg#gh-dark-mode-only)
  ![Yariga Logo](readme_assets/yariga_logo-light.svg#gh-light-mode-only)

  <p>
  <b>Yariga</b> is a Full Stack MERN Dashboard App With CRUD, Auth, and Charts Using Refine
  </p>
  
<!-- Badges -->
<p>
  <a href="https://github.com/ladunjexa/Wixie-Social-Network/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/ladunjexa/Wixie-Social-Network" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/ladunjexa/Wixie-Social-Network" alt="last update" />
  </a>
  <a href="https://github.com/ladunjexa/Wixie-Social-Network/network/members">
    <img src="https://img.shields.io/github/forks/ladunjexa/Wixie-Social-Network" alt="forks" />
  </a>
  <a href="https://github.com/ladunjexa/Wixie-Social-Network/stargazers">
    <img src="https://img.shields.io/github/stars/ladunjexa/Wixie-Social-Network" alt="stars" />
  </a>
  <a href="https://github.com/ladunjexa/Wixie-Social-Network/issues/">
    <img src="https://img.shields.io/github/issues/ladunjexa/Wixie-Social-Network" alt="open issues" />
  </a>
  <a href="https://github.com/ladunjexa/Wixie-Social-Network/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/ladunjexa/Wixie-Social-Network.svg" alt="license" />
  </a>
</p>
   
 <h4>
    <a href="https://wixie-social-network.vercel.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Wixie-Social-Network">Documentation</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Wixie-Social-Network/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Wixie-Social-Network/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [About the Project](#star2-about-the-project)
  * [Folder Structure](#bangbang-folder-structure)
  * [Environment Variables](#key-environment-variables)
  * [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
- [Data Model](#information_source-data-model)
- [Media](#milky_way-media)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

</details>  

<!-- About the Project -->
## :star2: About the Project

<p align="center"> 
  <img src="readme_assets/wixie-light.png" height="auto" width="45%" />
  <img src="readme_assets/wixie-dark.png" height="auto" width="45%" />
</div>
<br />

Wixie is an outstanding Full-Stack social network, with a gorgeous design using best practices of MUI and a well-maintained server-side using Node.js & MongoDB. the best functionality at your side! register for the network, share and like posts, make connects and view the various profile on the network.
 
<!-- Folder Structure -->
### :bangbang: Folder Structure

<b>Wixie</b> code folder structure seperated to client-side and server-side.
```bash
Yariga-Realestate-Dashboard/
|- client
  |-- src/
    |-- assets/
    |-- components/
      |-- agent/
      |-- charts/
      |-- common/
      |-- home/
      |-- layout/
    |-- constants/
    |-- contexts/
    |-- interfaces/
    |-- pages/
    |-- utils/
    |-- App.tsx
  |-- .env
|- server
  |-- controllers/
  |-- mongodb/
  |-- routes/
  |-- index.js
  |-- .env
```

Now, lets dive into both server and client sides folders.

### CLIENT-SIDE

#### components

`FlexBetween.jsx` - `Friend.jsx` - `UserImage.jsx` - `WidgetWrapper.jsx`

This folder contains all the function components, which they're independent and reusable bits of code. They serve the UI (User Interface) of Wixie to avoid unnecessary repetition of the code.
those components are beautiful customized widgets using MUI to describe initial theme for widgets as they're named.

#### scenes

scenes folder seperated by folders such as homePage, loginPage, profilePage, and navbar. each folder, implement the desired UI parts.
also, there is a folder called `widgets`, where you can only find widgets that are reused, mainly for the feed and user profiles.
this department communication with the server-side in order to get access data, along with using React Redux.

#### state

`index.js`

using [createSlice] (reduxjs-toolkit) that accepts an initial state, an object of reducer functions and a [authSlice] that automatically generates action creators and action types that correspond to the reducers and state. specifically, the reducers are `setMode`, `setLogin`, `setLogout`, `SetFriends`, `setPosts`, `setPost`

### SERVER-SIDE

#### conrtollers

`auth.js` - `posts.js` - `users.js` 

`controllers` folder contains JS files for the controllers in order to handle users request and return a response.
`auth` controller consist Register & Login controllers that using JWT (JSON Web Token) in order to defines a compact and self-contained way for securely transmtting information parties as a JSON object (digitally signed) and salting technique to encrypt user password using random salt provided by bcrypt.

#### data

`index.js`

constant array of fake users & data. this data can be used to verify the integrity of the application. In the case of adding the information, it must be added only once - you can find in `index.js` file in the [mongoose.connect] command the insertion of the data, remove the comments accordingly. After running the app, return the comments because when re-running it can cause a mess in the database. in such a case, drop the collections that created in your DB and repeat the process.

A reference to thus snippet (`index.js` file):
```javascript
  // add data one time
  User.insertMany(users);
  Post.insertMany(posts);
```

#### middleware

JWT provides a JSON Web Token (JWT) authentication middleware.
`auth.js` file in middleware folder contain [verifyToken] async function that sends identifying credentials to the middleware and gets back a JWT with appropriate permissions.  

in the `.env` file you need to add `JWT_SECRET` (individual user envorinment variable) with a secret string as you wish, keep it to yourself.

#### models

`Post.js` - `User.js`

`models` folder consists model class files for `Post` and `User` by[mongoose.Schema] which defines the structure of the document, default values, validators, etc., whereas a Mongoose model providers an interface to the data base for creating, querying, updating, deleting records.

#### routes

`auth.js` - `posts.js` - `users.js`

`routes` folder files refers to how an application's endpoint (URIs) respond to client requests make the path mapping using Express.js with [express.Router].
<br />

<!-- ENV VARIABLES -->
### :key: Environment Variables

In order to use Wixie you have to add the following environment variable to your .env file

```env
REACT_APP_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
REACT_APP_GOOGLE_CLIENT_SECRET=<GOOGLE_CLIENT_SECRET>
REACT_APP_SERVER_URL=<SERVER_URL>
```

```env
MONGODB_URL=<MONGODB_URL>
CLOUDINARY_CLOUD_NAME=<CLOUD_NAME>
CLOUDINARY_API_KEY=<API_KEY>
CLOUDINARY_API_SECRET=<API_SECRET>
```

<!-- TechStack -->
### :space_invader: Tech Stack

<img src="https://www.sbr-technologies.com/wp-content/uploads/2021/06/mern.png" width="25%" />

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

and much more..

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Installation -->
### :gear: Installation

#### Step 0:

Note :bangbang: the application uses a MongoDB database, therefore, you need to create a database and connect it to the application, fo this, change the `MONGO_URL` environment variable in `.env` file.

If everything is done correctly, when the server is running, you will expect a message: ```server is running on port: <PORT>```
otherwise, you will receive a message that the connection failed and the corresponding error.

deductively, react-app runs on port `3000`, so make sure your server run on another port for example `3001`. it also need to be set in `.env` file at `PORT` variable.

Also, in production, change the server address in the designated places.


#### Step 1:
Download or clone this repo by using the link below:

```bash
 https://github.com/ladunjexa/Wixie-Social-Network
```

#### Step 2:

Wixie using NPM (Node Package Manager), therefore, make sure that Node.js is installed by execute the following command in consle

```bash
  node -v
```

### Step 3:

Go to root folder and execute the following command in console to get nodemon command line tool: (helps with the speedy development of Node. js applications)

```bash
  npm install -g nodemon
```

### Step 4:

In both folders (`client` / `server`) execute the following command to get the required packages:

```bash
  npm install
```

### Step 5:

Go to `server` folder and execute the following command in order to run our back-end server:

```bash
  node index.js
```

### Step 6:

Go to `client` folder and execute the following command in order to run our front-end app:

```bash
  npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Data Model -->
## :information_source: Data Model

"data model" refers to the way data is organized documented, and defined within a database.
it so, data model are visual representations of an enterprise's data elements (including their types) and the relations between them.

Below is the Data Model for wixie.
![DataModel](wixie-datamodel.png)

If you want to get an impression of WIXIE, you can register or log in using the following demo user details:

```python
Email: admin@mail.com 
Password: 12344321
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Media -->
## :milky_way: Media

### LOGIN & REGISTER ACTIVITIES

![Login](readme_assets/wixie-loginpage.png)
![Register](readme_assets/wixie-registerpage.png)

### USER PROFILE ACTIVITY

![Profile](readme_assets/wixie-userprofile.png)

### FEED ACTIVITY

![Dark](readme_assets/wixie-mockup-1.png)
![Light](readme_assets/wixie-mockup-2.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/ladunjexa/Wixie-Social-Network/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ladunjexa/Wixie-Social-Network" />
</a>


Contributions are always welcome!

See [`contributing.md`](https://contributing.md/) for ways to get started.

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- License -->
## :warning: License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/ladunjexa/Wixie-Social-Network/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Contact -->
## :handshake: Contact

Liron Abutbul - [@lironabutbul6](https://twitter.com/lironabutbul6) - [@ladunjexa](https://t.me/ladunjexa)

Project Link: [https://github.com/ladunjexa/Wixie-Social-Network](https://github.com/ladunjexa/Wixie-Social-Network)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Acknowledgments -->
## :gem: Acknowledgements

This section used to mention useful resources and libraries (packages) that used in Wixie Social Network application project.

#### SERVER DEPENDENCIES:

 - [Node.js](https://nodejs.org/en/download/)
 - [Cloudinary](https://cloudinary.com/)
 - [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
 - [dotenv](https://www.npmjs.com/package/dotenv)
 - [Express.js](https://expressjs.com/)
 - [MongoDB](https://www.mongodb.com/)
 - [Mongoose](https://mongoosejs.com/)
 - [Nodemon](https://www.npmjs.com/package/nodemon)
 
#### CLIENT DEPENDENCIES:

 - [TypeScript](https://www.typescriptlang.org/)
 - [Refine Dev](https://refine.dev/)
 - [axios](https://axios-http.com/docs/intro)
 - [React](https://reactjs.org/)
 - [React-ApexChart](https://apexcharts.com/docs/react-charts/)
 - [React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)
 - [Material UI](https://mui.com/material-ui/getting-started/installation/)
 - [Google Fonts](https://fonts.google.com/)

- [Google Console](https://console.cloud.google.com/)
- [Figma Design](https://www.figma.com/file/QLU3mZJOsmnAN4SEQ8YSTA/Real-Estate-Admin-Dashboard?node-id=0%3A1&t=y5pLesuNGm7UIfPg-0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="center"><img src="readme_assets/wixie-tablet.png" width="60%"></p>

