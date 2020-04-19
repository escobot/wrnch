# wrnch
wrnch coding challenge

## Ground rules:
You may use any programming language you deem suitable for web development, and any
frontend/backend web development framework available for that language. Examples of such
frameworks are: Ruby On Rails, Django (Python), Node.js, etc.
In addition, you will most likely need jQuery UI library and a javascript library that enables creation of
sortable lists and drag-and-drop UI. An example of such a library can be found [here](https://github.com/lukasoppermann/html5sortable).

## Problem Statement:
You are required to design a web app with single web page (route at the root path), with following
requirements.
When loaded from within a web browser, this web page displays 3 images side by side:

| E  | O | P |

You may subsitute these with images of your choice.
Your web page must allow a visitor to reorder these images through a drag-and-drop interface. This
is to say, if a visitor click on the eggplant and drags it to the right of the orange but to the left of the
pear, your web page must dynamically update to show the images in the following order:

| O | E | P |

The most recent order of the images must persist. That is to say, if the visitor navigates away from
your web page and comes back later, they must find the 3 images still in the same order as right
before they left. The same must hold if the visitor decides to close their browser, clear browser
cache, or reboot their computer.
You may assume that there will ever be a single visitor, i.e. you are not required to implement a user
management system or to track multiple different users.

## Deliverables:
Before the end of your three hours, you must email us back:
- [ ] The source code for your solution.
- [ ] You must host your result on the web (e.g. on Heroku), and send us a link to the site. You may take the site down later.
