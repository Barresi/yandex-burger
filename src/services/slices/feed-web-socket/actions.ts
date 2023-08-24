import { createAction } from '@reduxjs/toolkit';

export const wsConnect = createAction('FEED_CONNECT');
export const wsDisconnect = createAction('FEED_DISCONNECT');
