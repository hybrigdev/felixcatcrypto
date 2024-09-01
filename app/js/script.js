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
