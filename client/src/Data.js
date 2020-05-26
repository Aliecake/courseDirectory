import config from './config';

export default class Data {
   api(path, method, body = null) {
    const url = config.apiBaseUrl + path;

    const options = {
        method,
        headers: {
            'Content-Type' : 'application/json; charset=utf-8'
        },
    }

    if (body !== null) {
        options.body = JSON.stringify(body)
    }

    return fetch(url, options)
   }

   async getCourses() {
       const response = await this.api('/courses', 'GET');
       if (response.status === 200) {
           console.log(`200 OK - got courses`)
           return response.json()
       } else {
           console.log(`no courses`)
       }
   }
   async getOneCourse(id) {
       console.log(id)
       const response = await this.api(`/courses/${id}`, 'GET');
       if (response.status === 200) {
           console.log(`200, got the course`);
           return response.json()
       } else {
           console.log(`course doesnt exist`)
       }
   }
}
