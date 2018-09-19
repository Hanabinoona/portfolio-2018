function scroll(event){
	var header = document.querySelector('header');
	var moi = document.querySelector('#moi');
	var projet = document.querySelector('#projet');
	var contact = document.querySelector('#contact');

	if(event.pageY >= header.clientHeight){
		document.querySelector('.menu').classList.add('fixed');
	}
	else{
		document.querySelector('.menu').classList.remove('fixed');
	}

	if(event.pageY >= moi.offsetTop && event.pageY < projet.offsetTop){
		document.querySelector('#me').classList.add('underline');
	}
	else{
		document.querySelector('#me').classList.remove('underline');
	}

	if(event.pageY >= projet.offsetTop && event.pageY < contact.offsetTop - window.innerHeight + 100){
		document.querySelector('#projets').classList.add('underline');
	}
	else{
		document.querySelector('#projets').classList.remove('underline');
	}

	if(event.pageY >= contact.offsetTop - window.innerHeight + 100){
		document.querySelector('#contacts').classList.add('underline');
		document.querySelector('#projets').classList.add('opacity-contact');
	}
	else{
		document.querySelector('#contacts').classList.remove('underline');
		document.querySelector('#projets').classList.remove('opacity-contact');
	}
}

var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? window.addEventListener('scroll', scroll) : window.addEventListener('mousewheel', scroll);
// permet de détecter le scroll sur firefox et les autres navigateurs


var handlePrevNext = function(section) {
	var prev = document.querySelector(section + ' .prev');
	var next = document.querySelector(section + ' .next');
	next.onclick = function() {
		var active = document.querySelector(section + ' .active');
		if (active.nextElementSibling !== null) {
			active.classList.toggle('active');
			active.nextElementSibling.classList.toggle('active');
		}
		active = document.querySelector(section + ' .active');
		if (active.nextElementSibling === null) {
			next.classList.add('hidden');
		}
		if (active.previousElementSibling !== null) {
			prev.classList.remove('hidden');
		}
	}
	prev.onclick = function() {
	  var active = document.querySelector(section + ' .active');
	  if (active.previousElementSibling !== null) {
	    active.classList.toggle('active');
	    active.previousElementSibling.classList.toggle('active');
	  }
	  active = document.querySelector(section + ' .active');
	  if (active.previousElementSibling === null) {
	  	prev.classList.add('hidden');
	  }
	  if (active.nextElementSibling !== null) {
	  	next.classList.remove('hidden');
	  }

	}
}

handlePrevNext('#projet');
