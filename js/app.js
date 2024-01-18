
	/* Popup*/

	document.addEventListener('DOMContentLoaded', function() {

		   var modalButtons = document.querySelectorAll('.js-open-modal'),
		       overlay      = document.querySelector('.js-overlay-modal'),
		       closeButtons = document.querySelectorAll('.js-modal-close');


		   modalButtons.forEach(function(item){

		      item.addEventListener('click', function(e) {

		         e.preventDefault();

		         var modalId = this.getAttribute('data-modal'),
		             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

		         modalElem.classList.add('active');
		         overlay.classList.add('active');
		      });

		   });

		   closeButtons.forEach(function(item){

		      item.addEventListener('click', function(e) {
		         var parentModal = this.closest('.modal');

		         parentModal.classList.remove('active');
		         overlay.classList.remove('active');
		      });

		   });

		    document.body.addEventListener('keyup', function (e) {
		        var key = e.keyCode;

		        if (key == 27) {

		            document.querySelector('.modal.active').classList.remove('active');
		            document.querySelector('.overlay').classList.remove('active');
		        };
		    }, false);

		    overlay.addEventListener('click', function() {
		        document.querySelector('.modal.active').classList.remove('active');
		        this.classList.remove('active');
		    });
		})

	/* Header Fixed*/

	window.addEventListener("scroll", function(){
  
		  var header = document.querySelector(".header");
		  
		  header.classList.toggle("sticky", window.scrollY > 0);
	});

	/* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 700);
    });

	/* Tab*/

	function openTab(evt, myTab) {
		let i, tabcontent, tablink;
		
		tabcontent = document.getElementsByClassName("tabcontent");
		for(i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		
		tablink = document.getElementsByClassName("tablink");
		for(i = 0; i < tablink.length; i++) {
			tablink[i].className = tablink[i].className.replace("active", "");
		}
		
		document.getElementById(myTab).style.display = "block";
		evt.currentTarget.className += "active";
	}
	document.getElementById("defaultOpen").click();

	/* Slider */

	$(document).ready(function(){
		$('.about-slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			autoplay:true,
			speed:500
		});
	});

	$(document).ready(function(){
	$('.reviews__slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			responsive:[
				{
					breakpoint: 990,
					settings: {
						slidesToShow:1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow:1
					}
				}
			]
		});
	});

	$(document).ready(function(){
		$('.portfolio__slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			autoplay:true,
			speed:500
		});
	});

	/* Popup */

	const modal = document.querySelector("#my-modal");
	const modalBtn = document.querySelector("#btn-modal");
	const closeBtn = document.querySelector(".close");
	
	modalBtn.addEventListener('click', openModal);
	closeBtn.addEventListener('click', closeModal);
	window.addEventListener('click', outsiteClick);
	
	function openModal() {
		modal.style.display = 'block';
	}
	
	function closeModal() {
		modal.style.display = 'none';
	}
	
	function outsiteClick(e) {
		if(e.target == modal) {
			modal.style.display = 'none';
		}
	}

	/* Navbar */

	const toggleBurger = document.getElementsByClassName('toggle-button')[0]
	const navbarLinks = document.getElementsByClassName("navbar-links")[0]

	toggleBurger.addEventListener("click", () => {
		toggleBurger.classList.toggle("active");
		navbarLinks.classList.toggle("active");
	})

	document.querySelectorAll(".navbar-links").forEach(n => n.addEventListener("click", () => {
		toggleBurger.classList.remove("active");
		navbarLinks.classList.remove("active");
	}))

	/* Animation */

	const the_animation = document.querySelectorAll('.animation')

	const observer = new IntersectionObserver((entries) => {
	    entries.forEach((entry) => {
	        if (entry.isIntersecting) {
	            entry.target.classList.add('scroll-animation')
	        }
	        
	    })
	},
	   { threshold: 0.5
	   });
	//
	  for (let i = 0; i < the_animation.length; i++) {
	   const elements = the_animation[i];

	    observer.observe(elements);
	  } 
