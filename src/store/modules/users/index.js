import AuthService from "@/services/AuthService";

export default {
    state: {
        user: {
            name: '',
            email: '',
        },
        loggedIn: false,
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.loggedIn = true;
        },
        LOGOUT(state) {
            state.user = {
                name: '',
                email: '',
            };
            state.loggedIn = false;
        },
    },

    actions: {
        async auth({ commit }, params) {
            try {
                const user = await AuthService.auth(params);
                commit('SET_USER', user);
                console.log('Usuário autenticado:', user);
            } catch (error) {
                console.error('Erro na autenticação:', error);
                // Trate o erro conforme necessário (por exemplo, exibindo uma mensagem de erro no frontend)
            }
        },
    },
};
