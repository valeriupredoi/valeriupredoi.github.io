---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: header_unsplash_12.jpg
widget1:
  title: "Objective"
  url: 'http://valeriupredoi.github.io/info/'
  image: widget-1-302x182.jpg
  text: 'ISENES3 has many cool objectives, especially <em>sciencey shtuff</em> that makes you smarter.'
widget2:
  title: "Description of Work"
  url: 'http://valeriupredoi.github.io/info/'
  image: widget-1-302x182.jpg
  text: '<em>ISENES3</em> does very cool sciencey shtuffs.<br/>1. Sciencey Shtuff 1<br/>2. Sciencey Shtuff 2<br/>3. Sciencey Shtuff 3<br/>4. Sciencey Shtuff 4<br/>5. Sciencey Shtuff 5'
  video: '<a href="#" data-reveal-id="videoModal"><img src="https://valeriupredoi.github.io/images/porsche962Cvideo.jpg" width="302" height="182" alt=""/></a>'
widget3:
  title: "Partners"
  url: 'http://valeriupredoi.github.io/info/'
  image: widget-1-302x182.jpg
  text: '<em>ISENES3</em> is a very cool EU collaboration. Have a look at our <a href="https://is.enes.org/project/partners">ISENES3 Partners List</a> and call us at Twitter <a href="https://twitter.com/search?q=%23ISENES3">@ISENES3</a>.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
callforaction:
  url: https://tinyletter.com/feeling-responsive
  text: Inform me about new updates and features ›
  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/BHMqckkh52g" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
