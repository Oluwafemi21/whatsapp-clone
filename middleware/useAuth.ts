export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    if (!user) {
        return navigateTo("/login");
    } else if (user && to.path === "/login") {
        return navigateTo("/chat");
    }
});
