// let videoList = document.querySelectorAll('.video-list-container .list');

// videoList.forEach(vid =>{
//    vid.onclick = () =>{
//       videoList.forEach(remove =>{remove.classList.remove('active')});
//       vid.classList.add('active');
//       let src = vid.querySelector('.list-video').src;
//       let title = vid.querySelector('.list-title').innerHTML;
//       document.querySelector('.main-video-container .main-video').src = src;
//       document.querySelector('.main-video-container .main-video').play();
//       document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
//    };
// });

var video = document.querySelectorAll('video')

video.forEach(play => play.addEventListener('click', () => {
   play.classList.toggle('active');
   if (play.paused) {
      play.play();
   } else {
      play.pause();
      play.currentTime = 0;
   }
}));