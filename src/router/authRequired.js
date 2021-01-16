export default (to, from, next) => {
  // all routes that are only available for bosses must be included here
  const JWT = localStorage.getItem('jwt');

  if (!JWT) {
    return next('/');
  }
  const tokens = JWT.split('.');
  const JwtPayload = JSON.parse(atob(tokens[1]));
  const now = new Date();
  const expDate = new Date(JwtPayload.exp * 1000);
  if (now < expDate) {
    return next();
  }
  return next('/');
};
