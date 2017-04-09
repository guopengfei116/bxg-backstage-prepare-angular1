define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading'], 
	function($, undefined, Header, undefined, nprogress, loading) {
		
	// 退出功能
	new Header().logout();

	// 页面所有代码执行完毕，进度条结束
	nprogress.done();
});
