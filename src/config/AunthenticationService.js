import axios from "axios";
class AuthenticationService {
  signin = (email, password) => {
      return axios.post("http://localhost:8000/user/login", {email, password})
        .then(response => {
          
          if (response.data.access_token) {
            window.localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
          }

          throw new Error('No token')
          
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }
  signOut() {
    window.localStorage.removeItem("user");
  }

  register = async(name, email, password) => {
    return axios.post("http://localhost:8000/user/signup", {
      name,
      email,
      password
    });
  }
  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  getAllCats() {
    return JSON.parse(localStorage.getItem('cats'));
  }
}

export default new AuthenticationService();