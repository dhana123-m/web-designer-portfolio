
  function showImages(id) {
    var elem = document.getElementById(id);
    elem.style.display = (elem.style.display === "none") ? "block" : "none";
  }

  const animatedItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // Animate only once
    }
    else{
      entry.target.classList.remove('active'); 
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

animatedItems.forEach(item => {
  observer.observe(item);
});

