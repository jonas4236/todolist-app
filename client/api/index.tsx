const URL_SERVER = "http://localhost:5277/api/Todo"

export const server = {
  API_GET_TODO: `${URL_SERVER}`,
  API_GET_SINGLE_TODO: `${URL_SERVER}/single/id`,
  API_POST_TODO: `${URL_SERVER}/create`,
  API_PUT_TODO: `${URL_SERVER}/update`,
  API_REMOVE_TODO: `${URL_SERVER}/remove/id`
}
