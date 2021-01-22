---
title: "SASS Talk on XShare #2"
date: "2020-12-18"
categories: "Web"
---

# SASS syntax

Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.

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

  ```css {numberLines}
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

  ```css {numberLines}
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

  ```scss {numberLines}
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

  ```css {numberLines}
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

  ```scss {numberLines}
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

  ```scss {numberLines}
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

  ```scss {numberLines}
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

  ```scss {numberLines}
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

```{numberLines}
$squareCount: 4
@for $i from 1 through $squareCount
  #square-#{$i}
   background-color: red
   width: 50px * $i
   height: 120px / $i
```

# Main resource

[Sass Basics](https://sass-lang.com/guide#topic-6)
