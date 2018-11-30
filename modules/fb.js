import {config} from '../objects/config.object.js';

const firebase = require('firebase');

// Initialize Firebase
firebase.initializeApp(config);

export const db = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();
