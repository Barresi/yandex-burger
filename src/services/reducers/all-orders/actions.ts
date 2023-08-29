import { createAction } from '@reduxjs/toolkit';
import { IDataFeed } from '../../../types/reducers/feed-web-socket';

export const wsConnectAllFeed = createAction<string>('ALL_FEED_CONNECT');
export const wsDisconnectAllFeed = createAction('ALL_FEED_DISCONNECT');

export const wsConnecting = createAction('ALL_FEED_CONNECTING');
export const wsOpen = createAction('ALL_FEED_OPEN');
export const wsClose = createAction('ALL_FEED_CLOSE');
export const wsMessage = createAction<IDataFeed>('ALL_FEED_MESSAGE');
export const wsError = createAction<string>('ALL_FEED_ERROR');

export const allFeedActions = {
     wsConnecting,
     wsOpen,
     wsClose,
     wsMessage,
     wsError,
     wsDisconnect: wsDisconnectAllFeed,
     wsConnect: wsConnectAllFeed,
};
