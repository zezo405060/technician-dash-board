import { useState } from "react";
import { supabase } from "../supabase";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("technicians")
      .select("*")
      .eq("username", formData.username)
      .eq("password", formData.password)
      .single();

    if (error || !data) {
      setMessage("❌ Incorrect username or password");
    } else {
      setMessage("✅ Login successful");
      localStorage.setItem("technician", JSON.stringify(data));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4">
        <h2 className="text-xl font-bold">Technician Login</h2>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
        {message && <p className="text-sm text-center">{message}</p>}
      </form>
    </div>
  );
}