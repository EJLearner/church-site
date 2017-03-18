$(document).ready(function() {

    // process the idea form
    /*$('form[id=institutereg]').submit(function(event) {
		alert('starting script');
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'first_name'              : $('input[name=first_name]').val(),
            'last_name'              : $('textarea[name=last_name]').val(),
            'address'              : $('input[name=address]').val(),
            'city'              : $('input[name=city]').val(),
            'state'              : $('input[name=state]').val(),
            'zip'              : $('input[name=zip]').val(),
            'phone'              : $('input[name=phone]').val(),
            'email'              : $('input[name=email]').val(),
            'number'              : $('input[name=number]').val(),
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'instituteregprocess.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
				if ( ! data.success) {
					event.preventDefault();
				}
				else{
				
				 // ALL GOOD! just show the success message!
            $('form').append('<div class="alert alert-success">' + data.message + '</div>');

            // usually after form submission, you'll want to redirect
            // window.location = '/thank-you'; // redirect a user to another page
            //alert('success'); // for now we'll just alert the user
				}
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });
	*/
	// process the idea form
    $('form[id=ideaform]').submit(function(event) {
		//alert('starting script');
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'ideatype'              : $('input[name=ideatype]').val(),
            'ideadesc'              : $('textarea[name=ideadesc]').val(),
            'name'              : $('input[name=name]').val(),
            'email'              : $('input[name=email]').val(),
            'phone'              : $('input[name=phone]').val(),
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'ideaformprocess.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
				 // ALL GOOD! just show the success message!
            $('form').append('<div class="alert alert-success">' + data.message + '</div>');

            // usually after form submission, you'll want to redirect
            window.location = '/christianedu.php?p=opinionsent'; // redirect a user to another page
            //alert('success'); // for now we'll just alert the user
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

	

	
});