export const authStore = {
  accessToken: null,
  getAccessToken() {
    return this.accessToken;
  },
  setAccessToken(token) {
    this.accessToken = token;
  },
  logout() {
    this.accessToken = null;
    window.location.reload();
  },
};
