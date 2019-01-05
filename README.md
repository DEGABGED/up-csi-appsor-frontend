# UP CSI Appsor Website Frontend

## Using Docker in Development

**This section assumes you are familiar with Docker. If you are not, you can check these tutorials:**

A `Dockerfile` and `docker-compose.yml` is defined here for convenience. To start the Docker container from scratch, simply run:

```
docker-compose up --build
```

To close it, you can `Ctrl+C` or open another terminal, but either way you would need to run this to close the container:

```
docker-compose down
```

To run specific commands line linting or building static files, run this command:

```
docker-compose run up-csi-appsor-frontend <command>
```

A list of shorthands can be found in `run.sh`

## Directory Structure

```
src/
  assets/
  components/
    design/
    NavBar/
    Carousel/
    <Component>.js
  containers/
  helpers/
  schemas/
  App.js
  index.js
```

* The `assets/` directory contains the CSS stylesheets and images that a lot of components would use. There are also specialized assets here for specific components, which may be refactored to stay just in the component itself.

* The `components/` directory contains all form, design, and layout components with a sole purpose (aside from simply being a container of other components).

   Components solely for design (eg. `DesktopGlitter`) are stored in the `design/` folder. These components make heavy use of the images in `assets/`.

   Components with subcomponents like `NavBar` and `Carousel` are stored in their own folders, which may contain component-specific files like mobile and desktop versions.

* The `containers/` directory contains components that simply act as layout containers for other components. They integrate form, design, and layout components and are responsible for formatting them. They can be nested.

* The `helpers/` directory contains JS files, variables, and functions that do not function as components, but merely as constants or subroutines for other components, such as the default form state, list of committees, and others.

* The `schemas/` directory contains Yup schemas, which are used for form validation.

**Libraries / Components Used:**
* `{BrowserRouter as Router, Route} from 'react-router-dom'`
* `NavBar`

## The List of Committees

The Committees page contains a carousel or list of committees, depending on whether the page is viewed from desktop or mobile.

**Libraries / Components Used:**
* `Responsive from 'semantic-ui-react'`
* `Slider from 'react-slick'`
* `ReadMeModal`

## The Form

The form uses React and Formik to create its main form.

**Libraries / Components Used:**
* `formik`
* `yup`
* `ScrollAnimation from 'react-animate-on-scroll'`
* `SubmitModal`

### Structure of the Form

**Root Form Component**
The root component is `Form.js`, which serves as the main, Formik-connected Form component. It's main purpose should be to construct the handlers and interface with the Formik API. These handlers are then passed down as props to the Containers.

Submission handling and modals are also handled here, but may be refactored into their own helpers and components later on.

**Containers**
Containers like `PersonalInfo.js`, `Affiliations.js`, and `Committee.js` serve as boxes which contain the input, design, and layout components. They should be responsible **only** for the layout of the components. As a result, they would usually have most, if not all, of the design components, like `ScrollAnimation`.

**Input Component**
These components are the input components that compose the form. They can have subcomponents, but generally their purpose is to be a form input.

