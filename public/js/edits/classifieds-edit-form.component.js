'use strict';

(() => {
  angular.module('app')
    .component('editForm', {
      controller: controller,
      templateUrl: '/js/edits/classifieds-edit-form.template.html'
    });

  controller.inject = ['$stateParams', '$http', '$state']

  function controller($stateParams, $http, $state) {
    const vm = this
    vm.postEdit = postEdit

    let stateParamsId = $stateParams.id
    $http.get(`/classifieds/${stateParamsId}`).then((response) => {
      vm.edit = response.data
    })

    function postEdit() {
      $http.patch(`/classifieds/${stateParamsId}`, vm.edit).then((response) => {
        console.log(response.data)
      })
      $state.go('home')
    }
  }

})();
