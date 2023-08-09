

export const TodoReducer = (initialState = [], { type, payload }) => {
    switch (type) {
        case '[TODO] Add Todo':
            return [...initialState, payload];
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

        default:
            return initialState;
    }
}