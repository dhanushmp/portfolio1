function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



var options = {
  strings: ['Currently a software intern @ Headstarter AI', 'A Budding Full Stack Developer ',' An Aspiring ML Engineer'],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 1000,
  loop: true
};

var typed = new Typed('#element', options);

document.addEventListener('DOMContentLoaded', () => {
  const portfolioSection = document.querySelector('.portfolio');
  const scrollbarList = portfolioSection.querySelector('.has-scrollbar');
  const scrollbarItems = scrollbarList.querySelectorAll('.scrollbar-item');
  
  // Function to check if an element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Function to handle lazy loading of images
  const lazyLoadImages = () => {
    scrollbarItems.forEach(item => {
      const img = item.querySelector('img');
      if (isInViewport(item) && img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    });
  };

  // Initialize lazy loading
  lazyLoadImages();

  // Add scroll event listener for continuous lazy loading
  scrollbarList.addEventListener('scroll', lazyLoadImages);

  // Add click event listeners to portfolio items
  scrollbarItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const link = item.querySelector('a');
      const title = item.querySelector('.card-title').textContent;
      const description = item.querySelector('.card-text').textContent;
      
      // You can customize this to show a modal or navigate to a project page
      alert(`Project: ${title}\nDescription: ${description}\nLink: ${link.href}`);
    });
  });

  // Optional: Add smooth scrolling to the scrollbar
  const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().left;
    const startPosition = scrollbarList.scrollLeft;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      scrollbarList.scrollLeft = run;
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  // Add click event to smoothly scroll to the next item
  const scrollRightBtn = document.createElement('button');
  scrollRightBtn.textContent = 'Next';
  scrollRightBtn.classList.add('scroll-right-btn');
  portfolioSection.appendChild(scrollRightBtn);

  scrollRightBtn.addEventListener('click', () => {
    const firstItem = scrollbarItems[0];
    smoothScroll(firstItem, 500);
  });
});