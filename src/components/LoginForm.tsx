import React from 'react';
import { useForm } from '../hooks/useForm';

interface FormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { values, handleChange, resetForm } = useForm<FormValues>({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', values);
    resetForm(); // Reset form after submission
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="border p-4 rounded-md"
    >
      <div className="mb-4">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="mb-4">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">Submit</button>
    </form>
  );
};

export default LoginForm;
