
(function() {
	'use strict';

	getResource( "https://api.github.com/repos/doc-metrix/memory/contents/spec/index.json", function onSpec( spec ) {
		console.log( window.atob( JSON.parse( spec ).content ) );
	});

	// FUNCTIONS //

	/**
	* FUNCTION: getResource( url, clbk )
	*	Fetches a resource from a provided URL and returns the result to a provided callback.
	*
	* @param {string} url - resource location
	* @param {function} clbk - callback to invoke upon resource receipt. Function should accept one input argument: [ result ]
	*/
	function getResource( url, clbk ) {
		var xhr;
		if ( url && clbk ) {
			// Create a new request object:
			xhr = new XMLHttpRequest();

			// Open the request connection:
			xhr.open( 'GET', url );

			// Define the state change callback:
			xhr.onreadystatechange = function () {
				if ( xhr.readyState != 4 || xhr.status != 200 ){
					return;
				}
				clbk( xhr.responseText );
			};
			// Send the request:
			xhr.send();
		} // end IF (parameters)
	} // end FUNCTION getResource()

})();