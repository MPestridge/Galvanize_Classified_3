'use strict';

(() => {
  angular.module('app')
    .component('classifiedsList', {
      controller: controller,
      templateUrl: '/js/posts/classifieds-list.template.html'
    });

  controller.inject = ['$http']

  function controller($http) {
    const vm = this
    vm.$onInit = onInit
    vm.posts = []
    vm.postDelete = postDelete
    vm.valueFinder = valueFinder

    function onInit() {
      $http.get('/classifieds').then((response) => {
        vm.posts = response.data;
      })
      vm.currentValue = ""
    }

    function postDelete(id) {
      $http.delete(`/classifieds/${id}`).then((response) => {
        $http.get('/classifieds').then((response) => {
          vm.posts = response.data;
        })
      })
    }

    vm.sortValue = ['None', 'Created At', 'Price']

    function valueFinder(value) {
      vm.currentName = value
      vm.currentValue = value.toLowerCase().replace(/ /g,"_")
    }

  }
})();
