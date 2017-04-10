define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template', 'jqueryForm', 'ckeditor'], 
	function($, common, undefined, undefined, nprogress, undefined, template, undefined, ckeditor) {
	
	/**
	 * 1、通过url参数获取课程id
	 * 2、获取该课程的数据渲染到页面中
	 * 3、页面渲染后，更新左侧编辑步骤
	 * 4、页面渲染后，初始化富文本编辑器
	 * 5、页面渲染后，初始化课程分类二级联动
	 * 6、初始化表单提交插件
	 * */
	
	// 1、通过url参数获取课程id
	var searchObj = common.parseSearch();
	var edit = null;
	
	// 2、获取该课程的数据渲染到页面中
	$.get('/v6/course/basic', { cs_id: searchObj.cs_id }, function(data) {
		if(data.code == 200) {
			$('.steps').html(template('step1-tpl', data.result));
			
			// 渲染完毕后初始化其他内容
			updateStepAside();
			initCkeditor();
			initCourseClassify();
			initForm();
		}
	});
	
	// 3、页面渲染后，更新左侧编辑步骤
	function updateStepAside() {
		$('#course-add-aside a').removeClass('active').first().addClass('active');
	}
	
	// 4、页面渲染后，初始化富文本编辑器
	function initCkeditor() {
		return (edit = ckeditor.replace('brief-textarea'));
	}
	
	// 5、页面渲染后，初始化课程分类二级联动
	function initCourseClassify() {
		
		// 顶级课程分类改变，更新子级分类
		$('#category-top-select').on('change', function() {
			
			// 获取子级分类，动态生成option课程分类子集，添加到对应的select元素中。
			var topId = $(this).val();
			$.get('/v6/category/child', { cg_id: topId }, function(data) {
				var optionHTML = 
					'{{ each list }}\
						<option value="{{ $value.cg_id }}">{{ $value.cg_name }}</option>\
					{{ /each }}';
				var render = template.compile(optionHTML);
				$('#category-child-select').html(render({ list: data.result }));
			});
		});
	}
	
	// 6、初始化表单提交插件
	function initForm() {
		
		// 监听表单提交事件,转为ajax发送
		$('#step-form').on('submit', function() {
			
			// 更新编辑器文本到textarea中.
			edit.updateElement();
			
			$(this).ajaxSubmit({
				data: {
					cs_id: searchObj.cs_id
				},
				success: function(data) {
					if(data.code == 200) {
						location.href = '/html/course/course_add_step2.html?cs_id=' + searchObj.cs_id;
					}
				}
			})
			
			// 阻止默认提交
			return false;
		});
	}
	
	nprogress.done();
});
