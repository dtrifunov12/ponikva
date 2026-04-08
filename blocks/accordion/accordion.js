function decorateAccordion(el) {
  const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
  titles.forEach((tit) => {
    // Add a class to the title container
    tit.classList.add('item-title');
    // Add class to next sibling
    tit.nextElementSibling.classList.add('item-content');

    tit.addEventListener('click', () => {
      tit.classList.toggle('open');
    });
  });
}

const els = document.querySelectorAll('.accordion');
els.forEach((el) => decorateAccordion(el));
