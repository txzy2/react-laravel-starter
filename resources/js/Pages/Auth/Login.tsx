import {
  Checkbox,
  InputError,
  InputLabel,
  PrimaryButton,
  TextInput
} from '@/shared/ui';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import React from 'react';
import {Hover} from '@/shared/animations';

const Login: React.FC = ({
  status,
  canResetPassword
}: {
  status?: string;
  canResetPassword?: boolean;
}) => {
  const {data, setData, post, processing, errors, reset} = useForm({
    email: '',
    password: '',
    remember: false
  });

  const submit = e => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password')
    });
  };

  return (
    <GuestLayout>
      <Head title='Log in' />

      {status && (
        <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>
      )}

      <form onSubmit={submit}>
        <div>
          <InputLabel value='Email' children={''} />

          <Hover scale={1.02}>
            <TextInput
              id='email'
              type='email'
              name='email'
              value={data.email}
              className='mt-1 block w-full'
              autoComplete='username'
              isFocused={true}
              onChange={e => setData('email', e.target.value)}
            />
          </Hover>

          <InputError message={errors.email} className='mt-2' />
        </div>

        <div className='mt-4'>
          <InputLabel value='Password' children={''} />

          <Hover scale={1.02}>
            <TextInput
              id='password'
              type='password'
              name='password'
              value={data.password}
              className='mt-1 block w-full'
              autoComplete='current-password'
              onChange={e => setData('password', e.target.value)}
            />
          </Hover>

          <InputError message={errors.password} className='mt-2' />
        </div>

        <div className='mt-4 block'>
          <label className='flex items-center'>
            <Checkbox
              name='remember'
              checked={data.remember}
              onChange={e => setData('remember', e.target.checked)}
            />
            <span className='ms-2 text-sm text-gray-600'>Remember me</span>
          </label>
        </div>

        <div className='mt-4 flex items-center justify-end'>
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className='rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Forgot your password?
            </Link>
          )}

          <Hover>
            <PrimaryButton className='ms-4' disabled={processing}>
              Log in
            </PrimaryButton>
          </Hover>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Login;
