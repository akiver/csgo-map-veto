import { createAction } from '@reduxjs/toolkit';

export const apiAddressChanged = createAction<string>('settings/apiAddressChanged');
