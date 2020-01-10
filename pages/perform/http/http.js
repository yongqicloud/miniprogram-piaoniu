export const get = ({ url, contentType}) => {
	return new Promise((resolve)=>{
		wx.request({
			url,
			method: 'get',
			dataType: 'json',
			header: {
				'content-type': contentType ? contentType:'application/x-www-form-urlencoded'
			},
			success: (res) => {
				// console.log(res)
				resolve(res)
			}
		})
	}) 
}
export const post = ({ url }) => {
	return new Promise((resolve) => {
		wx.request({
			url,
			method: 'post',
			dataType: 'json',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				// console.log(res)
				resolve(res)
			}
		})
	})
}


