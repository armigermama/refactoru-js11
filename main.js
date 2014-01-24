//#2. 	Add a submit handler to the form element. On submit, update the text of user's profile below. 
//		You will have to cancel the default browser behavior, otherwise the submit will refresh the page.

//#3.	Change the CSS so that the form is hidden when the page loads.
//#4.	Add a 'Show Form' button which, when clicked, makes the form visible for the user to edit. 
//		('Toggling' css properties can be done by either with the .css method or 
//		the .addClass method. Which approach is better?)
//#5.	When the form is hidden, the button should say 'Show Form'. 
//		When the form is shown, the button should say 'Hide Form' and perform the appropriate action.

//Bonus
//Add an 'auto-save' feature: Remove the submit button, and 
//add keydown event handlers to the input elements to update the user's profile immediately when 
//any value in the form changes.

$(document).ready (function(){

	$('#submit-button').on('click', function(){
		event.preventDefault();

		var names = $('#user-name').val();
		var bios = $('#user-bio').val();
		var books = $('#user-books').val();
		var favJss = $('#user-fav-js').val();
		$('#input-name').text(names);
		$('#input-bio').text(bios);
		$('#input-books').text(books);
		$('#input-fav-js').text(favJss);
		console.log($('names'));

	});
}); 	