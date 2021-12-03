# CEN 4010 - Group Project

Calvin Hariprasad<br><em>Team leader, system analyst</em>

Dawson Gilbert<br><em>Back-end developer</em>

Seth Ganley<br><em>System designer, system tester</em>

Steven Whitfield<br><em>UI designer, front-end developer, back-end developer</em>

<br>

<h2 align="center"><strong>Phoenix Tech</strong></h2>
<h3 align="center">An E-Commerce Solution</h3>

---

### **Live Demo**

[Phoenix Tech](https://phoenixtech.netlify.app/) - hosted with Netlify

[Back-end server](http://phoenixtech-app.herokuapp.com/) - hosted with Heroku

_NOTE: The front-end can be built locally (instructions on that below), however, the back-end requires a connection to the MongoDB database to function properly. As such, building the back-end on a local instance will not work._

---

### **About the code**

Our solution utilized the MERN technology stack. The front-end was built on React with Gatsby as a static-site generator and SCSS for styling. The back-end was built on Express and Node.js with MongoDB for the database using the model-view-controller (MVC) design pattern.

### **Front-end breakdown**

The entirety of the front-end is located within the `client` directory. The `src` directory contains the web pages, React components, styles, and product data. The `static` directory contains local assets, primarily vector and raster images.

**Pages**

Each page contains the `Layout` and `Head` components (more about these in "Components"). To navigate to a specific page, use the website's navigation or type `phoenixtech.netlify.app/<page-slug>` where the `page-slug` is the name of the JS file for that particular page.

**Components**

The React components are further organized according to what page or section they belong to. For example, `components/Home` will contain components used for building the home page.

**Styles**

Every component and page is styled using SCSS modules. This allows class names to be reused for different components without overriding styles (more about CSS modules can be found in their official documentation).

**Data**

Product information is stored locally as an array of objects. Each product has an _sku_, _name_, _price_, and _image_. This data is imported into components to be used as needed.

**Plugins and Dependencies**

Aside from React, Gatsby, and SASS, we also used `react-helmet` to store information in the website's head. This includes meta information and scripts.

**Build Instructions**

To run a local instance of the front-end:

1. Download or clone the repository to a local directory.
2. Open the terminal and change directory to `client`.
3. Enter the command `npm run start`.

### **Back-end breakdown**

The back-end can be found in the `server` directory. It was build on Express and Node.js with MongoDB Atlas as our database.

**Server**

The server is created and ran using Express and Node.js. The `server.js` file also establishes a connection to the database, imports database schema, and adds API routes.

**Database**

The file `db.js` located in the `config` directory is used to connect to the MongoDB Atlas database. Schema are created in the `models` directory. These schema are used to create documents in their respective collection. Any entries in the database is reflected in the API.

**API**

The API can be accessed by going to the back-end of the site at `phoenixtech-app.herokuapp.com/api/<route>` where the two active routes are `contact` and `transactions`. The data is then displayed as JSON.

---

_All of the code in this repository was either written by Steven Whitfield, or automatically generated using Gatsby or NPM._
