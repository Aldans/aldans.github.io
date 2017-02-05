$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// animation card start
	$(".section-4").waypoint(function(){

		$(".section-4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});
	});
	// animation card end

	//animation section - 5 triangle start

	var waypointsvg = new Waypoint({

		element: $(".section-5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section-5 .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc-content").addClass("tc-content-on").css({"opacity":"1"});
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	//animation section - 5 triangle end


		// animation team start
	$(".section-6").waypoint(function() {

			$(".section-6 .team").each(function(index) {
				var ths = $(this);
				setInterval(function() {
					ths.removeClass("team-off").addClass("team-on");
				}, 200*index);
			});

		}, {
			offset : "35%"
	});
	// animation team end

	// slider start
	
	$(".slider").owlCarousel({
		items: 1,
		nav: true,
		navText: " ",
		loop: true
	});

	// slider end


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


