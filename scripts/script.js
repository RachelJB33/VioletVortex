// Navbar
const  menu = document.querySelector('.hamburger-menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
  navbar.classList.toggle('change')
  menu.classList.toggle('change')
})
// End of Navbar

// Hamburger Menu Movement
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
  document.querySelector(".sidebar").classList.toggle("change");
});
// End of Hamburger Menu Movement

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    btn.className = 'far fa-pause-circle'
    video.style.opacity = '.7'
  } else {
    video.pause()
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
}

btn.addEventListener('click', () => {
  playPause()
})


// Video duration bar movement
video.addEventListener ('timeupdate', () => {
  //console.log(video.currentTime, video.duration)
  const barWidth = video.currentTime / video.duration
  bar.style.width =`${barWidth * 100}%`
  if(video.ended) {
    btn.className = 'fas fa-play-circle'
    video.style.opacity = '.3'
  }
})
// End of Section 2 Video


// Section 3 Pricing Cards
document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
      btn.classList.toggle('change')
      btn.nextElementSibling.classList.toggle('change')
  })
})
// End of Section 3 Pricing Cards