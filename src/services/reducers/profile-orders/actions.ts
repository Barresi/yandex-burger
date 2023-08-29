import { createAction } from '@reduxjs/toolkit';
import { IDataFeed } from '../../../types/reducers/feed-web-socket';

export const wsConnectProfileFeed = createAction<string>('PROFILE_FEED_CONNECT');
export const wsDisconnectProfileFeed = createAction('PROFILE_FEED_DISCONNECT');

export const wsConnecting = createAction('PROFILE_FEED_CONNECTING');
export const wsOpen = createAction('PROFILE_FEED_OPEN');
export const wsClose = createAction('PROFILE_FEED_CLOSE');
export const wsMessage = createAction<IDataFeed>('PROFILE_FEED_MESSAGE');
export const wsError = createAction<string>('PROFILE_FEED_ERROR');

export const profileFeedActions = {
     wsConnecting,
     wsOpen,
     wsClose,
     wsMessage,
     wsError,
     wsDisconnect: wsDisconnectProfileFeed,
     wsConnect: wsConnectProfileFeed,
};
