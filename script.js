const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});document.getElementById('year').textContent=new Date().getFullYear();if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
const slider = document.getElementById("productSlider");

const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

if (slider && prevBtn && nextBtn) {

  const getScrollAmount = () => {
    const card = slider.querySelector(".product-card");
    if (!card) return 0;

    const gap = parseFloat(getComputedStyle(slider).gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    prevBtn.disabled = slider.scrollLeft <= 1;

    nextBtn.disabled =
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth - 1;
  };

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth"
    });
  });

  slider.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);

  updateButtons();
}