
$(document).ready( function() {
	$.get("/api/users", function(data, status){
    	for( i = 0; i < data.length; i++) {
    		$('.score1').append(data[i].money); 
    		$('.score1').append("</br>"); 
    	} 

	})

	$.get("/api/rooms", function(data, status){
		for( i = 0; i < data.length; i++){

			$('.room1').append(data[i].id).append(" ").append(data[i].small_blind); 
			$('.room1').append("</br>"); 
		}
	})

	

})

