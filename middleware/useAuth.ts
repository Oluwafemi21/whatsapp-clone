export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();
  if (!user) {
    return navigateTo("/login");
  } else if (user && to.path === "/login") {
    return navigateTo("/chat");
  }
});
