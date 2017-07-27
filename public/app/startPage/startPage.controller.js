'use strict'

angular
  .module('app')
  .controller('StartPageController', StartPageController);
/* @ngInject */
function StartPageController($rootScope, $state, $stateParams, $localStorage, StartPageServise) {
  var vm = this;
  vm.username = '';
  vm.user = '';
  vm.message = '';

  vm.addUsername = function () {
    console.log(vm.username)
    vm.message = '';
    StartPageServise
      .get({ username: vm.username })
      .$promise
      .then(function (res) {
        console.log(res);
        vm.user = res.data;
        if (res.error) {
          vm.message = "Error";
        }
      })
      .catch(function (err) {
        vm.message = "Error";
        console.error(err);

      });
  }

  document.onkeyup = function (e) {
    vm.message = '';
    e = e || window.event;
    if (e.keyCode === 13) {
      StartPageServise
        .get({ username: vm.username })
        .$promise
        .then(function (res) {
          console.log(res);
          vm.user = res.user;
          if (res.error) {
            vm.message = "Error";
          }
        })
        .catch(function (err) {
          vm.message = "Error";
          console.error(err);
        });
    }
    return false;
  }

  vm.moreInfo = function (action) {
    console.log(vm.username)
    vm.message = '';
    console.log(action)
    StartPageServise
      .get({ username: vm.username, action: action })
      .$promise
      .then(function (res) {
        console.log(res);

        if (res.error) {
          vm.message = "Error";
        }
      })
      .catch(function (err) {
        vm.message = "Error";
        console.error(err);
      });
  }


}
