# A tutorial on Next.js (TraversyMedia)

## Summary

Nothing profound here - I wanted to learn how to do React SSR, so here I am.

## Goals

- Learn Next.js development flow from initialization to deployment

## Todos

1. Initialization and Setup

   - Start by initializing npm (done)

   - Make a gitignore file, so we don't upload our modules (or sensitive material in the future) (done)

   - Install Next.js, React, and React-DOM (done)

   - Assign Next as run scripts for dev, build, and start in package.json (done)

   - Make a folder called 'pages'. This is, funny enough, where all our pages of our website will go. This is how Next.js does routing. (done)

   - Make a file inside the pages direcory called index.js, which not suprising. By default, files named 'index' are run when directories are 'evoked' (right term?) (done)

2. First Steps

   - Make a "Hello world" (or something) as innerText to a div in our index.js file, and check it out by running 'npm run dev' (done)

   - Make another page called 'about'. Make it the same as our index, but with different text. Navigate to that page by typing the file name in the address. (done)

   - Create a link using Next's library, have links that bring you from 'index' to 'about', and vice versa

   - Create a very simple navbar component in a new components directory that has these links. Import it to the index page. (done)

   - Apply styling to the navbar by making a style tag in the jsx. (done)
