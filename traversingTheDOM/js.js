/* Get the header element*/
const getHeader = document.getElementsByTagName("header")
console.log(getHeader)
// /*Get all the section elements
const getSection = document.getElementsByTagName("section")
console.log(getSection)
// /* Get the section element with class="current"
const getCurrent = document.getElementsByClassName("current")
console.log(getCurrent)
// /* Get the section that comes after the current section
const currentSection = document.querySelector("section.current")
const nextSection = currentSection.nextElementSibling;
console.log(nextSection);
// /* Get the h2 node from the section before the 'current' section
const prevH2Node = currentSection.previousElementSibling.children;
// const prevH2Node = prevSection.children
// console.log(prevSection)
console.log(prevH2Node)
// /* Get the div that contains the section that has an h2 with a class of 'highlight'
const getHighlight = document.querySelector("h2.highlight")
const getDivHighlight = getHighlight.parentElement.parentElement;
console.log(getDivHighlight)
// const getHighlight = document.getElementsByClassName("highlight")
// /* Get all the sections that contain an H2 (using a single statement);
const getH2Sections = document.querySelectorAll('section:has(h2)')
console.log(getH2Sections)
