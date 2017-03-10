const KEY = 'todosData';

const TodoAPI = {
    get() {
        try {
            var data = localStorage.getItem(KEY);
            if (!data) {
                return undefined;
            }
            return JSON.parse(localStorage.getItem(KEY));
        } catch (error) {
            return undefined;
        }
    },

    save(state) {
        try {
            var data = JSON.stringify(state);
            localStorage.setItem(KEY, JSON.stringify(state));
        } catch (error) {
            throw new Error('Не удалось сохранить данные')
        }
    },

    clear() {
        try {
            localStorage.removeItem(KEY);
        } catch (error) {
            throw new Error('Не удалось удалить данные')
        }
    }
}


export default TodoAPI;
