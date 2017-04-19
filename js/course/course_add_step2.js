define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template', 'uploadify', 'jcrop', 'jqueryForm'], 
	function($, common, undefined, undefined, nprogress, undefined, template, uploadify, uploadify, uploadify) {
	
	/**
	 * 1、通过url参数获取课程id
	 * 2、获取该课程的封面数据渲染到页面中
	 * 3、页面渲染后，更新左侧编辑步骤
	 * 4、页面渲染后，初始化图片上传插件
	 * 5、页面渲染后，初始化图片裁剪插件
	 * */
	
	// 1、通过url参数获取课程id
	var csId = common.parseSearch('cs_id');
	
	// 2、获取该课程的封面数据渲染到页面中
	$.get('/v6/course/picture', { cs_id: csId }, function(data) {
		if(data.code == 200) {
			$('.steps').html(template('step-tpl', data.result));
			
			// 渲染完毕后初始化其他内容
			updateStepAside();
			initUoloadify();
			tailor();
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
			itemTemplate: '<i></i>',
			height: '100%',
			width: '100%',
			formData: { cs_id: csId },
			onUploadSuccess: function(file, data) {
				if(data.code == 200) {
					$('.cover-img').attr('src', JSON.parse(data).result.path);
				}
			}
		});
	}
	
	// 5、页面渲染后，初始化图片裁剪插件
	var jcp = null;
	function tailor() {
		
		// 裁剪按钮，如果已经裁剪那么再次点击保存裁剪结果
		$('#tailor-btn').on('click', function() {
			var $self = $(this);
			if($self.text() === '裁切图片') {
				$('.cover-img').Jcrop({
					aspectRatio: 2,
					boxWidth: 400,
					setSelect: [20, 20, 100, 100]
				}, function() {
					jcp = this;
					this.container.on('cropend', function(e, s, o) {
						$('#clip-x-input').val(o.x);
						$('#clip-y-input').val(o.y);
						$('#clip-w-input').val(o.w);
						$('#clip-h-input').val(o.h);
						$self.text('保存');
					});
				});
			}else {
				$('#picture-clip-form').ajaxSubmit(function(data) {
					data.code == 200 && (location.href = '/html/course/course_add_step3.html?cs_id=' + csId);
				});
			}
		});
	}

	nprogress.done();
});
