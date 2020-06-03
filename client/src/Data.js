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
    //requires auth
    return fetch(url, options)
   }

   //USER
   async getUser(emailAddress, password) {
       const response = await this.api(`/users`, 'GET', null, true, {emailAddress, password});
       
       if(response.status === 200) {
        console.log(response)
           return response.json().then(data => data)
       } else if (response.status === 401) {
        console.log(response)
          return null
       } else {
           throw new Error()
       }
   }


   async createUser(user) {
    const response = await this.api(`/users`, 'POST', user);
    //500 error if user already exists
    if(response.status === 201) {
        return []
    } else if (response.status === 400) {
        return response.json().then(data => {
            return data
        })
    } else {
        throw new Error()
    }

   }

   //COURSES
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
       const response = await this.api(`/courses/${id}`, 'GET');
       if (response.status === 200) {
           console.log(`200, got the course`);
           return response.json()
       } else {
           console.log(`course doesnt exist`)
       }
   }
   async handleDelete(id) {
       const response = await this.api(`/courses/${id}`, 'DELETE')
       if (response.status === 204) {
           console.log(`deleted`)
       } else {
           console.log(`forbidden`)
       }
   }
}
