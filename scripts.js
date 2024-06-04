let item = document.querySelector('#navigazione');
    window.addEventListener('scroll', function(e) {
      if(window.scrollY > 30){
        item.classList.add('scroll-down');
      } else {
        item.classList.remove('scroll-down');
      }
});

var elements_to_watch = document.querySelectorAll('.watch');

    var callback = function(items){
        items.forEach((item) => {
            if(item.isIntersecting){
                item.target.classList.add("in-page")
            } else{
                item.target.classList.remove("in-page")
            }
        });
    }

    var observer = new IntersectionObserver(callback, { threshold: 0.5} );

    elements_to_watch.forEach((element) => {
        observer.observe(element);
    });


    let mq_menu = document.querySelector('.mq-menu');
    let panel = document.querySelector('.link-container');
    
    item.addEventListener("click", function() {
    
        panel.classList.toggle('active');
    
    });

const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
  } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
  }
});
    
