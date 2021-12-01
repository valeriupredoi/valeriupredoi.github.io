---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
    title: ISENES3 Website
    background-color: "#186F4D;"
    caption: This is a caption for the header image with link
    caption_url: https://unsplash.com/
    image_fullwidth: "widget-1-302x182.jpg"
widget1:
  title: "Stuff 1"
  url: 'http://valeriupredoi.github.io/info/'
  image: widget-1-302x182.jpg
  text: 'ISENES3 has many cool objectives, especially <em>sciencey shtuff</em> that makes you smarter.'
widget2:
  title: "Stuff 2"
  url: 'http://valeriupredoi.github.io/info/'
  image: widget-1-302x182.jpg
  text: '<em>ISENES3</em> does very cool sciencey shtuffs.<br/>1. Sciencey Shtuff 1<br/>2. Sciencey Shtuff 2<br/>3. Sciencey Shtuff 3<br/>4. Sciencey Shtuff 4<br/>5. Sciencey Shtuff 5'
  video: '<a href="#" data-reveal-id="videoModal"><img src="https://valeriupredoi.github.io/images/porsche962Cvideo.jpg" width="302" height="182" alt=""/></a>'
widget3:
  title: "Stuff 3"
  url: 'http://valeriupredoi.github.io/info/'
  image: widget-1-302x182.jpg
  text: '<em>ISENES3</em> is a very cool EU collaboration. Have a look at our <a href="https://is.enes.org/project/partners">ISENES3 Partners List</a> and call us at Twitter <a href="https://twitter.com/search?q=%23ISENES3">@ISENES3</a>.'
permalink: /index.html
homepage: true
---

## Stuff about ISENES3 on front page

Edit: `pages/pages-root-folder/index.md`

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/BHMqckkh52g" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
