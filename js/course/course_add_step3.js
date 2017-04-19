define(['jquery', 'bootstrap', 'common', 'header', 'aside', 'nprogress', 'loading', 'template', 'uploadify', 'jqueryForm'], 
	function($, undefined, common, undefined, undefined, nprogress, undefined, template, uploadify, undefined) {
	
	/**
	 * 一、主体渲染
	 * 1、通过url参数获取课程id
	 * 2、获取该课程的封面数据渲染到页面中
	 * 3、页面渲染后，更新左侧编辑步骤
	 * 
	 * 二、添加编辑功能
	 * 4、委托方式绑定课时添加与编辑按钮的点击事件
	 * 5、点击发生后获取数据渲染课时添加模态框页面结构
	 * 6、委托方式给模态框中的提交按钮绑定点击事件，事件发生时ajax方式提交表单
	 * */
	
	// 1、通过url参数获取课程id
	var searchObj = common.parseSearch();
	
	// 2、获取该课程的封面数据渲染到页面中
	$.get('/v6/course/lesson', { cs_id: searchObj.cs_id }, function(data) {
		if(data.code == 200) {
			$('.steps').html(template('step-tpl', data.result));
			
			// 渲染完毕后初始化其他内容
			updateStepAside();
		}
	});
	
	// 3、页面渲染后，更新左侧编辑步骤
	function updateStepAside() {
		$('#course-add-aside a').removeClass('active').last().addClass('active');
	}

	// 4、委托方式绑定课时添加与编辑按钮的点击事件，点击后填出课时模态框
	// 5、点击发生后获取数据渲染课时添加模态框页面结构
	(function lessonAddEdit() {

		// 添加课时，需要额外提交课时所属的课程id
		$(document).on('click', '#lesson-add', function() {
			renderModalContent({
				ct_cs_id: searchObj.cs_id
			});
		});

		// 编辑课时，需要额外提交课时的id，以及课时所属的课程id
		$(document).on('click', '#lesson-edit', function() {
			$.get('/v6/course/chapter/edit', { 
				ct_cs_id: searchObj.cs_id,
				ct_id: $(this).data('ct-id')
			}, function(data) {
				renderModalContent(data.result);
	        });
		});

		// 渲染模态框
		function renderModalContent(data) {
			$('.modal-content').html(template('modal-content-tpl', data));
		}
	})();

	// 6、委托方式给模态框中的提交按钮绑定点击事件，事件发生时ajax方式提交表单
	(function initLessonAddEditForm() {

		// 表单提交成功后刷新当前页
		$(document).on('click', '#lesson-add-edit-btn', function() {
			var ct_is_free =  $('#ct-is-free-input').prop('checked');
			$('#lesson-add-edit-form').ajaxSubmit({
				data: {
					ct_is_free: ct_is_free? 1: 0
				},
				success: function(data) {
					data.code == 200 && location.reload();
				}
			});
		});

	})();

	nprogress.done();
});
