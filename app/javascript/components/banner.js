import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Hi, I'm Gabrielle, <br> web developer."],
    typeSpeed: 50,
    loop: false
  });
}

export { loadDynamicBannerText };
