window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

var navLinks = document.querySelectorAll('#navbar ul li a');

navLinks.forEach(function(l) {
    l.addEventListener('mouseenter', function() {
        this.style.color="#A020F0"; 
        this.style.fontSize = '24px'; 
    });

    l.addEventListener('mouseleave', function() {
        this.style.color = '#fff'; 
        this.style.fontSize = ''; 
    });
});

  