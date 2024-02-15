# Challenge

The user's activities have been saved as keys for the Bored API. Your task is to use the keys to get the activities data as follows: 
    
        1. When the page loads, activity data should be fetched from the Bored API for each of the 
		   20 keys in the savedActivityKeys array below. Read the API_Documentation.md file to learn how to complete these fetches. 
        
        2. The data should be saved as a series of 20 JavaScript objects (one for each 
           key/response/activity) in the activities state array.  
           
        3. Get rid of the placeHolderData that is currently set as the activitiesData state. This 
		   data is just meant to give you an idea of the content, format, and utility of the real data. You should end up with 20 activity cards with real data from the API on them. 
        
    Note: All you need to do is set the activitiesData state in the way described above. If you do this correctly, the activityCardElements variable on line 33 below will take care of rendering the activity cards for you. 
