import { createStore } from 'redux'


function manageReducer(state, action) {
    switch (action.type) {
        case 'aa':
            return { value: 10 }
        case 'bb':
            return { value: 20 }
    }
}

export const store = createStore(manageReducer)

