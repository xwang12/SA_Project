(function() {
  	'use strict';

	angular
		.module('myApp')
		.controller('ModalController', ModalController);

	ModalController.$inject = ['$uibModalInstance', 'imgId'];

	function ModalController($uibModalInstance, imgId) {

		//Variables
		let self = this;
		self.imgName = imgId + '.jpg';
		self.isValid = true;
		self.states = [ "AK","AL","AR", "AS","AZ","CA","CO",
		"CT","DC","DE","FL","GA","GU","HI","IA","ID","IL",
		"IN","KS","KY","LA","MA","MD","ME","MI","MN","MO",
		"MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY",
		"OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
		"UT","VA","VI","VT","WA","WI","WV","WY"]
		self.name = '';
		self.email = '';
		self.phone = '';
		self.address = '';
		self.city = '';
		self.stateOption = '';
		self.zipcode = '';
		
		//functions
		self.nameChanged = nameChanged;
		self.checkValid = checkValid;
		self.cancel = cancel;
		self.submit = submit;

		/**
		* Log input to browser console, when name field's value is changed.
		*/
		function nameChanged() {
			console.log(self.name);
		}

		/**
		* Check if e-mail field's value is valid, when it lost focus.
		* @param result, true if the value is valid, false if invalid.
		*/
		function checkValid(result) {
			if(!result) {
				self.isValid = false;
			} else {
				self.isValid = true;
			}
		}

		/**
		* Close modal
		*/
		function cancel() {
    		$uibModalInstance.dismiss('cancel');
		}

		/**
		* Send form data back to main controller.
		* @param isValid, true if e-mail field's value is valid, false if invalid.
		*/
		function submit(isValid) {
			if(isValid) {
				const data = {
					variation: imgId,
					name: self.name,
					email: self.email,
					phone: self.phone,
					address: self.address,
					city: self.city,
					state: self.stateOption,
					zipcode: self.zipcode,
				}
				$uibModalInstance.close(data);
			}
		}
	}
})();