import { useForm, type SubmitHandler } from 'react-hook-form';

interface BuyerFormData {
  name: string;
  email: string;
  address: string;
}

export default function BuyerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BuyerFormData>();

  const onSubmit: SubmitHandler<BuyerFormData> = (data) => {
    console.log('Buyer Info:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Buyer Information</h2>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Minimum 2 characters' },
          })}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email',
            },
          })}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block mb-1 font-medium text-gray-700">
          Address
        </label>
        <input
          id="address"
          {...register('address', {
            required: 'Address is required',
            minLength: { value: 5, message: 'Minimum 5 characters' },
          })}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
}
