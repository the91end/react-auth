import app from './app';

export { default as context } from './context';
export { default as actions } from './actions';

export { default as Router } from './components/Router';

export { default as HomeRoute } from './components/HomeRoute';
export { default as LoginRoute } from './components/LoginRoute';
export { default as LogoutRoute } from './components/LogoutRoute';
export { default as AuthenticatedRoute } from './components/AuthenticatedRoute';

export { default as Authenticated } from './components/Authenticated';
export { default as NotAuthenticated } from './components/NotAuthenticated';

export { default as LoginLink } from './components/LoginLink';
export { default as LogoutLink } from './components/LogoutLink';

export { default as LoginForm } from './components/LoginForm';
export { default as UserProfileForm } from './components/UserProfileForm';
export { default as SignupForm } from './components/SignupForm';
export { default as ResetPasswordForm } from './components/ResetPasswordForm';
export { default as ChangePasswordForm } from './components/ChangePasswordForm';
export { default as VerifyEmailView } from './components/VerifyEmailView';

export { default as SocialLoginLink } from './components/SocialLoginLink';
export { default as SocialLoginButton } from './components/SocialLoginButton';

// When not using ES6, enable people to use ReactAuth.init()
// instead of ReactAuth.default.init().
export function init() {
  app.init(...arguments);
};

export default app;
