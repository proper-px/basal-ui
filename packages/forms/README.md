# @basal-ui/forms

- [@basal-ui/forms](#basal-uiforms)
  - [Installation](#installation)
  - [Components](#components)
    - [Checkbox](#checkbox)
    - [FieldDescription](#fielddescription)
    - [FieldError](#fielderror)
    - [Fieldset](#fieldset)
    - [FormField](#formfield)
    - [Input](#input)
    - [Label](#label)
    - [Radio](#radio)
    - [Select](#select)
    - [Textarea](#textarea)
  - [Styling](#styling)
    - [Recommended approach to importing styles](#recommended-approach-to-importing-styles)

## Installation

1. Clone the parent repository
2. Ensure you're on the latest version of node `nvm use --lts`
3. Install the dependencies `npm install`
4. Build all packages: `npm run build`
5. Symlink the package for development within a different project.

   1. `cd packages/forms`
   2. `npm link`

6. In the project you want to use the package in, run `npm link @basal-ui/forms` (ensure you're using the same version of `node`)

## Components

🧰

### Checkbox

A `forwardRef` component that renders a checkbox input, based on `ComponentProps<'input'>`, `type` is omitted as it is always `checkbox`.

Required props: `id`, `label`

**Styling**

The outer div encapsulating the checkbox and its label will have the `data-basal-checkbox` attribute.

```tsx
import { Checkbox } from "@basal-ui/forms";

<Checkbox id="checkbox" label="Checkbox" name="checkbox" />;
```

### FieldDescription

A component that renders a `div` and allows for a `string` to be passed as the `description` prop.

If the `description` is not passed, the component will not render.

Required props: `id`

**Styling**

The outer div encapsulating the description will have the `data-basal-field-description` attribute.

```tsx
import { FieldDescription } from "@basal-ui/forms";

<FieldDescription
  description="This is a description"
  id="firstName--description"
/>;
```

### FieldError

A component that renders a `div` and allows for a `string` to be passed as the `message` prop.

If the `message` is not passed, the component will not render.

Required props: `id`

**Styling**

The outer div encapsulating the error will have the `data-basal-field-error` attribute.

All error messages will return with `Error: ` prepended to the message.

```tsx
import { FieldError } from "@basal-ui/forms";

<FieldError id="firstName--error" message="First name is required" />;
```

### Fieldset

A component that renders a `fieldset` with a `legend:string` and `children:ReactNode`, with optional parameters for `description:string` and `error:string`.

Based on `ComponentProps<"fieldset">`

If `description` is passed, the [FieldDescription](#fielddescription) component will be rendered, and the `id` from the `Fieldset` component will be utilized to generate the required id for the `FieldDescription` component `id="{fieldDescriptionId}--description"`

If `error` is passed, the [FieldError](#fielderror) component will be rendered, and the `id` from the `Fieldset` component will be utilized to generate the required id for the `FieldError` component `id="{fieldDescriptionId}--error"`

Required props: `id`, `legend`

**Styling**

The `fieldset` html element will have the `data-basal-fieldset` attribute.

```tsx
import { Fieldset, Radio } from "@basal-ui/forms";

<Fieldset id="toppings" legend="Toppings">
  <>
    <Radio
      id="toppings-sausage"
      label="Sausage"
      name="toppings"
      value="sausage"
    />
    <Radio
      id="toppings-peppers"
      label="Peppers"
      name="toppings"
      value="peppers"
    />
  </>
</Fieldset>;
```

### FormField

A `forwardRef` component that handles all the logic for rendering a `Label`, `children like <Input/> <Select/> <Textarea/>`, `FieldDescription`, and `FieldError` component.

Based on `ComponentProps<"div">`

Required props: `label`

> Currently there is only support for one `child` component.

When passing the child like `<Input/>` for example. The `id` of the `<Input/>` is used to generate the `id` for the `Label`, `FieldDescription`, and `FieldError` components.

- `Label` component `id="{inputId}--label"`
- `FieldDescription` component `id="{inputId}--description"`
- `FieldError` component `id="{inputId}--error"`

The child will also receive the following props based on whether the `description` or `error` props are passed to the `FormField` component.

- `aria-describedby="{inputId}--description"`
- `aria-invalid="{error ? true : undefined}"`
- `aria-errormessage="{inputId}--error"`

**Styling**

The outer div encapsulating the form field will have the `data-basal-form-field` attribute.

```tsx
import { FormField, Input } from "@basal-ui/forms";

<FormField description="Please enter your legal First name" label="First name">
  <Input id="firstName" />
</FormField>;
```

### Input

A `forwardRef` component that renders an input, based on `ComponentProps<'input'>`

Required props: `id`

**Styling**

The `input` html element will have the `data-basal-input` attribute.

```tsx
import { Input } from "@basal-ui/forms";

<Input id="firstName" placeholder="First name" />;
```

### Label

A component that renders a `label` and allows for `children:ReactNode` to be passed.

Based on `ComponentProps<"label">`

Required props: `id`

**Styling**

The `label` html element will have the `data-basal-label` attribute.

```tsx
import { Label } from "@basal-ui/forms";

<Label id="firstName--label">First name</Label>;
```

### Radio

A `forwardRef` component that renders a radio input, based on `ComponentProps<'input'>`, `type` is omitted as it is always `radio`.

Required props: `id`, `label`

**Styling**

The outer div encapsulating the radio and its label will have the `data-basal-radio` attribute.

```tsx
<Radio id="sausage" label="Sausage" name="toppings" />
```

### Select

A `forwardRef` component that renders a select input, based on `ComponentProps<'select'>`

This component is a `Generic` component and builds it's type based on the `options` prop.

Required props: `id`, `options`, `labelKey`, `valueKey`

> Note: `labelKey` and `valueKey` are `keyof T` which means they must be a key of the `options` Array object `T[]`.
>
> Example: `options={[{ label: Sausage; value: sausage }]}` would require `labelKey="{label | value}"` and `valueKey="{label | value}"`

**Styling**

The `select` html element will have the `data-basal-select` attribute.

```tsx
import { Select } from "@basal-ui/forms";

<Select
  id="selectExample"
  labelKey="name"
  valueKey="id"
  options={[
    {
      id: 1,
      name: "Option 1",
    },
    {
      id: 2,
      name: "Option 2",
    },
  ]}
/>;
```

### Textarea

A `forwardRef` component that renders a textarea input, based on `ComponentProps<'textarea'>`

Required props: `id`

**Styling**

The `textarea` html element will have the `data-basal-textarea` attribute.

```tsx
import { Textarea } from "@basal-ui/forms";

<Textarea id="comments" placeholder="Please leave your comments here" />;
```

## Styling

🫦

The `@basal-ui/forms` package is built using `scss`, and offers the compiled css in the `dist` directory.

We leverage both `scss variables` and `css variables` to allow for the most flexibility when it comes to styling.

The `scss variables` are used to generate the `css variables` and are used as the default values for the `css variables`.

The `css variables` are used to style the components.

### Recommended approach to importing styles

1. install the `@basal-ui/forms` package
2. create a `scss` file in your project
3. It's contents should be as follows:

```scss
@import "@basal-ui/forms/src/styles/_variables.scss";

// Override the variables here
// $input-padding: 10px 6px;

@import "@basal-ui/forms/src/styles/root";

// If you want a different reset than the one provided by the package you can import your own here, and remove the import below.
@import "@basal-ui/forms/src/styles/reset";

@import "@basal-ui/forms/src/styles/styles";
```
