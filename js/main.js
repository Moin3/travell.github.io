/**======= SHOW MENU =======**/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close');

/**======= MENU SHOW =======**/
/**======= Variable if constant exists =======**/
if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
  });
}

if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  });
}
/**======= REMOVE MENU MOBILE =======**/

const navLink=document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu=document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction));

/**======= Change Background HEADER =======**/
function scrollHeader(){
  const header=document.getElementById('header');
  if(this.scrollY>=100){
    header.classList.add('scroll-header');
  }else{
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll',scrollHeader);

/**======= SWIPER JS =======**/
var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
        },
        loop:true,
        spaceBetween:40,
      });


/**======= SWIPER Discover =======**/


/**======= VIDEO =======**/
const videoFile=document.getElementById('video-file'),
      videoButton=document.getElementById('video-button'),
      videoIcon=document.getElementById('video-icon');
  
      
function playPause(){
  if(videoFile.paused){
  
  //video play
  videoFile.play();
  
  videoIcon.classList.remove('uil-play');
  videoIcon.classList.add('uil-pause');
  
}else{
  //video pause
  videoFile.pause();
  
  videoIcon.classList.add('uil-play');
  videoIcon.classList.remove('uil-pause');
}
}

videoButton.addEventListener('click',playPause);

//video end and icon Change
function finalVideo(){
  videoIcon.classList.remove('uil-pause');
  videoIcon.classList.add('uil-play');
}
videoFile.addEventListener('ended',finalVideo);

//Scroll up function

function scrollUp(){
  const scroll=document.getElementById('scroll-up');
  
  if(this.scrollY>=300){
    scroll.classList.add('show__scroll');
  }else{
    scroll.classList.remove('show__scroll');
  }
}
window.addEventListener('scroll',scrollUp)

//Dark/Theme

const themeButton=document.getElementById('theme-button');

themeButton.addEventListener('click',()=>{
  const changeThemeIcon=document.getElementById('theme-button');
  const themeText=document.querySelector('.change-theme-name');
  
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')){
    changeThemeIcon.classList.remove('uil-moon');
    changeThemeIcon.classList.add('uil-sun');
    themeText.innerHTML='Light Mood';
  }else{
    changeThemeIcon.classList.add('uil-moon');
    changeThemeIcon.classList.remove('uil-sun');
    themeText.innerHTML='Dark Mood';
  }
});

//AOS Init

AOS.init({
  duration:1000,
  offset:120,
  mirror:true,
})


  