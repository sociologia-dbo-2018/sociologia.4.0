import {db} from './fb.js';

export const firebaseControl = {
    sendForm: function(object) {
    	const database = db.ref(`dados/${object.primary}`);
    	const objectSecondary = object.secondary;
    	console.log(database.val().objectSecondary);
    	// const value = database.val() ++; 
    	// database.set(value);
    },
    sendMap: function(object) {

    }
}
