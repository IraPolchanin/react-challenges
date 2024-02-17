# Challenge 
    
     1. If the user's cursor goes down or up anywhere inside the "wrapper" div, the "mouseDown"     
        state should be set to true or false, respectively. In other words:
     
              User's mouse button        mouseDown =                      
            ╷---------------------╷---------------------╷                   
            |       is down       |        true         |
            |---------------------|---------------------|
            |        is up        |        false        |
            ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯    
     
     2. If mouseDown is true and if the user's cursor enters any of the "pixel" divs, that div's 
        corresponding pixel data object in the pixels state array should have its "filled" property set to true if "wantsToDraw" is true and set to false if "wantsToDraw" is false. In other words, if mouseDown === true && the user's cursor enters the div corresponding to pixel[n],
     
                  wantsToDraw         pixel[n].filled                     
            ╷---------------------╷---------------------╷                   
            |       true          |        true         |
            |---------------------|---------------------|
            |       false         |        false        |
            ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
     
     3. All other properties of this and every other pixel data object should be preserved. In 
        other words, only the "filled" property of the particular pixel data object being targeted should be altered. Everything else should stay the same. 
        
    4. You should only add to the code below. Nothing else needs to be changed anywhere in this or 
       any other file!

