// Header start
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};
// Header End



// slider start

$('.myslider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
		
// slider end




document.addEventListener('alpine:init', () => {
  Alpine.store('accordion', {
    tab: 0
  });
  
  Alpine.data('accordion', (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
    }
  }));
})