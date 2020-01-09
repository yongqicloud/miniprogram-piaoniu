import { get } from '../http/http.js'

export const setDatalist =({url})=>{
	get({
		url
	}).then((res) => {
		console.log(res)
		this.setData({
			datalist: res.data.data
		}, () => {
			console.log(this.data.datalist)
		})
	})
}


