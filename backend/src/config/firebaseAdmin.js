import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { env } from './env.js';

// Initialize Firebase Admin
if (getApps().length === 0) {
  initializeApp({ projectId: env.FIREBASE_PROJECT_ID });
}

export const adminAuth = getAuth();
