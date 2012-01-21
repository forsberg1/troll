var troll = {
	// Init troll object
	init_troll : function()
	{
		var find_troll = $("div[class*='tl:']");
		// Loop all tl sets
		find_troll.each(function(index) {
			var id_name       = $(this).attr("id");
			var thisclass     = $(this).attr("class");
			var findElement   = thisclass.split(":");
			var findvalue_set = findElement[1].split("(");
			var findvalue     = findvalue_set[1].split(")");

			// Set variables for use in plugin
			var element 	  = findvalue_set[0];
			var value 		  = findvalue[0];

			//IS TODO (Many injections) (tl:background(blue), border(1px solid yellow)
			var ismany        = thisclass.split(",");
			

			troll.set_troll_self(id_name, element, value);
		});
	},
	// Set css for trolls 
	set_troll_self : function(id, element, value)
	{
		$("#"+id).css(element, value);
	},
	set_troll_is_many : function(id, element, arrVals) //IS TODO (Many injections) (tl:background(blue), border(1px solid yellow)
	{
		
	}	
};

// Init ready jquery
$(document).ready(function() {
	troll.init_troll();
});