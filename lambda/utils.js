import apiConfig from 'apiConfig'
const REQUEST_METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

function createRequest(method, endpoint, options) {
    let req = request[method](`${apiConfig.apiUrl}/${endpoint}`)
    if (options) {
        if (method === REQUEST_METHODS.GET) {
            req = req.query(options)
        } else if ([REQUEST_METHODS.POST, REQUEST_METHODS.PUT].includes(method)) { 
            req = req.send(options)
        }
    }
    return req.then(response => response.body).catch(err => console.error(err))
}
