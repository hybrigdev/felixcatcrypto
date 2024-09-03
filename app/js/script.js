document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const nav = document.querySelector('nav ul');
    const navLinks = nav.querySelectorAll('a');

    function closeNavbar() {
      menuToggle.checked = false;
      navbar.classList.remove('active');
      nav.classList.remove('active');
  }
  
    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        navbar.classList.add('active');
        nav.classList.add('active');
      } else {
          closeNavbar();
      }
    });
  
    document.addEventListener('click', function(event) {
      if (!navbar.contains(event.target) && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
        closeNavbar();
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', closeNavbar);
  });
});
  
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("hero-video");

  video.addEventListener("click", function () {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
    });
});  

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    const muteButton = document.getElementById('mute-button');
    const muteIcon = document.getElementById('mute-icon');

    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteIcon.textContent = '🔊'; // Unmuted icon
        } else {
            video.muted = true;
            muteIcon.textContent = '🔇'; // Muted icon
        }
    });
});

document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = "Gb4VP7b7huToXmLvvNy1VauGttebc4vxVp5FEKQspump";
    const defaultText = copyButton.textContent;
  
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); 
  
    document.execCommand('copy');
  
    document.body.removeChild(tempTextArea);
  
    copyButton.textContent = 'Copied!';
    setTimeout(() => {
      copyButton.textContent = defaultText;
    }, 2000);
  });
  
  