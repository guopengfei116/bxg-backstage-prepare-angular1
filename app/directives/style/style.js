/**
 * Created by sunShine on 2017/4/21.
 */
angular
.module('bxg-directive-style',[])
.directive('myStyle', function () {
        return {
            templateUrl:'/app/directives/style/style.html',
            replace :true,
            restrict:'E'
        }
    })