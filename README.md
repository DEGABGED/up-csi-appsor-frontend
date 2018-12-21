# UP CSI Appsor Website Frontend

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

   Components solely for design (eg. `GlitterPics`) are stored in the `design/` folder. These components make heavy use of the images in `assets/`.

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

### Building components compatible with Formik

Formik works by taking a Form component (the inner form) and passing it values and handlers in the form of props. In our case, we use the Formik function that takes in the form and returns the Formik form that handles the values and value handling (Yes, it handles the handling as well.) 

In the function we can define rules, such as `mapPropsToValues`, which maps the Formik props into the values the inner form will take, `validate`, which defines a validation function, and `handleSubmit`, which would handle the API call when the user submits.

```javascript
const ConnectedForm = withFormik({
  mapPropsToValues: props => props.values,
  validate: (values, props) => {},
  handleSubmit: values => console.log(values),
})(MainForm);
```

Inside the inner form, it accepts props like the `values`, `errors`, and their handlers like `handleChange`, `handleSubmit`, `handleBlur`. It also has helpers like `isSubmitting` and `setValues`, which is of interst to us if we'll be making custom input handlers. You can view more about the functions that Formik passes as props [here.](https://github.com/jaredpalmer/formik#formik-props)

```javascript
const MainForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setValues,
}) => (
  <form onSubmit={handleSubmit}>
    <Affiliations
      handleChange={value => {
        setValues({
          ...values,
          affiliations: value,
        });
      }}
      affiliations={values.affiliations}
    />
  </form>
);
```

Inside the form is where we would place our input components like the input fields and other more complicated components. For the simpler input components, you can check out the docs and examples for Formik [here.](https://github.com/jaredpalmer/formik#basics).

In the case above, the `handleChange` function passed to the Affiliations form takes in the new value `value` and uses `setValues` to declare the new values Formik will pass as props. Since we need to give the entire value object and not just our slice of it, we construct such an object and pass it to `setValues`.

```javascript
{
  ...values,
  affiliations: value,
}
```

### Building custom input fields (eg. Affiliations form)

In the Affiliations form, we use the `handleChange` passed to us from the `App.js` and use that to declare the new value of the `affiliations` slice of the value. We use these in the `addForm` and `deleteForm` methods.

```javascript
addForm() {
  this.props.handleChange([
    ...this.props.affiliations,
    {
      orgName: null,
      position: null,
      duties: null,
    },
  ]);
}
```

As for the subforms AffiliationsForm, we create our own `handleChange` function for them such that they edit their specific Affiliation attribute. It takes the change event, gets the name and value of the target (the field edited), and uses those to change only that specific field of the affiliation.

```javascript
renderForms() {
  return this.props.affiliations.map((m, i) => (
    <AffiliationsForm
      key={i}
      formID={i}
      affiliations={m}
      deleteForm={this.deleteForm}
      handleChange={e => {
        const { name, value } = e.currentTarget;
        let newAffiliations = [...this.props.affiliations];
        newAffiliations[i][name] = value;
        this.props.handleChange(newAffiliations);
      }}
    />
  ));
}
```

Note: for this to work, we need to define our `name` attribute for the inputs of the subforms.

```jsx
<TextField
  label="Org Name"
  name="orgName"
  value={props.affiliations.orgName || ''}
  onChange={props.handleChange}
/>
```
