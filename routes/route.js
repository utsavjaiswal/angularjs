	// routing configuration for angular app
	sampleApp.config(function($routeProvider) {
		$routeProvider

			// route for home page
			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'HomeController'
			})

			// route for about page
			.when('/about', {
				templateUrl : 'views/about.html',
				controller  : 'AboutController'
			})

	});
