import { createStore } from 'vuex'

export default createStore({
    state: {
        selectedLanguage: parseInt(localStorage.getItem('selectedLanguage') as string) || 0,
    },
    mutations: {
        setSelectedLanguage(state, language) {
            console.log('setSelectedLanguage', language);
            state.selectedLanguage = language;
            console.log('state.selectedLanguage', state.selectedLanguage);
            localStorage.setItem('selectedLanguage', language.toString());
        }
    },
    getters: {
        selectedLanguage: (state) => state.selectedLanguage
    },
});