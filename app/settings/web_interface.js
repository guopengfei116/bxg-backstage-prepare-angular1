/**
 * web接口对应的url与type
 * */
angular
.module('bxg-constant-interface', [])
.constant('webInterfaceConstant', {

	// 登陆退出
	login: {
		url: '/v6/login',
		type: 'post'
	},
	logout: {
		url: '/v6/logout',
		type: 'post'
	},

	// 讲师管理
	teacherList: {
		url: '/v6/teacher',
		type: 'get'
	},
	
	teacherAdd: {
		url: '/v6/teacher/add',
		type: 'post'
	},
	
	teacherEdit: {
		url: '/v6/teacher/edit',
		type: 'get'
	},
	
	teacherModify: {
		url: '/v6/teacher/update',
		type: 'post'
	},
	
	teacherView: {
		url: '/v6/teacher/view',
		type: 'get'
	},
	
	teacherHandle: {
		url: '/v6/teacher/handle',
		type: 'post'
	},
	
	// 个人管理
	profileGet: {
		url: '/v6/teacher/profile',
		type: 'get'
	},
	
	profileModify: {
		url: '/v6/teacher/modify',
		type: 'post'
	},
	
	profileAvatar: {
		url: '/v6/uploader/avatar',
		type: 'post'
	},
	
	repass: {
		url: '/v6/teacher/repass',
		type: 'post'
	},
	
	// 课程分类管理
	categoryList: {
		url: '/v6/category',
		type: 'get'
	},
	
	categoryAdd: {
		url: '/v6/category/add',
		type: 'post'
	},
	
	categoryEdit: {
		url: '/v6/category/edit',
		type: 'get'
	},
	
	categoryModify: {
		url: '/v6/category/modify',
		type: 'post'
	},
	
	categoryTop: {
		url: '/v6/category/top',
		type: 'get'
	},
	
	categoryChild: {
		url: '/v6/category/child',
		type: 'get'
	},
	
	// 课程管理
	courseList: {
		url: '/v6/course',
		type: 'get'
	},
	
	courseAdd: {
		url: '/v6/course/create',
		type: 'post'
	},
	
	courseStep1: {
		url: '/v6/course/basic',
		type: 'get'
	},
	
	courseStep1Modify: {
		url: '/v6/course/basic',
		type: 'get'
	},
	
	courseStep2: {
		url: '/v6/course/picture',
		type: 'get'
	},
	
	courseCover: {
		url: '/v6/uploader/cover',
		type: 'post'
	},
	
	coursePicture: {
		url: '/v6/uploader/picture',
		type: 'post'
	},
	
	// 课时管理
	courseStep3: {
		url: '/v6/course/lesson',
		type: 'get'
	},
	
	chapterAdd: {
		url: '/v6/course/chapter/add',
		type: 'post'
	},
	
	chapterEdit: {
		url: '/v6/course/chapter/edit',
		type: 'get'
	},
	
	chapterModify: {
		url: '/v6/course/chapter/modify',
		type: 'post'
	},
});
