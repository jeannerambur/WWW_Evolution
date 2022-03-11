const wrapper = document.querySelector('.wrapper');
const wrapper2 = document.querySelector('.wrapper2');

window.addEventListener('scroll', () => {

  if(window.scrollY > wrapper.clientHeight) {
    wrapper2.classList.add("active");
    }
  else {
    wrapper2.classList.remove("active");
  }
})
