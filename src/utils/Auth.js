class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(userDetails) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      var auth = JSON.parse(localStorage.getItem('userDetails'));
      return auth !== null && auth.authenticated;
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
      localStorage.removeItem('userDetails');
    }
  
    /**
     * Get a token value.
     *
     * @returns {string}
     */
  
    static getAuthInfo() {
      return JSON.parse(localStorage.getItem('userDetails'));
    }
  }
  
  export default Auth;