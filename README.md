# Challenge

	Something important isn't yet working on this synth keyboard: the keys! Your task is to allow the user to play the keys with either their mouse button or computer keyboard as follows:  
	
		1. When a user plays a synth key with their mouse button or computer key, the active 
		   property of the synth key's corresponding object in the synthKeys state array should be set to true. 
		   
				   - Playing a synth key with the mouse button means pressing the mouse button  
				     down (*not* clicking) on the synth key. 
					 
				   - Playing a synth key with a computer key means pressing down the computer key 
				     corresponding to it, as defined by the synth key's corresponding computerKey property in the synthKeys state array. 
				
		2. If the user plays a synth key by pressing down a computer key, the keyPressed property 
		   of the synth key's corresponding object in the synthKeys state array should also be set to true. When the user lifts up the computer key, the keyPressed property should be set back to false. 
		   
		3. All other properties of the object and all other objects in the synthKeys state array 
		   should be preserved every time the state is updated. Only the active property and (if applicable) the keyPressed property of the targeted object should be changed. 
		
		4. You should only write code for three event handlers below to complete the challenge. No 
		   other code should be changed or added anywhere else in the project. You should also check the keys for bugs before finishing the challenge. Play some music on it 
		   to simulate how a user is likely to interact with it. 
		   
		Note: If you have a non-QWERTY keyboard, feel free to change the computerKey properties in the synthKey state array to computer keys that make more sense for your keyboard layout!
		
		Tip: Add onClick={(e)=>console.log(e.target)} to the "main-container" div and click on the keys to familiarize yourself with the underlying DOM, or look at the Keys component in the components folder.  

