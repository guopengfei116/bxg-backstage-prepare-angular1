define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'jqueryForm'], 
	function($, common, undefined, undefined, nprogress, undefined, jqueryForm) {
		
	// 修改密码，成功后退出登陆
	$('#repass-form').ajaxForm(function(data) {
		if(data.code == 200) {
			$('#logout').trigger('click');
		}
	});
	
	nprogress.done();
});
