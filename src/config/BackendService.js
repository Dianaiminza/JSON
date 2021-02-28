import axios from 'axios';
let instance = axios.create({
  baseURL: 'http://localhost:8000'
});

instance.interceptors.request.use( config => {
  const user = JSON.parse(window.localStorage.getItem('user',));
  if(user && user.access_token){
    const token = 'Bearer ' + user.access_token;
    config.headers.Authorization =  token;
  }
  return config;
});
class BackendService {
  getUserBoard() {
    return instance.get("/");
  }
  getAllCats(){
    return instance.get('/cats')
  }
  GetCatById(){
    return instance.get('http://localhost:8000/cats')
  }
}

export default new BackendService();