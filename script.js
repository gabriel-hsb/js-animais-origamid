import scrollToSection from "./modules/scroll-to-section/scroll-to-section.js";
scrollToSection();

import faqAccordions from "./modules/accordion-list/accordion-list.js";
faqAccordions();

import animateSectionEntrance from "./modules/section-entrance/animate-section-entrance.js";
animateSectionEntrance();

import animalsDescription from "./modules/animals-description/animals-description.js";
animalsDescription();

import modal from "./modules/modal/modal.js";
modal();

import tooltip from "./modules/tooltip/tooltip.js";
tooltip();

import dropdownMenu from "./modules/dropdown-menu/dropdown-menu.js";
dropdownMenu();

import burguerMenu from "./modules/burguer-menu/burguer-menu.js";
burguerMenu();

import animalNumbers from "./modules/animal-numbers/animal-numbers.js";
animalNumbers();

import dateHourWorking from "./modules/date-hour-working/date-hour-working.js";
dateHourWorking();

import scrollToTop from "./modules/scroll-to-top/scroll-to-top.js";
scrollToTop();

import getBitcoinPrice from "./modules/bitcoin-price-fetch/bitcoin-price-fetch.js";
getBitcoinPrice();

import SlideNav from "./modules/slide-photos/slide.js";
const slide = new SlideNav(".slide", ".slide-container");
slide.init();
slide.addControl(".custom-controls");
