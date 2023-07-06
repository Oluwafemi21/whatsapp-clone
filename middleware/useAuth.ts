export default defineNuxtRouteMiddleware((to, from) => {
  const user = isAuthenticated();
  if (!user) {
      return navigateTo("/login");
  } else if (user && to.path === "/login") {
      return navigateTo("/");
  }
});
