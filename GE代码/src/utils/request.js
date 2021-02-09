import axios from 'axios' // 引用axios

//request拦截器 添加一个请求拦截器  
axios.interceptors.request.use(function (config) {
	let token = window.localStorage.getItem("token")
	if (token) {
  	// 设置请求头
	 config.headers.common['Authorization'] = token
	}
	return config
}, function (error) {
	//如果请求出错在此执行某些操作
	return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
	//登录超时
	if(response.data.code==400){
		router.push('/')
	}
	return response;
}, function (error) {
	return Promise.reject(error);
});