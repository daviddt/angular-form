angular.module("myFormApp")
	.directive("usernameFirstLetter", usernameFirstLetter);

usernameFirstLetter.$inject = [];

function usernameFirstLetter () {
	
	function isLetter(str) {
	  return !!(str.length === 1 && str.match(/[a-z]/i));
	}
	
	return {
		require: "ngModel",
		link: function(scope, ele, attrs, ctrl){

			ctrl.$parsers.unshift(function(value) {
				if(value){
			  		// test if first char is a letter
			  		var isValid = isLetter(value.charAt(0));
			  		ctrl.$setValidity('nameNotValid', isValid);
				}

				// if it's valid, return the value to the model,
				// otherwise return undefined.
				return isValid ? value : undefined;
			});

		}
	}
}
