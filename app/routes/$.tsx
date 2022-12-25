import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

/**
 * Splat routes are a catch-all for routest entered
 * that don't match. can be added at all levels of nesting
 *
 * This can be useful if pages are moved in versions
 * where the params are parsed and can be checked to
 * see if it matches an old route or it if contains a
 * key word that can be inferred what the user was
 * looking for.
 */
export const loader: LoaderFunction = ({ params }) => {
    // Option to return redirect, UI, Response Obj
    if (params['*'] === 'exp') {
        return redirect('/expenses');
    }
    return new Response('Not found', { status: 404 });
};
// type Props = {};

// const Splat = (props: Props) => {
//     return <div>$</div>;
// };

// export default Splat;
