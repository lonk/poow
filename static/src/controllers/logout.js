export default {
    ready() {
        localStorage.removeItem('token');
        this.$root.authenticated = false;
        this.$root.router.go('/');
    }
}