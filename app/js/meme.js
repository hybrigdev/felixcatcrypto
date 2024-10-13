// Meme Gallery

const imageNames = [
    'IMG_20241010_085620_601.jpg',
    'IMG_20241010_085620_656.jpg',
    'IMG_20241010_085621_382.jpg',
    'IMG_20241010_085621_433.jpg',
    'IMG_20241010_154216_094.jpg',
    'IMG_20241010_154216_420.jpg',
    'IMG_20241010_154216_480.jpg',
    'IMG_20241010_154216_493.jpg',
    'IMG_20241010_154216_505.jpg',
    'IMG_20241010_154216_620.jpg',
    'IMG_20241010_154216_647.jpg',
    'IMG_20241010_154217_038.jpg',
    'IMG_20241010_154459_239.jpg',
    'IMG_20241010_154459_495.jpg',
    'IMG_20241010_154459_687.jpg',
    'IMG_20241010_154459_884.jpg',
    'IMG_20241010_154510_970.jpg',
    'IMG_20241010_154511_023.jpg',
    'IMG_20241010_154520_125.jpg',
    'IMG_20241010_154520_952.jpg',
    'IMG_20241010_154527_866.jpg',
    'IMG_20241010_154528_152.jpg',
    'IMG_20241010_154528_272.jpg',
    'IMG_20241010_154528_400.jpg',
    'IMG_20241010_154533_796.jpg',
    'IMG_20241010_154534_096.jpg',
    'IMG_20241010_154534_144.jpg',
    'IMG_20241010_154540_071.jpg',
    'IMG_20241010_154540_524.jpg',
    'IMG_20241010_154540_652.jpg',
    'IMG_20241010_154540_676.jpg',
    'IMG_20241010_154548_567.jpg',
    'IMG_20241010_154548_570.jpg',
    'IMG_20241010_154548_674.jpg',
    'IMG_20241010_154549_055.jpg',
    'IMG_20241010_154554_299.jpg',
    'IMG_20241010_154557_536.jpg',
    'IMG_20241010_154600_867.jpg',
    'IMG_20241010_154603_125.jpg',
    'IMG_20241010_154606_663.jpg',
    'IMG_20241010_154606_855.jpg',
    'IMG_20241010_154607_207.jpg',
    'IMG_20241010_154607_534.jpg',
    'IMG_20241010_154607_638.jpg',
    'IMG_20241010_155412_125.jpg',
    'IMG_20241010_155412_542.jpg',
    'IMG_20241010_155424_728.jpg',
    'IMG_20241010_155427_762.jpg',
    'IMG_20241010_155430_049.jpg',
    'IMG_20241010_155432_888.jpg',
    'IMG_20241010_155433_230.jpg',
    'IMG_20241010_155433_500.jpg',
    'IMG_20241010_155433_663.jpg',
    'IMG_20241010_155433_781.jpg',
    'IMG_20241010_155439_847.jpg',
    'IMG_20241010_155442_357.jpg',
    'IMG_20241010_155442_388.jpg',
    'IMG_20241010_155442_673.jpg',
    'IMG_20241010_155442_853.jpg',
    'IMG_20241010_155449_380.jpg',
    'IMG_20241010_155452_393.jpg',
    'IMG_20241010_155452_658.jpg',
    'IMG_20241010_155452_746.jpg',
    'IMG_20241010_155452_955.jpg',
    'IMG_20241010_155453_103.jpg',
    'IMG_20241010_155453_111.jpg',
    'IMG_20241010_155453_176.jpg',
    'IMG_20241010_155501_155.jpg',
    'IMG_20241010_155504_834.jpg',
    'IMG_20241010_155504_892.jpg',
    'IMG_20241010_155505_082.jpg',
    'IMG_20241010_155505_346.jpg',
    'IMG_20241010_155505_723.jpg',
    'IMG_20241010_155513_575.jpg',
    'IMG_20241010_155513_716.jpg',
    'IMG_20241010_155513_862.jpg',
    'IMG_20241010_155518_763.jpg',
    'IMG_20241010_155518_902.jpg',
    'IMG_20241010_155519_339.jpg',
    'IMG_20241010_155519_352.jpg',
    'IMG_20241010_155519_533.jpg',
    'IMG_20241010_155525_537.jpg',
    'IMG_20241010_155525_653.jpg',
    'IMG_20241010_155525_712.jpg',
    'IMG_20241010_155526_052.jpg',
    'IMG_20241010_155526_379.jpg',
    'IMG_20241010_155536_144.jpg',
    'IMG_20241010_155536_586.jpg',
    'IMG_20241010_162915_556.jpg',
    'IMG_20241010_162915_862.jpg',
    'IMG_20241010_162916_007.jpg',
    'IMG_20241010_162916_071.jpg',
    'IMG_20241010_162916_307.jpg',
    'IMG_20241010_162924_844.jpg',
    'IMG_20241010_162931_764.jpg',
    'IMG_20241010_162932_044.jpg',
    'IMG_20241010_162932_651.jpg',
    'IMG_20241010_162939_464.jpg',
    'IMG_20241010_162939_685.jpg',
    'IMG_20241010_162939_765.jpg',
    'IMG_20241010_162939_989.jpg',
    'IMG_20241010_162945_920.jpg',
    'IMG_20241010_162946_027.jpg',
    'IMG_20241010_162946_290.jpg',
    'IMG_20241010_162946_475.jpg',
    'IMG_20241010_162952_105.jpg',
    'IMG_20241010_162956_193.jpg',
    'IMG_20241010_162958_329.jpg',
    'IMG_20241010_163001_628.jpg',
    'IMG_20241010_163002_062.jpg',
    'IMG_20241010_163002_163.jpg',
    'IMG_20241010_163005_456.jpg',
    'IMG_20241010_163006_553.jpg',
    'IMG_20241010_163009_064.jpg',
    'IMG_20241010_163011_562.jpg',
    'IMG_20241010_163011_666.jpg',
    'IMG_20241010_163012_294.jpg',
    'IMG_20241010_163012_299.jpg',
    'IMG_20241010_163016_811.jpg',
    'IMG_20241010_163016_926.jpg',
    'IMG_20241010_163016_998.jpg',
    'IMG_20241010_163017_019.jpg',
    'IMG_20241010_163017_171.jpg',
    'IMG_20241010_163017_526.jpg',
    'IMG_20241010_163022_806.jpg',
    'IMG_20241010_163022_962.jpg',
    'IMG_20241010_163022_990.jpg',
    'IMG_20241010_163023_163.jpg',
    'IMG_20241010_163023_492.jpg',
    'IMG_20241010_163023_541.jpg',
    'IMG_20241010_163023_663.jpg',
    'IMG_20241010_163023_725.jpg',
    'IMG_20241010_163023_781.jpg',
    'IMG_20241010_163031_031.jpg',
    'IMG_20241010_163034_697.jpg',
    'IMG_20241010_163035_085.jpg',
    'IMG_20241010_163035_128.jpg',
    'IMG_20241010_163035_245.jpg',
    'IMG_20241010_163035_290.jpg',
    'IMG_20241010_163035_354.jpg',
    'IMG_20241010_163035_372.jpg',
    'IMG_20241010_163035_396.jpg',
    'IMG_20241010_163035_676.jpg',
    'IMG_20241010_163044_207.jpg',
    'IMG_20241010_163044_499.jpg',
    'IMG_20241010_163051_053.jpg',
    'IMG_20241010_163051_328.jpg',
    'IMG_20241010_163051_522.jpg',
    'IMG_20241010_163051_541.jpg',
    'IMG_20241010_163051_749.jpg',
    'IMG_20241010_163051_881.jpg',
    'IMG_20241010_163054_093.jpg',
    'IMG_20241010_163054_300.jpg',
    'IMG_20241010_163054_318.jpg',
    'IMG_20241010_163054_325.jpg',
    'IMG_20241010_163054_476.jpg',
    'IMG_20241010_163054_708.jpg',
    'IMG_20241010_163054_819.jpg',
    'IMG_20241010_163054_847.jpg',
    'IMG_20241010_163054_891.jpg',
    'IMG_20241010_163103_181.jpg',
    'IMG_20241010_163103_299.jpg',
    'IMG_20241010_163103_562.jpg',
    'IMG_20241010_163103_592.jpg',
    'IMG_20241010_163103_820.jpg',
    'IMG_20241010_163103_885.jpg',
    'IMG_20241010_163104_022.jpg',
    'IMG_20241010_163104_041.jpg',
    'IMG_20241010_163104_071.jpg',
    'IMG_20241010_163104_145.jpg',
    'IMG_20241010_163111_853.jpg',
    'IMG_20241010_163111_931.jpg',
    'IMG_20241010_163112_111.jpg',
    'IMG_20241010_163112_182.jpg',
    'IMG_20241010_163112_580.jpg',
    'IMG_20241010_163112_680.jpg',
  ];
  
  const imageFolder = '../../assets/memes/';
  const gallery = document.querySelector('.gallery');
  let currentIndex = 0;
  
  // Function to shuffle the images
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffle the image names on each load
  shuffle(imageNames);
  
  // Dynamically create the image elements with the panel and overlay
  imageNames.forEach((imageName) => {
    const container = document.createElement('div');
    container.classList.add('image-container');
  
    const img = document.createElement('img');
    img.src = imageFolder + imageName;
    img.alt = imageName;
  
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.innerHTML = `
    <button class="download-btn" data-src="${img.src}">Download</button>
    <button class="view">View</button>
    `;
  
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    // Toggle panel and overlay on image click
    img.addEventListener('click', () => {
        if (container.classList.contains('active')) {
            container.classList.remove('active');
        } else {
            document.querySelectorAll('.image-container').forEach(c => c.classList.remove('active'));
            container.classList.add('active');
        }
    });
  
    // Clicking on the overlay should close the panel and overlay
    panel.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // panel.querySelector('.view').addEventListener('click', () => {
    //     openModal(index);
    // });
  
    // View button to open modal
    panel.querySelector('.view').addEventListener('click', (e) => {
        const modal = document.querySelector('.modal');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalImage = document.querySelector('#modal-image');
        modalImage.src = img.src;
        modal.style.display = 'flex';
        modalOverlay.style.display = 'block';
    });
  
    // Download button functionality
    panel.querySelector('.download-btn').addEventListener('click', (e) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = e.target.dataset.src;
        downloadLink.download = imageName;
        downloadLink.click();
    });
  
    container.appendChild(img);
    container.appendChild(panel);
    container.appendChild(overlay);
    gallery.appendChild(container);
  });

  // Open modal with image at a specific index
  function openModal(index) {
    currentIndex = index; // Set the current image index
    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalImage = document.querySelector('#modal-image');
    const downloadLink = document.querySelector('.download');

    modalImage.src = imageFolder + imageNames[currentIndex];
    downloadLink.href = imageFolder + imageNames[currentIndex];
    modal.style.display = 'flex';
    modalOverlay.style.display = 'block';
}
  
  // Close modal functionality when clicking close button or outside modal
  document.querySelector('.close').addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);

    function closeModal() {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.modal-overlay').style.display = 'none';
    }

    // Navigate to the previous image
    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
        updateModalImage();
    });

    // Navigate to the next image
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imageNames.length;
        updateModalImage();
    });

    // Update the modal image and download link when navigating
    function updateModalImage() {
        const modalImage = document.querySelector('#modal-image');
        const downloadLink = document.querySelector('.download');
        modalImage.src = imageFolder + imageNames[currentIndex];
        downloadLink.href = imageFolder + imageNames[currentIndex];
    }

//   document.querySelector('.close').addEventListener('click', () => {
//     document.querySelector('.modal').style.display = 'none';
//     document.querySelector('.modal-overlay').style.display = 'none';
//   });
  
//   document.querySelector('.modal-overlay').addEventListener('click', () => {
//     document.querySelector('.modal').style.display = 'none';
//     document.querySelector('.modal-overlay').style.display = 'none';
//   });