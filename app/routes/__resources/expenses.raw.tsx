// Sub-route of expense but doesn't share common layout

import type { LoaderFunction } from '@remix-run/node';
import { MOCK_EXPENSES } from '~/test/mocks.ts';

// this is an api route where anything other than a component is returned

/**
 * Loaders are triggered whenever a GET hits
 * this route is /expenses/raw and loader is
 * triggered
 */
export const loader: LoaderFunction = () => MOCK_EXPENSES;
