const main1 = document.querySelector('.main1');
const main2 = document.querySelector('.main2');
const options = {
  root: null, // Observe the entire viewport
  threshold: [0.1, 1], // Multiple thresholds for different elements
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.target === main1) { // Check for main1 element
      if (entry.isIntersecting) {
        main1.classList.remove('hidden'); // Show main1 if visible
      } else {
        main1.classList.add('hidden'); // Hide main1 if not visible
      }
    } else if (entry.target === main2) { // Check for main2 element
      if (entry.isIntersecting) {
        main2.classList.remove('hidden'); // Show main2 if visible
      } else {
        main2.classList.add('hidden'); // Hide main2 if not visible
      }
    }
  });
});

observer.observe(main1, options); // Observe main1 with options
observer.observe(main2, { ...options, threshold: 0.5 }); // Observe main2 with adjusted threshold
