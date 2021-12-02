---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: page-fullwidth
header:
    title: ISENES3 Website
    background-color: "#186F4D;"
    caption: This is a caption for the header image with link
    caption_url: https://unsplash.com/
    image_fullwidth: "widget-1-302x182.jpg"
widget1:
  title: "Objectives"
  url: 'https://valeriupredoi.github.io/objectives/'
  image: widget-1-302x182.jpg
  text: 'Widget about <em>sciencey shtuff</em> that makes you smarter.'
widget2:
  title: "Description of Work"
  url: 'https://valeriupredoi.github.io/description-of-work/'
  image: widget-1-302x182.jpg
  text: 'Widget with <em>ISENES3</em> embedded video.<br/>1. Sciencey Shtuff 1<br/>2. Sciencey Shtuff 2'
  video: '<a href="#" data-reveal-id="videoModal"><img src="https://valeriupredoi.github.io/images/porsche962Cvideo.jpg" width="302" height="182" alt=""/></a>'
widget3:
  title: "Partners"
  url: 'https://valeriupredoi.github.io/partners/'
  image: widget-1-302x182.jpg
  text: 'Widget with <em>ISENES3</em> link and Twitter. Have a look at our <a href="https://is.enes.org/project/partners">ISENES3 Partners List</a> and call us at Twitter <a href="https://twitter.com/search?q=%23ISENES3">@ISENES3</a>.'
permalink: /index.html
homepage: true
---

## ISENES3: the best thing after toast and beans

- Main settings in `_config.yml`
- Main tabs above listed in: `_data/navigation.yml`
- Front page (this): edit file: `pages/pages-root-folder/index.md`
- Social media settings: `_data/socialmedia.yml`
- Footer for Contact, legal etc in: `_data/services.yml`
- Aknowledgements footer tab: `_data/network.yml`
- Edit pages in `pages/*`

## A nice guide to Markdown

Fanny, Sophie, you can find a very easy guide to Mardown syntax [here](https://www.markdownguide.org/basic-syntax/).
Also, here is a French flag, just to see how an image can be inserted:

![Frenchie flag](images/france-flag.jpg)

## Stuff about ISENES3 on front page

You can list things like this:

- something
- something **something**

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/BHMqckkh52g" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
