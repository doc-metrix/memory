
(function() {
	'use strict';

	getResource( "https://api.github.com/repos/doc-metrix/memory/contents/spec/index.json", onSpec );

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
	* FUNCTION: onSpec( blob )
	*	Handler for receiving a spec resource.
	*
	* @private
	* @param {String} blob - content blob which will be parsed as JSON
	*/
	function onSpec( blob ) {
		var spec = window.atob( JSON.parse( blob ).content );
		getFormulas( spec );
	} // end FUNCTION onSpec()

	/**
	* FUNCTION: getFormulas( spec )
	*	Extracts formulas from the specification and inserts them into the DOM.
	*
	* @private
	* @param {Object} spec - metric specification
	*/
	function getFormulas( spec ) {
		var keys = Object.keys( spec ),
			cache = [],
			name,
			metric,
			formula,
			el;

		// Slugify the keys, lowercase, and extract the formula:
		for ( var i = 0; i < keys.length; i++ ) {
			metric = spec[ keys[ i ] ];
			formula = metric.formula;
			if ( formula ) {
				name = keys[ i ]
					.split( '.' )
					.join( '' )
					.toLowerCase();
				cache.push({
					'name': name,
					'formula': formula
				});
			}
		} // end FOR i

		// Use jQuery to select the table sibling following our metric of interest. We will insert the formula just after the table.
		for ( var j = 0; j < cache.length; j++ ) {
			name = cache[ j ].name;
			el = $( 'a[name="'+name+'"]' ).next( 'table' );
			el.before( '<p>Hello\n\n</p>' );
		}

	} // end FUNCTION getFormulas()

})();