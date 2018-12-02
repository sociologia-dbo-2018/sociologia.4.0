import {db} from './fb.js';

export const firebaseControl = {
    sendForm: function(object) {
        const write = (reference) => {
            const database = db.ref(reference);
            database.once('value').then((snapshot) => {
                (snapshot.val() === null) ? database.set(1):database.set(snapshot.val() + 1);
            });
        }

        write(`violences/${object.first}/${object.second}`);

        const keys = Object.keys(object.opcionais);
        const values = Object.values(object.opcionais);

        for (let i=0; i<keys.length; i++) write(`other_dates/${keys[i]}/${values[i]}`);
    },
    sendMap: function(object) {

    }
};
