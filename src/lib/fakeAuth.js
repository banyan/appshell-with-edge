import Cookies from 'js-cookie';

const loginKey = 'test-logged-in';

const fakeAuth = {
  isAuthenticated() {
    return Cookies.get(loginKey);
  },
  authenticate(cb) {
    Cookies.set(loginKey, 1);
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    Cookies.remove(loginKey, 1);
    setTimeout(cb, 100)
  }
}

export default fakeAuth;
