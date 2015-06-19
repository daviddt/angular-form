angular.module("myFormApp")
	.directive("usernameAvailableChecker", usernameAvailableChecker);

usernameAvailableChecker.$inject = ["$q", "$timeout"];

function usernameAvailableChecker ($q, $timeout) {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var usernames = ["David"];
			
			/**
			 * asyncValidator to check if the username is already taken or not
			 * @param {string} value The username
			 * @returns {object} $error / $valid
			 */
			ctrl.$asyncValidators.username = function(value) {
				if (ctrl.$isEmpty(value)) {
					// Return nothing when we have no value
					return $q.when();
				}

				var def = $q.defer();

				$timeout(function() {
					// mock een timeout
					if (usernames.indexOf(value) === -1) {
						// the username is available
						def.resolve();
					} else {
						// the username not available
						def.reject();
					}

				}, 1000);

				return def.promise;
			};
		}
	}
}