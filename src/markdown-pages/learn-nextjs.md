---
title: "Learning Next.js"
date: "2021-3-16"
categories: "Web"
---

## How it get started?
I had been working with React.js for some time (for project & work), and also experience in using Gatsby (this site). 
Recently, I saw lots of tweets of people talking about Next.js and lots of them prefer Next.js than normal react page for lots of reason (I will be talking about it later). Therefore, today i started to get into the world of Next.js and explore what is special about it and also what's good about SSR (Server Side Rendering).

## Next.js vs Traditional React App (or CRA - Create React App)
One of the main difference between them is React.js Apps are Client Side Rendered while Next.js is Server Side Rendered

### Client Side Rendering
- Browser only get the index.html page then fetch the JS files containing react code (pages, components, index.js etc) to render content to the page => then we can start to interact.

#### Problem with CSR
- Bad SEO - as browser don't know the content before loading the JS file.
- Slower to first contentful paint (first load might take long time)

### Server Side Rendering
- JS to html code are rendered in the server -> then browser get the fully rendered HTML and display to the users.
- Good for SEO

## Not only SSR, Next.js have other rendering strategy
1. SSR - Server side rendering (we had mentioned above)
    - generate each page at request time (by server)
    - using getServerSideProps() to the component
2. SSG - Static Site Generation
    - render all page at built time (like gatsby)
    - using getStaticProps() to pass props to the component
    - great for blogs
3. ISR - Increamental Static Regeneration
    - Regenerate single page in the background - using time period


## Conclusion
This is basically the greatness about Next.js, I am going to learn and built a simple project using Next.js as it is pretty cool, and also it have lots of other features such as image optimization, typescript support, file system routing (which is what I love on Gatsby as well) and more

Do checkout Next.js more [here](https://nextjs.org/)
<!-- ## Next.sj folder structure
1. Page directory -> folder structure in it reflects to the URL of the project
    - pages/cars/[id].js => xxx.com/cars/:id
    - pages/cars => xxx.com/cars
    - pages/index.js -> xxx.com

The folder structure -> reflects to the  -->

