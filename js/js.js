function pairUp(){
	var names = document.getElementById('nameInput').value.split('\n');
	var output = document.getElementById('output');
	var pairLst = [];
	var pair = '';
	var num = 0;

	output.innerHTML = "";

	while (names.length !== 0){
		for (let i = 0; i < 8 && (names.length !== 0); i++){
			num = Math.floor(Math.random() * names.length);
			if (pair == ''){
				pair = names[num];
			} else{
				pair = pair + ', ' + names[num];
			}
			names.splice(num,1);
		};
		pairLst.push(pair)
		pair = '';
	}

	pairLst.forEach(function(e){
		var paraEl = document.createElement('p');
		var pairName = document.createTextNode(e);

		paraEl.appendChild(pairName);
		output.appendChild(paraEl);
	});

}
