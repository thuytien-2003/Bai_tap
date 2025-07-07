import React from "react";
import type { Customer } from "../types/Customer";

type Props = {
  onCreated?: (customer: Customer) => void;
};

const url = "https://server.aptech.io/online-shop/customers";

export default function Create({ onCreated }: Props) {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthday: "",
  });

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: "", // xóa lỗi khi người dùng sửa input
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Phone number must be at least 10 digits.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.birthday) {
      newErrors.birthday = "Birthday is required.";
    } else {
      const dobDate = new Date(formData.birthday);
      const age = new Date().getFullYear() - dobDate.getFullYear();
      if (age < 18) {
        newErrors.birthday = "Customer must be at least 18 years old.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("Customer created successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        birthday: "",
      });
      setErrors({});

      if (onCreated && typeof onCreated === "function") {
        onCreated(data);
      }
    } catch (error) {
      console.error("Error creating customer:", error);
      alert("Error creating customer. Please try again.");
    }
  };

  return (
    <div>
      <form
        className="w-full p-4 bg-white rounded shadow mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Create Customer</h2>

        {[
          { id: "firstName", label: "First Name" },
          { id: "lastName", label: "Last Name" },
          { id: "email", label: "Email", type: "email" },
          { id: "phoneNumber", label: "Phone Number", type: "tel" },
          { id: "address", label: "Address" },
          { id: "birthday", label: "Birthday", type: "date" },
        ].map(({ id, label, type = "text" }) => (
          <div key={id} className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor={id}
            >
              {label} <span className="text-red-500">*</span>
            </label>
            <input
              type={type}
              id={id}
              value={(formData as any)[id]}
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
            />
            {/* ✅ Hiển thị lỗi mà không làm dịch layout */}
            <p className="text-sm text-red-500 mt-1 h-5">
              {errors[id] || "\u00A0"}
            </p>
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Create Customer
        </button>
      </form>
    </div>
  );
}
