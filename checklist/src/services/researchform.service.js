import http from "../http-common";

class ResearchFormDataService {
  getAll() {
    return http.get("/researchforms");
  }

  get(id) {
    return http.get(`/researchforms/${id}`);
  }

  create(data) {
    return http.post("/researchforms", data);
  }

  update(id, data) {
    return http.put(`/researchforms/${id}`, data);
  }

  delete(id) {
    return http.delete(`/researchforms/${id}`);
  }

  deleteAll() {
    return http.delete(`/researchforms`);
  }

  findByTitle(title) {
    return http.get(`/researchforms?title=${title}`);
  }
}

export default new ResearchFormDataService();