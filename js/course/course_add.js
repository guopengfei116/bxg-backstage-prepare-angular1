define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template', 'jqueryForm'], 
	function($, common, undefined, undefined, nprogress, undefined, template, undefined) {
	
	// 课程创建，成功后跳转到课程编辑第一页，同时传入cs_id
	$('#course-add-form').ajaxForm(function(data) {
		(data.code == 200) && (location.href = '/html/course/course_add_step1.html?cs_id=' + data.result.cs_id );
	});
	
	nprogress.done();
});
