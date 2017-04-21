/**
 * Created by sunShine on 2017/4/21.
 */
angular.module('bxg-directive-script',[])
.directive('bxgScript', function () {
        return {
            templateUrl:'/app/directives/style/script.html',
            replace:true,
            restrict:'M'
        }
    })