var operators = ['+', '-', 'x', '/', '=', 'cl'];
var buffer = '';
var currentResult = 0;
var currentOperation = '';

function createKeys()
{
    // create the number pad
	for(let i = 0; i < 10; i++)
	{
		let key = document.createElement('div');
		key.innerHTML = i;
		key.dataset.value = i;
		key.className = 'key';

		document.getElementById('numpad').appendChild(key);
	}
	// create the row of operators
	operators.forEach(function(item){
		let key = document.createElement('div');
		key.innerHTML = item;
		key.dataset.operation = item;
		key.className = 'key';

		document.getElementById('operators').appendChild(key);
	});
}