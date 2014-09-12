(function() {
	'use strict';

	getResource( 'https://github.com/repos/doc-metrix/memory/contents/README.md', onReadme );

	// FUNCTIONS //

	/**
	* FUNCTION: getResource( url, clbk )
	*	Fetches a resource from a provided URL and returns the result to a provided callback.
	*
	* @private
	* @param {String} url - resource location
	* @param {Function} clbk - callback to invoke upon resource receipt. Function should accept one input argument: [ result ]
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

	/**
	* FUNCTION: onReadme( blob )
	*	Handler for receiving a README resource.
	*
	* @private
	* @param {String} blob - content blob which will be parsed as JSON
	*/
	function onReadme( blob ) {
		var content = window.atob( JSON.parse( blob ).content );
		render( content );
	} // end FUNCTION onReadme()

	/**
	* FUNCTION: render( content )
	*	Renders Markdown as HTML.
	*
	* @private
	* @param {String} content - Markdown to render
	*/
	function render( content ) {
		var html = marked( content );
		document.getElementById( 'readme' ).innerHTML = html;
	} // end FUNCTION render()

})();