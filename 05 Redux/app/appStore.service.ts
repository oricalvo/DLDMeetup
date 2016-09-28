import {createStore, Action} from "redux";

export interface Contact {
    id: number;
    name: string;
}

export interface AppState {
    contacts: Contact[];
}

export const appStore = createStore(reducer, {
    contacts: null,
});

function reducer(state: AppState, action: Action) {
    if (action.type == "LOAD_CONTACTS") {
        return {
            contacts: [
                {id: 1, name: "Ori"},
                {id: 2, name: "Roni"},
            ]
        };
    }
    else if(action.type == "ADD_CONTACT") {
        return {
            contacts: state.contacts.concat((action as any).contact)
        }
    }

    return state;
}
