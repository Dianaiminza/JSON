var http = require('http');
class CatDataService {
  getAll() {
    return http.get("/cats");
  }

  get(id) {
    return http.get(`/cats/${id}`);
  }

  create(data) {
    return http.post("/cats", data);
  }

  update(id, data) {
    return http.put(`/cats/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cats/${id}`);
  }

  deleteAll() {
    return http.delete(`/cats`);
  }

 
}

export default new CatDataService();