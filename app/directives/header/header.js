/**
 * Created by sunShine on 2017/4/21.
 */
angular
.module('bxg-directive-header',[])
.directive('bxgHeader', function () {
        return {
            templateUrl:'/app/directives/style/header.html',
            replace:true,
            restrict:'C'
        }
    })