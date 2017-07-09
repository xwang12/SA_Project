(function() {
  	'use strict';

	angular
		.module('myApp')
		.controller('MainController', MainController);

	MainController.$inject = ['$uibModal', '$cookies'];

	function MainController($uibModal, $cookies) {
		let self = this;
		self.openModal = openModal;

		/**
		* Console log timestamp and set/get page variation.
		* Open dialog modal.
		*/
		function openModal() {
			//Create timestamp object
			const timestamp = { session_id: new Date().getTime() };
			console.log(timestamp);

			//Get and/or set page variation
			let imgId = '';
			if($cookies.imgValue !== undefined) {
				imgId = $cookies.imgValue;
			} else {
				imgId = Math.floor(Math.random() * 2).toString();
				$cookies.imgValue = imgId;
			}

			//Modify modal instance
			const modalInstance = $uibModal.open({
				appendTo: angular.element(document).find('aside'),
				animation: true,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'myModalContent',
				controller: 'ModalController',
				controllerAs: 'ctrl',
				resolve: {
					imgId:function() {
			          	return imgId;
			        }
				},

		    });

			//Display modal data to browser console
		    modalInstance.result.then(function(data) {
		      	console.log(data);
		    }, function() {});
		}
	}
})();