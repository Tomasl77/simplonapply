var txtintro = "Press enter!";


function intro() {
	document.getElementById('suite').style.display = 'none'
	display = document.getElementById('intro');

	for(var i = 0, l = txtintro.length; i < l; i++) {
	(function(i) {
		setTimeout(function() {
			display.innerHTML += txtintro.charAt(i);
			}, i * 200);
		}(i));
	}	
}

document.querySelector('body').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
    	var question = prompt("Checking humanity. Please answer this : \n 3+3 =");
    	if(question == 6){
	    	document.getElementById('intro').style.display = 'none';
    		document.getElementById('suite').style.display = 'block';
    	}
    	else alert('Intruders !!');
    }
});