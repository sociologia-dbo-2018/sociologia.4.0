import {db} from './fb.js';

export const firebaseControl = {
    sendForm: function(object) {
        const database = db.ref()
            .child(`dados/${object.first}/${object.second}`);

        console.log(database);
        // const value = database.val() ++;
        // database.set(value);
        something = null;
        database.push(something);
    },
    sendMap: function(object) {

    }
};
