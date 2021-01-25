---
title: 'My Remote Bootcamp Experience: What I learnt helping others learn CSS and HTML'
description: 'In my second week of bootcamp we focused on HTML and CSS'
date: 25 January 2021
---

# My Bootcamp Experience: What I learnt helping others learn CSS and HTML

In my second week of bootcamp we focused on HTML and CSS. After a solid day or two of lectures we were tasked with recreating a site. This forced us to focus on our ‘google fu’ and problem solving skills. Being someone with CSS and HTML experience, I was able to complete the assignment quickly, although not as quickly as I might have liked (more on that later). This left the rest of the week available to support my fellow students and for me to work on some personal projects. Here is what I learned.

## HTML is Hard To Read

I found that a lot of my fellow students' problems boiled down to them not correctly traversing the _dom_. When deciding what selectors to use to target an element or identifying suitable elements to use as flexbox containers / items, I would observe them skip levels of the _dom_ in their HTML file or not expand the relevant node in the browser dev tools. This surprised me, the _dom_ is like a file structure after all and everyone has experience navigating their machine’s file systems in explorer or finder yet this didn’t seem to translate when traversing the dom.

This made me realise just how much I forgot how foreign HTML markup looks to the uninitiated. A jumble of words, colours, and symbols with long lines that overflow out of the reader's sight, often starting from the middle of the page.

This got me thinking about selective attention and how much my peers were really seeing? With the brain receiving so much information and with no framework of how to filter and assign importance, it may be the case that the student totally misses the lone _ul_ tag because the brain has been looking for tags with classes.

As anyone in web dev knows, this is short lived with the idea that HTML is complicated becoming an idea that is just as foregin. It does make me wonder though - could tools such as the browser dev tools be redesigned to help combat this problem? Perhaps a "beginner mode"? Prettier makes this less of a problem in IDEs, but is there more that can be done? Or will this remain a right of passage every beginner must go through? Even through my limited code journey, There have been multiple moments of coming across code or a concept that my brain just can’t wrap its head around instantly. This can be super frustrating and even demoralizing, but the payoff from tackling the problem successfully is ever so sweet, making next time just a little easier.

## The concept of space ownership

Helping others can really cement concepts in your own head. One of these concepts for me this week was space ownership. This came to me as I was helping one of my fellow students remove the bullets in their unordered lists. After learning of the `list-style: none;` declaration, they would go on to add `padding: 0;` or `margin: 0;` to the same rule. To be fair, it makes perfect sense, why wouldn't these innocent beginners, not yet weary from all of CSS's many intricacies, think that it would not work? After all It worked when they wanted to bring a `<p>` tag to the right to create a margin. I explained that the parent, the `<ul>`, owned that space and to remove it we needed to target the `<ul>` element.

## I don't really know CSS

So far, my experience of working with CSS has always been on my own projects, where I have full control over the CSS and HTML. Sometimes, I have used frameworks like [Bootstrap](https://getbootstrap.com), [Bulma](https://bulma.io/) and [Tailwind](https://tailwindcss.com/). In [React ](https://reactjs.org/)I write CSS per component using styled-components or emotion. I can usually achieve the desired effect with a couple of clarifying googles. However, this week has taught me that I'm at a lower level than I thought I was. It's often the case that you don't know what you don't know and this has been the perfect example.

In the main assignment set for the week we were tasked to reproduce a site as close as possible to the original. This was given to us in pdf format along with the HTML file pre-written. It was explicitly stated that we could not edit the HTML file.

This single constraint gave me a lot more problems than I had anticipated. Not being able to add a container div, or add a class to an element forced me to come up with creative solutions to problems I have never had to solve so far.

When helping debugging student's stylesheets, I often struggled myself to get to the bottom of the issue quickly as they had used functionality I had not come across before, often a result of some creative googling.

All this is to say, that just because I can whip up a decent looking brochure page to spec, doesn't mean I don't still have a lot to learn.

## “Some people just don't get CSS” is unhelpful

It's a sentiment I've seen over and over again in reddit discussions, dev articles and even on our bootcamp and I really don't think it's helpful. To someone who has taken the time "to get it" this seems like a cop out. Perhaps I am one of the privileged ones whose brain 'works that way”, but I don't think so.

In my possibly naive opinion, I think CSS is a collection of rules that anyone is capable of understanding and mastering.

Having professionals in the field saying 'that their brain doesn't work that way' instead of 'its not something I have put the time in to understand' gives permission to any beginner to write off a whole technology far too early.

I wonder if this originates from the earlier days of the web. My first experience with web dev was [tables](https://thehistoryoftheweb.com/tables-layout-absurd/), [floats](https://css-tricks.com/all-about-floats/), and [GeoCities](https://en.wikipedia.org/wiki/Yahoo!_GeoCities) sites in the early 2000's. CSS was pretty clunky and built more with print media in mind. I appreciate where this mindset has come from although I doubt it was really true, even then.
