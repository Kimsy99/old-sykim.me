---
title: "SASS Talk on XShare #2"
date: "2020-12-18"
---

# Workshop content

# SASS syntax

Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.

[data:image/png;base64,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](data:image/png;base64,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)

**Sass works** by writing your styles in . **scss** (or . **sass**)
files, which will then get compiled into a regular CSS file. The newly
compiled CSS file is what gets loaded to your browser to style your web
application.

### What is Sass

### Why we use Sass?

Although CSS is good, but when stylesheets are getting larger, more complex, it gets harder to maintain. → eg nesting

Thus Sass provide features such as

- variables
- nesting
- mixins
- inheritance

### How react compile Sass code?

React will translate it into CSS code

```jsx
$ npm install node-sass --save

OR

$ yarn add node-sass
```

### How to create a new sass file?

create file → `name.sass` or `name.scss`

### Difference between Scss and Sass

SASS is used when we need a original syntax, code syntax is not required for SCSS. SASS follows strict indentation, SCSS has no strict indentation. SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use of semicolons and braces are mandatory.

[https://www.geeksforgeeks.org/what-is-the-difference-between-scss-and-sass/#:~:text=SASS is used when we,SAAS file extension is](https://www.geeksforgeeks.org/what-is-the-difference-between-scss-and-sass/#:~:text=SASS%20is%20used%20when%20we,SAAS%20file%20extension%20is%20) .

## Syntax and benefits of Scss

- Variable

  - Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the \$ symbol to make something a variable. Here's an example:

  ```scss
  $font-stack: Helvetica, sans-serif;
  $primary-color: #333;

  body {
    font: 100% $font-stack;
    color: $primary-color;
  }
  ```

  Then it will translate to css

  ```css
  body {
    font: 100% Helvetica, sans-serif;
    color: #333;
  }
  ```

- Nesting

  Since we have hierarchy is html → such as

  ```jsx
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
  ```

  But in css it would be hard for us because we would need something like this → which are hard to see the hierarchy and cause confusion → generally bad practice

  ```css
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav li {
    display: inline-block;
  }
  nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
  ```

  - we could see that ul, li and a are selectors that are nested inside the nav selector.

  With scss we could actually see the hierachy structure better:

  ```scss
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: inline-block;
    }

    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }
  ```

- Partials

  You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is a Sass file named with a leading underscore. You might name it something like \_partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @use rule.

  ![Workshop%20content%2079b42f7104e64ab493f682d7bfb90413/Untitled.png](Workshop%20content%2079b42f7104e64ab493f682d7bfb90413/Untitled.png)

  Depending on the way you want to structure your Sass project, a partial can contain all variables used in your project, functions or mixins or it might be for specific pages or components of your pages.

  [https://dev.to/sarah_chima/using-sass-partials-7mh#:~:text=A partial is simply an,not be compiled to CSS](https://dev.to/sarah_chima/using-sass-partials-7mh#:~:text=A%20partial%20is%20simply%20an,not%20be%20compiled%20to%20CSS).

- Modules

  You don't have to write all your Sass in a single file. You can split it up however you want with the @use rule. This rule loads another Sass file as a module, which means you can refer to its variables, mixins, and functions in your Sass file with a namespace based on the filename. Using a file will also include the CSS it generates in your compiled output!

  Basically we could share variables/function/mixins with different scss files using "@use" keyword

  ```css
  //CSS
  body {
    font: 100% Helvetica, sans-serif;
    color: #333;
  }

  .inverse {
    background-color: #333;
    color: white;
  }
  ```

  ```scss
  SCSS

  // _base.scss
  $font-stack:    Helvetica, sans-serif;
  $primary-color: #333;

  body {
    font: 100% $font-stack;
    color: $primary-color;
  }

  // styles.scss
  @use 'base';

  .inverse {
    background-color: base.$primary-color;
    color: white;
  }
  ```

- Mixins

  Basically it is like a function that scss and just prepare mixin then when we wanna use it we just call it and provide properties.

  ```scss
  @mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
  }
  .box {
    @include transform(rotate(30deg));
  }
  ```

- Extend and inheritance

  This is one of the most useful features of Sass. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY (Do not repeat your self). In our example we're going to create a simple series of messaging for errors, warnings and successes using another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a special type of class that only prints when it is extended, and can help keep your compiled CSS neat and clean.

  ```scss
  /* This CSS will print because %message-shared is extended. */
  %message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
  }

  // This CSS won't print because %equal-heights is never extended.
  %equal-heights {
    display: flex;
    flex-wrap: wrap;
  }

  .message {
    @extend %message-shared;
  }

  .success {
    @extend %message-shared;
    border-color: green;
  }

  .error {
    @extend %message-shared;
    border-color: red;
  }

  .warning {
    @extend %message-shared;
    border-color: yellow;
  }
  ```

- Operator

  Sometimes we need to do maths in styling → thus Sass have handful of standard math operators like +, -, _, / and _

  ```scss
  .container {
    width: 100%;
  }

  article[role="main"] {
    float: left;
    width: 600px / 960px * 100%;
  }

  aside[role="complementary"] {
    float: right;
    width: 300px / 960px * 100%;
  }
  ```

[https://codepen.io/Kimsy/pen/MWjoeJK](https://codepen.io/Kimsy/pen/MWjoeJK)

### Loops

```
$squareCount: 4
@for $i from 1 through $squareCount
  #square-#{$i}
   background-color: red
   width: 50px * $i
   height: 120px / $i
```

# Main resource

[Sass Basics](https://sass-lang.com/guide#topic-6)
