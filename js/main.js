$(document).ready(function() {/*
  var $grid = $('#grid'),
      $sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.picture-item',
    sizer: $sizer
  });*/
	/*$("#grid").mason({
		itemSelector: ".picture-item",
		ratio: 1.1,
		sizes: [
			[1,1],
		],
		promoted:[
			[1,3, 'wide']
			[2,3,'big']
		],
		filler: {
			itemSelector: '.filler',
			filler_class: '.custom_filler'
		},
		gutter: 3
	});*/


	var main = {
		init: function() {
			/*$(window).on('resize', function() {

				$("#mini_demoC").mason({
					itemSelector: ".box",
					ratio: 1.1,
					sizes: [
						[1, 1]
					],
					promoted: [
						[3, 1, 'wide'],
						[2, 3, 'big']
					],
					columns: [
						[0, 480, 6]
					],
					filler: {
						itemSelector: '.filler',
						filler_class: 'custom_filler'
					},
					layout: 'fluid',
					gutter: 3
				});*/

				$("#grid").mason({
					itemSelector: ".box",
					ratio: 1.1,
					sizes: [
						[1, 1]
					],
					promoted: [
						[3, 1, 'wide'],
						[2, 3, 'big']
					],
					columns: [
						[0, 480, 6]
					],
					filler: {
						itemSelector: '.filler',
						filler_class: 'custom_filler'
					},
					layout: 'fluid',
					gutter: 1
				});
			// })

			/*$("#show").click(function(event) {
				event.preventDefault();
				$("#mini_demoB .custom_filler").toggleClass('show');
			});*/
		}
	};

	$(function() {
		main.init();
	});



});