var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
var toy = require('./ToySim');
rl.setPrompt('ToySimCommand:>');
rl.prompt();

rl.on('line', function(args) {	
	
	var params = args.split(" ");
	if (params.length == 2){	
		var firstParam = params[0].toLowerCase().trim();
		var secondParam = params[1].split(',');		
		
		if (firstParam != "place") {			
			console.log('Enter either move, left, right, exit OR use place (Place x,y,direction) to position the toy');
			return;
		}		
			
		toy.sim.place(secondParam);
	}
	else if (params.length == 1)
	{		
		var command = args.toLowerCase().trim();
		
		switch(command)
		{
			case 'move':
				toy.sim.move();
				break;
			case 'left':
				toy.sim.turn(command);
				break;
			case 'right':
				toy.sim.turn(command);
				break;
			case 'report':
				toy.sim.report();
				break;
			case 'exit': 
				rl.close();
			default:
				console.log('Enter either move, turn, exit OR use place (Place x,y,direction) to position the toy');
		}		
	}
	else
	{
		console.log('Please enter either 2 or 1 command line param or type exit');		
	}  
  rl.prompt();
}).on('close', function() {
  console.log('Stopping Toy Simulator');
  process.exit(0);
});