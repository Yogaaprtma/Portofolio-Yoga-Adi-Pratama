document.addEventListener('DOMContentLoaded', (event) => {
    // slider or carousel for hobby section and project section 
    let myIndex = 0;
    carousel();
  
    function carousel() {
      let i;
      let x = document.getElementsByClassName("slider");
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }

      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "flex";
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }
  
    // fix sticky navbar
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});  