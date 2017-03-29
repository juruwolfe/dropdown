// We'll use a settings object to hold some of the basic variables 
// we'll use throughout the dropdown
var settings = {
	isDown: false, //Boolean variable we will use to determine if menu is down
	animationSpeed: 500 // How fast do we want it drop/come up
}

//Call when someone clicks on the div with a class of 'btn'//
$(".btn").click( function(){
	//In english: if our dropdown menu is 'down'
	if(settings.isDown == true){
		//It's down, and they clicked, so slide it up
		$(".dropdown").slideUp(settings.animationSpeed);
		//Now that it slide up, set our boolean to false, it's no longer up
		settings.isDown = false;
	}
	//We don't need any other if statements, because we're only using a 
	// true/false value, so we know if it's not true, it's false
	else{
		//It's not down, and they clicked, so slide it down 
		$(".dropdown").slideDown(settings.animationSpeed);
		//Now that it's down, change our isDown variable to reflect that
		settings.isDown = true;
	}
});
//Ends the button click function//


//Call when someone clicks on something with a class of 'choice'//
$(".choice").click( function(){
	/***************************************************   
	OPTIONAL: Uncomment the two lines below to have the
	dropdown slide up when a user selects a choice
	***************************************************/
	//$(".dropdown").slideUp(settings.animationSpeed);
	//settings.isDown = false;

	//Get the text of the .choice item the user just clicked on
	var userChoice = $(this).text();
    
    //Concatenate that choice with some text of our choosing, and 
    //set it as the text of our paragraph with the userChoice class
	$(".userChoice").text("You're favorite city is: "+userChoice);

	//Get all of the choice items *except* the one we just clicked on.  
	//Make sure none of them have the 'active' class 
	$(this).siblings(".choice").removeClass('active');
	//Add the active class to the one we just clicked
	$(this).addClass("active");
})
