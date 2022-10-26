import http from "../http-common";

const getAll = () => {
  return http.get("/researchform");
};

const get = id => {
  return http.get(`/researchform${id}`);
};

const create = data => {
  return http.post("/researchform", data);
};

const update = (id, data) => {
  return http.put(`/researchform/${id}`, data);
};

const remove = id => {
  return http.delete(`/researchform/${id}`);
};

const removeAll = () => {
  return http.delete(`/researchform`);
};

const findByTitle = title => {
  return http.get(`/researchform?title=${title}`);
};

const ReseachFormDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

