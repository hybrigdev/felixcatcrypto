// Audio-play Function

function playAudioOnScroll() {
  var audio = document.getElementById("bg-audio");
  
  if (audio.paused) {
      audio.play();
  }
}

// Attach scroll event listener
window.onscroll = function() {
  playAudioOnScroll();
};


// Navbar Toggle Function

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


// Copy to Clipboard Function

document.getElementById('copyButton').addEventListener('click', function() {
  copyToClipboard('Gb4VP7b7huToXmLvvNy1VauGttebc4vxVp5FEKQspump', 'copyButton');
});

document.getElementById('copyButton2').addEventListener('click', function() {
  copyToClipboard('Gb4VP7b7huToXmLvvNy1VauGttebc4vxVp5FEKQspump', 'copyButton2');
});

function copyToClipboard(textToCopy, buttonId) {
  const copyButton = document.getElementById(buttonId);
  const defaultText = copyButton.textContent;

  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  document.execCommand('copy');

  document.body.removeChild(tempTextArea);

  copyButton.textContent = 'CA Copied Successfully!';
  setTimeout(() => {
      copyButton.textContent = defaultText;
  }, 2000);
}


// Jupiter Terminal Function

window.Jupiter.init({
  displayMode: "integrated",
  integratedTargetId: "integrated-terminal",
  endpoint: "https://broken-multi-dawn.solana-mainnet.quiknode.pro/8f773daf77173d608dab592d20a6887c71130b58",
  formProps: {
  swapMode: "ExactInOrOut",
  initialInputMint: "So11111111111111111111111111111111111111112",
  initialOutputMint: "Gb4VP7b7huToXmLvvNy1VauGttebc4vxVp5FEKQspump",
  initialSlippageBps: 50,
  },
});

setTimeout(() => {
  document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
  document.querySelector('.big-container').style.display = 'block'; // Show actual content
}, 2000); // 4 seconds delay