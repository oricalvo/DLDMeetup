"use strict";
var redux_1 = require("redux");
exports.appStore = redux_1.createStore(reducer, {
    contacts: null,
});
function reducer(state, action) {
    if (action.type == "LOAD_CONTACTS") {
        return {
            contacts: [
                { id: 1, name: "Ori" },
                { id: 2, name: "Roni" },
            ]
        };
    }
    else if (action.type == "ADD_CONTACT") {
        return {
            contacts: state.contacts.concat(action.contact)
        };
    }
    return state;
}
//# sourceMappingURL=appStore.service.js.map