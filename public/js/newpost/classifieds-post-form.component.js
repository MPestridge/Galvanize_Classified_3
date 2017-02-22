'use strict';

(() => {
  angular.module('app')
    .component('postForm', {
      controller: controller,
      templateUrl: '/js/newpost/classifieds-post-form.template.html'
    })

  controller.inject = ['http', '$state']

  function controller($http, $state) {
    const vm = this
    vm.postSubmission = postSubmission
    vm.posts = []
    vm.post = {}

    function postSubmission(post) {
      vm.posts.push(vm.post)
      vm.postForm.$setPristine()
      vm.postForm.$setUntouched()
      $http.post('/classifieds', vm.post).then((response) => {
        delete vm.post
      })
      $http.get('/classifieds').then((response) => {
        vm.posts = response.data;
      })
      $state.go('home')
    }
  }
})()
