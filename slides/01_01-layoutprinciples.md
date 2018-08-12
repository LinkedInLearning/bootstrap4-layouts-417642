<!-- .slide: data-state="title" -->

# Bootstrap 4

Layout Principles

> > Author Notes:

Before we get started there's a couple of things we need to go over. Althought this course walks you through building a series of layouts, it's not meant to be a comprehensive description of each of the techniques. If you want to learn about each bootstrap component and some of the options in detail, then checkout one of my other courses...bootstrap 4 essential training.

I'm assuming you've built other sites before and are familiar with the basic principles of HTML and CSS as well as some javascript and jQuery

I cover a very specific approach to how I build single page websites, so let's go over some of those concepts.

---

## Tags

- `<article>` standalone
- `<section>` pieces
- `<div>` for layout classes

> > Author Notes:

- One of the things that I do when creating websites is to use HTML tags in a particular way, so let's talk about that.

- For exmaple I like to use the article tag for standalone elements, which means items that can stand on their own, this is sort of an article of clothing in an outfit. In my single page layouts, each 'layout' is in a separate article.

- Whenever I need to place a series of items inside other elements, I usually use section tags.

- Divs are used when I'm creating adding code that is strictly for layout, so you'll see a lot of bootstrap grid classes in those sections.

---

## Classes &amp; Ids

- `Id` first
- Custom classes next
- Bootstrap classes last

> > Author Notes:

- IDs are required for some bootstrap components and I also use them to create things that I can target with javascript. They identify each individual "page" in a single page layout.

- I always place custom class names first and I use classes in a layout whenever I want to create an element that I'm going to want to style in CSS, so you'll see names for classes that start with keywords like title, layout, image and others.

- If I'm using bootstrap classes, then I place them after my own custom classes. This makes things easier to find in the long run.

---

<!-- .slide: data-state="title" -->

## Accessing Files

> > Author Notes:

All of the files for this course are freely available for all users on this github repo.

In GitHub, you'll see that the project is organized into branches. Each branch corresponds to a video in the course. They are named according to the video they correspond to. If you see a branch that starts with a name like 01_03, that means that the branch corresponds to the FIRST CHAPTER and refers to the THIRD video in that chapter. Also, if you see a B at the end of the name, those are how the files looked like at the beginning of the video. And if you see an E at the end of the name, that's how the files looked like at the end of the video.

In this project, we'll be working with three different files. The HTML document, this CSS file and the JavaScript document.

You can download the finished version of the website by clicking on this button on Github. The repo includes a server you can run for live reloads. If you're an advanced user, you can even download all of the repo brances at once. I've recorded a special course that shows you the basics of Github and how to download multiple branches from a course.
