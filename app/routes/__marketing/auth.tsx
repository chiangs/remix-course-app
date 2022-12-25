import type { LinksFunction } from '@remix-run/node';
import cssLink from '~/styles/auth.css';
import AuthForm from '~/components/auth/AuthForm';

type Props = {};

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: cssLink },
];

const UserAuthentication = (props: Props) => {
    return <AuthForm />;
};

export default UserAuthentication;
