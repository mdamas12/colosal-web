export default function tokenHeader() {
    let token = localStorage.getItem('token');
    if (token) {
      return { 
            'Authorization': "Token " + token
        };
    } else {
      return {};
    }
  }