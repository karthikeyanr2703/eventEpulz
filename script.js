document.addEventListener("DOMContentLoaded", function() {
    // Function to change the background video
    function changeBackgroundVideo() {
      var video = document.getElementById("video");
      var sources = [
        "https://www.1md.be/img/video/intro_dimension.mp4",
        "https://www.1md.be/img/video/intro_bridge.mp4",
        "https://www.1md.be/img/video/intro_ovvo.mp4",
        "https://www.1md.be/img/video/intro_origami.mp4",
        "https://www.1md.be/img/video/vid_header2.mp4",
      ];
      var currentIndex = sources.indexOf(video.src);
      var nextIndex = (currentIndex + 1) % sources.length;
      video.src = sources[nextIndex];
      video.load();
    }
  
    // Change the background video after 3 seconds
    setInterval(changeBackgroundVideo, 3000);
  });
  