define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template', 'uploadify'], 
	function($, common, undefined, undefined, nprogress, undefined, template, uploadify) {
	
	/**
	 * 1、通过url参数获取课程id
	 * 2、获取该课程的封面数据渲染到页面中
	 * 3、页面渲染后，更新左侧编辑步骤
	 * 4、页面渲染后，初始化图片上传插件
	 * 5、页面渲染后，初始化图片裁剪插件
	 * */
	
	// 1、通过url参数获取课程id
	var searchObj = common.parseSearch();
	
	// 2、获取该课程的封面数据渲染到页面中
	$.get('/v6/course/picture', { cs_id: searchObj.cs_id }, function(data) {
		if(data.code == 200) {
			$('.steps').html(template('step-tpl', data.result));
			
			// 渲染完毕后初始化其他内容
			updateStepAside();
			initUoloadify();
		}
	});
	
	// 3、页面渲染后，更新左侧编辑步骤
	function updateStepAside() {
		$('#course-add-aside a').removeClass('active').eq(1).addClass('active');
	}
	
	// 4、页面渲染后，初始化图片上传插件
	function initUoloadify() {
		$('#uploadify').uploadify({
			swf: '/lib/uploadify/uploadify.swf',
			uploader: '/v6/uploader/cover',
			fileObjName: 'cs_cover_original',
			fileTypeExts: '*.gif; *.jpg; *.png',
			fileSizeLimit: '2MB',
			buttonText: '上传封面',
			buttonClass: 'btn btn-success btn-sm',
			height: '100%',
			width: '100%',
			formData: { cs_id: searchObj.cs_id },
			onUploadSuccess: function(file, data) {
				data && $('.cover-img').attr('src', JSON.parse(data).result.path);
			}
		});
	}

	nprogress.done();
});
