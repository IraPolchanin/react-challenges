# Challenge

	The updatePosition function below needs to be finished for Pookachu to move and escape the prison! Your task is to complete the function as follows:
	
		1. When the updatePosition function is invoked, it should use the setPookachu function to 
		   update the pookachu state object (line 49), in accordance with the boundaries state object (line 55), in the way described in the next step. With these two states, the following properties are particularly important for this challenge: 
		   
		+======================+============================================================+
		|   Name of Property   |                Meaning of Property                         |
		+======================+============================================================+
		| pookachu.xPosition   | Pookachu's current position on the x-axis                  |
		+----------------------+------------------------------------------------------------+
		| pookachu.yPosition   | Pookachu's current position on the y-axis                  |
		+----------------------+------------------------------------------------------------+
		| pookachu.direction   | The direction he's facing: "left", "right", "up" or "down" |
		+----------------------+------------------------------------------------------------+
		| boundaries.xAxis.min | The lowest possible value Pookachu's xPosition can be*     |
		+----------------------+------------------------------------------------------------+
		| boundaries.xAxis.max | The highest possible value Pookachu's xPosition can be*    |
		+----------------------+------------------------------------------------------------+
		| boundaries.yAxis.min | The lowest possible value Pookachu's yPosition can be*     |
		+----------------------+------------------------------------------------------------+
		| boundaries.yAxis.max | The highest possible value Pookachu's yPosition can be*    |
		+----------------------+------------------------------------------------------------+
		
			* All of these values are inclusive. 
			  Pookachu's position can be on a boundary; it cannot exceed a boundary.  
		  					   
		2. The pookachu state object should be updated as follows: 
		
				- If the user is trying to make Pookachu move past one of the game's boundaries 
				  (above a max value or below a min value on the relevant axis — the axis of the direction he's facing), then his current position should not change, and all of the pookachu state object's current property values should be preserved. 
				   
				- If Poocahu hasn't yet reached the boundary of the direction the user wants him to   go, then either his xPosition or yPosition (the "target property") should be    
				  updated in accordance with the following table. All other property values of the pookachu state object should be preserved.  

	+====================+=================================================+=======================+
	| pookachu.direction |    pookachu target property & limit to check    |  updated target value |
	+====================+=================================================+=======================+
	|      "right"       |         xPosition < boundaries.xAxis.max        | current xPosition + 1 |
	+--------------------+-------------------------------------------------+-----------------------+
	|      "left"        |         xPosition > boundaries.xAxis.min        | current xPosition - 1 |
	+--------------------+-------------------------------------------------+-----------------------+
	|      "down"        |         yPosition < boundaries.yAxis.max        | current yPosition + 1 |
	+--------------------+-------------------------------------------------+-----------------------+
	|       "up"         |         yPosition > boundaries.yAxis.min        | current yPosition - 1 |
	+--------------------+-------------------------------------------------+-----------------------+
	
		3. When you've completed the challenge, you should be able to move Pookachu in any 
		   direction using the direction pad on the screen or the arrow keys on your keyboard, while staying within the boundaries of the prison. You should also be able to escape the prison if you blow up the door using the A and B buttons! 

