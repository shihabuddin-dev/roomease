"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import AuthButton from "./AuthButton";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });
    if (res?.error) {
      setError(res.error);
    } else {
      window.location.reload(); // or redirect to dashboard
    }
    setLoading(false);
  };

  return (

    <section><form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold mb-2">Login</h2>
      {error && <div className="text-red-600">{error}</div>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
      <div className="flex justify-center items-center mt-6">

        <AuthButton />
      </div></section>
  );
}
