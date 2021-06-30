import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { CONFIG } from './fireBaseConfig';

export const fireBase = firebase.initializeApp(CONFIG);
