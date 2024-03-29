# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github](https://github.com/Nipaaaa1/base-apparel)
- Live Site URL: [Netlify](https://creative-zuccutto-73e2dc.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework


### What I learned

Responsive Image is **HARD**. I spend a lot of time figuring how to change image base on viewport, I tried `<picture>` and `background-image` method but didn't work as I expected. I even tried package called `react-responsive-image` but still won't work. It didn't align properly. So I'm just using 2 separate `<img>` tag and just made one of them hidden in mobile or desktop viewport. Like this:

```html
<img className="hidden md:block ..."  />
<img className="block md:hidden ..."  />
```

### Continued development

I want to learn how to handle responsive image properly, It didn't look quite nice to me. I also want to learn about form validation in *React* since I'll be using it from now on in my challenge.

### Useful resources

- [Email Validation in REGEX](https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/) - I can't write email validation without this