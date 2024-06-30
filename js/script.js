function changeDesc(tittle) {
    const contents = document.querySelectorAll('.content');

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(tittle)) {
            content.classList.add('active');
        }
    })
}

function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    
    if (trailer.classList.contains('active')) {
        video.pause();
        trailer.classList.remove('active');
        enableScroll();
    } else {
        video.play();
        trailer.classList.add('active');
        disableScroll();
    }
}

function disableScroll() {
    document.documentElement.dataset.scrollY = window.scrollY;

    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.position = 'fixed';
    document.documentElement.style.width = '100%';
}

function enableScroll() {
    document.documentElement.style.overflow = '';
    document.documentElement.style.position = '';
    document.documentElement.style.width = '';

    window.scrollTo(0, document.documentElement.dataset.scrollY || 0);
}



document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


const scroll = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: false
  });
  
  scroll.reveal(
    `.nav, .banner, .carousel-box, .content, .programs, .program-cards, .value-img, .value-section, .banner-footer, footer`,
    {
      interval: 200
    }
  );

  const imageContainer = document.querySelectorAll('.image-container');
  const leftImage = imageContainer[0].querySelector('img');
  const rightImage = imageContainer[1].querySelector('img');
  
  let isSwiping = false;
  let startX, currentX;
  
  imageContainer.forEach(container => {
      container.addEventListener('touchstart', (event) => {
          isSwiping = true;
          startX = event.touches[0].clientX;
      });
  
      container.addEventListener('touchmove', (event) => {
          if (!isSwiping) return;
  
          currentX = event.touches[0].clientX;
          const offset = startX - currentX;
  
          leftImage.style.transform = `translateX(${offset}px)`;
          rightImage.style.transform = `translateX(${offset - 100}% )`;
      });
  
      container.addEventListener('touchend', (event) => {
          isSwiping = false;
  
          if (currentX > startX) {
              leftImage.style.transform = 'translateX(0)';
              rightImage.style.transform = 'translateX(100%)';
          } else {
              leftImage.style.transform = 'translateX(100%)';
              rightImage.style.transform = 'translateX(0)';
          }
      });
  
      container.addEventListener('mousedown', (event) => {
          isSwiping = true;
          startX = event.clientX;
      });
  
      container.addEventListener('mousemove', (event) => {
          if (!isSwiping) return;
  
          currentX = event.clientX;
          const offset = startX - currentX;
  
          leftImage.style.transform = `translateX(${offset}px)`;
          rightImage.style.transform = `translateX(${offset - 100}% )`;
      });
  
      container.addEventListener('mouseup', (event) => {
          isSwiping = false;
  
          if (currentX > startX) {
              leftImage.style.transform = 'translateX(0)';
              rightImage.style.transform = 'translateX(100%)';
          } else {
              leftImage.style.transform = 'translateX(100%)';
              rightImage.style.transform = 'translateX(0)';
          }
      });
  });

//VISI MISI
function scrollToDiv() {
    document.getElementById('nilai').scrollIntoView({ behavior: 'smooth' });
  }
