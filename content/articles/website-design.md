---
title: Website Design
description: 'Developing a website is "easy"!'
url: "./blob/github-website.png"
alt: "blanke-tech on Github "
published: "2020-10-13T19:00:00Z"
tags: ["web", "dev", "design", "hosting"]
---

Today, there exists a large variety of tools, frameworks and libraries for developing a website. You can use [Squarespace](https://www.squarespace.com/), [Wiz](https://www.wix.com/), [WordPress](https://wordpress.com/) or another website builder if you want to develop a site quickly. But then you are constrained by the builder's features and you become an expert in using the site rather than in how websites are built. You could build your website from scratch using HTML5, CSS3, JavaScript and libraries such as [Bootstrap](https://getbootstrap.com/) and [jQuery](https://jquery.com/) - but that often requires a lot of work to build something you'll be happy with. So what then?

In short, it depends on what you want to build and the scrope of your project. The reason why I am writing this article is both to document the history and current development of my website, but also to offer insights into how someone else might go about developing a site such as this one. 

## History
Buiding a website from scratch can take a lot of time for someone who have never done it before. I should know, I've spent a lot of time developing what used to be [blanke.one](https://github.com/andSubmarine/Blanke.one) from scratch. And that was even with the help of a responsive toolkit such as [Bootstrap (v3.4)](https://getbootstrap.com/docs/3.4/)! But it was also restricted because of my choice of hosting provider and forced the site to be stateful even though it didn't have to be! Since everything was developed from scratch (with the help of Bootstrap), there were also a lot of issues both in terms of web features and responsiveness. I even spent more time than I'm willing to admit once trying to upgrade from Bootstrap v3.4 to v4 when it started feeling limiting. The site itself was hosted by [One.com](https://www.one.com/en/) on a [Apache Server](https://httpd.apache.org/) which also provided the opportunity to use PHP scripts on the site.

After a while, I decided to take a step back from developing my website entirely from scratch. Why should it be so complicated? So I chose to give the control of my website to a Content Mangement System (CMS) - WordPress - and to host the site myself using a [DigitalOcean](https://www.digitalocean.com/) Droplet. The idea was that I could spent most of my time writing posts and only customize the theme once! Easy, right? Except I wasn't satisfied with the theming and ended up spending a lot of time trying to customize the site. So only a few posts ever went up before the website was seemingly abandoned due to other projects taking priority. 

Therefore, I decided to redevelop everything from scratch once more. But instead of developing everything as I once did, I decided to leverage the power of web frameworks such as [Vue.js](https://vuejs.org/) & [Nuxt.js](https://nuxtjs.org/) to develop a beautiful, customizable site!

## Getting Started
So, what tools and frameworks would I use for this project? Through my work I've found the ease of working with [Vue.js](https://vuejs.org/) and in particular [Nuxt.js](https://nuxtjs.org/) to be incredibly easy and understandable when developing in TypeScript. The power of Nuxt.js really comes to show when developing a static Single-Page Application (SPA). It is also very easy to get started using Node.js to simply type `npx create-nuxt-app` and find you webapp ready to go after a few option choices!

In fact, adding a few packages such as [BootstrapVue](https://bootstrap-vue.org/), [nuxt/content](https://content.nuxtjs.org/) and [@nuxtjs/fontawesome](https://www.npmjs.com/package/@nuxtjs/fontawesome) made sure that I both had a powerful CSS framework, a git-based headless CMS and a huge variety of icons all built into the site! Since Nuxt is based on Vue libraries such as `vue-router` and powerful development tools such as `webpack` then I neither have to worry about routing or compatibility since Nuxt takes care of that! 

## Hosting
But what about hosting? Initially, I thought about creating and replacing the Droplet I had hosted on DigitalOcean, but then I discovered that GitHub offers hosting of static websites through [GitHub Pages](https://pages.github.com/) and that Nuxt offers [static generation](https://nuxtjs.org/blog/going-full-static/) of my website. Everything seemed to fit together nicely! 

However, deploying the site would quickly become annoying. How could that be resolved? Well, what about building a deployment pipeline using [Travis CI](https://travis-ci.org/)? Now my website can be deployed with a **single push to the master branch** as seen in the image below. Since all articles (such as this one) is written in Markdown (possible due to Nuxt Content) then I can easily create, edit or delete articles from the site - even directly from GitHub's editor!

<img alt="Deployment Pipeline" src="./blob/deployment-pipeline.png" class="img-fluid">

## Design
Full disclaimer - I am by no means a designer - but *even a developer needs to have some idea about design*. I think that all design  begin with a purpose. For this website that purpose was that I wanted a place where I can describe myself and my work. Therefore, the design should focus on these two aspects. This can be seen on the homepage which is divided into two sections: an introductionary image and about section and a list of projects & articles. 

I would like to note that when building a website it might be tempting to dive into the code at once. But it is actually a good idea to start by using a wireframe or prototyping tool such as Adobe XD to play around with layout, colors, fonts and more. 

One of my main priorities with website development have been making a site responsive, i.e. looking great on different viewports. That's not an easy task. Luckily, Bootstrap is built for designing and customizing responsive mobile-first sites. 

Bootstrap uses a twelve-column grid-based system. What that means is that the width of the screen is divided into twelve sections. So if you want some part of your site to use half of the screen width then you'd use a `col-6` and `col-12` if you want to use the entire screen width. But the width is quite different from a mobile screen to a desktop screen - what then? Then we can use *responsive breakpoints* to use different designs based on the space available.

Designing mobile-first becomes relevant here since it means that we initially design the site as if we're only developing the site for a phone. Then we try to expand the screen width and change elements of the design in order to use the space the most effectively. An example of this is the so-called `ArticleCard` used on the homepage for articles such as this one. These were designed to take up the entire screen width, i.e. `col-12`. However, when scaling up to a larger width then the design started looking weird. Thus, the element first changes into a `col-6` for tablet-sized screens and then further more to a `col-4` on larger desktop screens. 

Finally, I would like to remark that I usually use [Adobe Color](https://color.adobe.com/create/color-wheel) to generate a color palette. In the case of this website, I decided to built a color palette from an image. More specifically, a collage I once made for my previous iteration of my website. The resulting color palette can be seen below. So if you ask me *"Why did you choose that particular color of green?"* then I'll simply answer *"Because I once had a raincoat in that color."*. It might seem silly, but the colors do seem to fit quite nicely.

<img src="./blob/color-pallete.png" alt="Color palette" class="img-fluid" />


## Final thoughts
I hope that whoever reads this found it somewhat interesting. As with much other software projects, there have been multiple development iterations that resulted in a few prototypes. Those mentioned in the history are only those that actually were released due to some level of completion. That also means that this site is a product of an iteration and might change and evolve over time. 

Perhaps this emoji (<random-icon :icons="['🙈','🙊','🙉']"></random-icon>) might be something different next time you visit? 

See the code for the website on GitHub here: https://github.com/andSubmarine/andsubmarine.github.io