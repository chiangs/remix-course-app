import { Link, useSearchParams } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';

type AuthMode = 'login' | 'signup';

function AuthForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const authMode: AuthMode =
        (searchParams.get('mode') as AuthMode) || 'login';
    const ctaLabel = authMode === 'login' ? 'Login' : 'Create account';
    const toggleLink = authMode === 'login' ? 'signup' : 'login';
    const toggleLabel = authMode === 'login' ? 'Create an account' : 'Login';
    const icon = authMode === 'login' ? <FaUserPlus /> : <FaLock />;

    return (
        <form method='post' className='form' id='auth-form'>
            <div className='icon-img'>{icon}</div>
            <p>
                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' name='email' required />
            </p>
            <p>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    minLength={7}
                />
            </p>
            <div className='form-actions'>
                <button>{ctaLabel}</button>
                <Link to={`?mode=${toggleLink}`}>{toggleLabel}</Link>
            </div>
        </form>
    );
}

export default AuthForm;
