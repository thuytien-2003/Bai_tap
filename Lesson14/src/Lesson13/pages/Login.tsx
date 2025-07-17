// src/pages/Login.tsx

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useAuthStore } from '../TasksManagementWithZustand/useAuthStore';

interface IFormInput {
  username: string;
  password: string;
}

const validationSchema: yup.ObjectSchema<IFormInput> = yup.object({
  username: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be less than 50 characters'),
});

export default function Login() {
  const navigate = useNavigate();
  const { login, error, loggedInUser } = useAuthStore((state) => state);

  useEffect(() => {
    if (loggedInUser) {
      navigate('/tasks');
    }
  }, [loggedInUser, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      username: 'tungnt@softech.vn',
      password: '123456789',
    },
  });

  const onSubmit = async (data: IFormInput): Promise<void> => {
    login({
      username: data.username,
      password: data.password,
      navigate: navigate,
    });
  };

  return (
    <div className="bg-gray-50 px-6 pt-32 flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-md p-10 space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          Welcome Back
        </h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="username"
              type="email"
              placeholder="you@example.com"
              {...register('username')}
              className={`w-full px-5 py-3 rounded-md border border-gray-300 text-gray-800 transition focus:outline-none focus:ring-3 focus:ring-blue-600 ${
                errors.username
                  ? 'border-red-500 focus:ring-red-400'
                  : dirtyFields.username
                  ? 'border-green-500 focus:ring-green-400'
                  : ''
              }`}
            />
            {errors.username && (
              <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register('password')}
              className={`w-full px-5 py-3 rounded-md border border-gray-300 text-gray-800 transition focus:outline-none focus:ring-3 focus:ring-blue-600 ${
                errors.password
                  ? 'border-red-500 focus:ring-red-400'
                  : dirtyFields.password
                  ? 'border-green-500 focus:ring-green-400'
                  : ''
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`w-full py-4 rounded-md font-bold text-white transition duration-300 ${
            isSubmitting || !isValid
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600'
          }`}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center mt-6 text-sm space-y-2">
          <p
            className={`font-semibold ${
              isValid ? 'text-green-700 flex items-center justify-center gap-1' : 'text-red-600 flex items-center justify-center gap-1'
            }`}
          >
            {isValid ? (
              <>
                <span>✓</span> Form is valid
              </>
            ) : (
              <>
                <span>✗</span> Please fix errors
              </>
            )}
          </p>
          {error && (
            <p className="text-red-600 text-xs font-semibold mt-1">
              ⚠️ Login failed. Check your credentials.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
