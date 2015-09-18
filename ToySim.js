module.exports = {
	sim: ToySimulator()
};


function ToySimulator(){	
	
	var init = function(){
		//initialize grid 
		isToyPlaced = false;
		direction = null;
		gridSize = { x: 5, y: 5};		
		locationMap = {
		  north: {			
			left: 'west',
			right: 'east'
		  },
		  east: {					    
			left: 'north',
			right: 'south'
		  },
		  south: {						  
			left: 'east',
			right: 'west'
		  },
		  west: {			
			left: 'south',
			right: 'north'
		  }
		};		
		position = {
			x: null,
			y: null
		};
	};
	
	var place = function(param){
		isToyPlaced = true;			
		var x = param[0];
		var y = param[1];
		var isValidDirection = locationMap[param[2]];
		// Ignore if placement is off the table
	    if (x < 0 || y < 0 || x > gridSize.x || y > gridSize.y)
		{ 
			console.log('Grid is 5 units * 5 units and negative values are not allowed');
			return;
		}
		
		position.x = x;
		position.y = y;
		
		if (isValidDirection == undefined)
		{
			console.log('enter valid direction');
			return;
		}
		direction = param[2];
	};
	
	var move = function(){		 
	  if (!isToyPlaced)  {
		  console.log('Use place first');
		  return;
	  }

	  var x = position.x;
	  var y = position.y;
	
	  switch (direction) {
		case 'north':
		  if (++y <= gridSize.y) 
		  {
			position = {x: x, y: y}
		  }
		  else
		  {
			console.log('cannot move further');
		  }
		  break;
		case 'east':		
		  if (++x <= gridSize.x) 
		  {
			position = {x: x, y: y}
		  }
		  else
		  {
			console.log('cannot move further');
		  }
		  break;
		case 'south':
		  if (--y >= 0) 
		  {
			position = {x: x, y: y};
		  }
		  else
		  {
			console.log('cannot move further');
		  }
		  break;
		case 'west':
		  if (--x >= 0) 
		  {
			position = {x: x, y: y}
		  }
		  else
		  {
			console.log('cannot move further');
		  }
		  break;
		default:		  
		  break;
	  }
	};
	var turn = function (dir) {	  
	  if (locationMap[dir] == undefined &&  !isToyPlaced)
	  {
		  console.log('Use place first');
		  return;
	  }
	  
	  if (dir == 'left')
	  {
		direction = locationMap[direction].left;
	  }
	  else if (dir == 'right')
	  {
		direction = locationMap[direction].right;
	  }	  
	  else
	  {
		console.log('You can turn right or left');
	  }	  
	};	
	var reportcurrentlocation = function() {
		if (!isToyPlaced)  {
		  console.log('Use place first');
		  return;
	  }
		
		console.log('toy position: x: '+ position.x + ' y: ' + position.y + ' direction: ' + direction);
	};		
	
	init();
	return {
		turn: turn, 
		move: move,
		place: place,
		report: reportcurrentlocation
	};
}