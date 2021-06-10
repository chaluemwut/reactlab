import { createStore } from 'redux'


function manageReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'aa':
            return { value: state.value + 1 }
        case 'bb':
            return { value: state.value - 1 }
    }
}

export const store = createStore(manageReducer)

