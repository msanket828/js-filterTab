
/********* active button js project**************/

//to collect all the button first
const btn=document.querySelectorAll(".btn");

//for active tab
btn.forEach(function(fun) {	
	fun.addEventListener('click',function() {		
		btn.forEach(function(button) {					
			button.classList.remove("active");			
		})
		fun.classList.add("active");				
	})  
});


/********* filter button js project**************/

//to collect all the button first
const button=document.querySelectorAll(".btn-group a");
const filterLi=document.querySelectorAll('.filter-items li');


//filter tab functionality
button.forEach(function(but) {
	but.addEventListener('click',function() {
		button.forEach(function(fun) {
			fun.classList.remove('filter-active');
		})
		but.classList.add('filter-active');		
		var currentButton=but.classList[0];
		filterLi.forEach(function(fun) {
			//for blue and orange		
			if(fun.classList[1]==currentButton) {
				fun.classList.remove("hideme");
			} else {
					if(fun.classList[0]==currentButton) {
						fun.classList.remove("hideme");
					} else {
							fun.classList.add("hideme");
						} 
				}
				
		})
		
	})
});




// $('.filter-items').isotope({
// 	itemSelector:'.all',
// 	percentPosition:true,
// 	masonry: {
// 		columWidth: 100,
// 		gutter: 30		
// 	}
// })
