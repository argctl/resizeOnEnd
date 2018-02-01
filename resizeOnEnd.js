
            $(window).resize(function(){
               	//call to resizeEnd function to execute function on resize end.
		//can be passed as function name or anonymous function
                resizeEnd(function(){
		
		
		
		});
                
            });
            
            //global variables for reference outside of interval
            var interval = null;
            var width = $(window).width();
 	    var numi = 0; //can be removed in production
            function resizeEnd(functionCall){
                //check for null interval
                if(!interval){
                    //set to new interval
                    interval = setInterval(function(){
			//get width to compare
                        width2 = $(window).width();
			//if stored width equals new width
                        if(width === width2){
                            //clear interval, set to null, and call passed function
                            clearInterval(interval);
                            interval = null; //precaution
                            functionCall();
                            
                        }
			//set width to compare on next interval after half a second
                        width = $(window).width();
                    }, 500);
                    
                }else{
                    //logging that should be removed in production
                    console.log("function call " + numi++ + " and inteval set skipped");
                    
                }
                
                
            }
