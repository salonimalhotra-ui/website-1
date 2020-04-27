window.addEventListener("load", function(){
	var inputs = []
	inputs = inputs.concat(document.querySelector("input"));
	inputs = inputs.concat(document.querySelector("select"));
	inputs = inputs.concat(document.querySelector("textarea"));
	if (inputs.length > 0){
		for (var i=0, t=inputs.length; i<t ;i++){
			if (inputs[i].parentNode.className.indexOf('submit-row') == -1){
				inputs[i].addEventListener("change", function(){ window.onbeforeunload = function(){
					return "Your changes have not been saved.";
				}});
			} else {
				inputs[i].addEventListener("click", function(){ window.onbeforeunload = null });
			}
		}
	}
})
