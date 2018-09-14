const navBar = document.querySelector('nav')
window.addEventListener('scroll', () =>{
    if(window.scrollY>0) navBar.classList.add('is-down')
    else navBar.classList.remove('is-down')
})

  AOS.init();

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel')
   
    var arrowright = document.querySelector('.arrowright')
    var arrowleft = document.querySelector('.arrowleft')
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    })
    
    arrowright.addEventListener('click', () => {
      var instances = M.Carousel.getInstance(elems[0])
      instances.next()
    })
    arrowleft.addEventListener('click', () => {
      var instances = M.Carousel.getInstance(elems[0])
      instances.prev()
    })
   
    
  })
  
  $('.lightbox').hide();
  $('#open').click(function(){
      $('.lightbox').show();
  })
  $('#close1').click(function(){
      $('.lightbox').hide();
  })

  $('.lightbox1').hide();
  $('#open1').click(function(){
      $('.lightbox1').show();
  })
  $('#close2').click(function(){
      $('.lightbox1').hide();
  })

  $('.lightbox2').hide();
  $('#open2').click(function(){
      $('.lightbox2').show();
  })
  $('#close3').click(function(){
      $('.lightbox2').hide();
  })