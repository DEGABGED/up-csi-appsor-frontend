# UP CSI Appsor Website and Form

## Frontend Side: The Form

The form uses React and Formik to create its main form.

### Building components compatible with Formik

Formik works by taking a Form component (the inner form) and passing it values
and handlers in the form of props. In our case, we use the Formik function that
takes in the form and returns the Formik form that handles the values and value
handling.

In the function we can define rules, such as `mapPropsToValues`, which maps
the Formik props into the values the inner form, `validate`, which defines a
validation function, and `handleSubmit`, which would handle the API call when
the user submits.

```javascript
const ConnectedForm = withFormik({
  mapPropsToValues: props => props.values,
  validate: (values, props) => {},
  handleSubmit: values => console.log(values),
})(MainForm);
```

Inside the inner form, it accepts props like the `values`, `errors`, and their
handlers like `handleChange`, `handleSubmit`, `handleBlur`. It also has helpers
like `isSubmitting` and `setValues`, which is of interst to us if we'll be
making custom input handlers. You can view more about the functions that Formik
passes as props [here.](https://github.com/jaredpalmer/formik#formik-props)

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

Inside the form is where we would place our input components like the input
fields and other more complicated components. For the simpler input components,
you can check out the docs and examples for Formik [here.](https://github.com/jaredpalmer/formik#basics).

In the case above, the `handleChange` function passed to the Affiliations form
takes in the new value `value` and uses `setValues` to declare the new values
Formik will pass as props. Since we need to give the entire value object and not
just our slice of it, we construct such an object and pass it to `setValues`.

```javascript
{
  ...values,
  affiliations: value,
}
```

### Building custom input fields (eg. Affiliations form)

In the Affiliations form, we use the `handleChange` passed to us from the
`App.js` and use that to declare the new value of the `affiliations` slice of
the value. We use these in the `addForm` and `deleteForm` methods.

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

As for the subforms AffiliationsForm, we create our own `handleChange` function
for them such that they edit their specific Affiliation attribute. It takes the
change event, gets the name and value of the target (the field edited), and uses
those to change only that specific field of the affiliation.

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

Note: for this to work, we need to define our `name` attribute for the inputs of
the subforms.

```jsx
<TextField
  label="Org Name"
  name="orgName"
  value={props.affiliations.orgName || ''}
  onChange={props.handleChange}
/>
```
