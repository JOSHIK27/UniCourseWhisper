"use client";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { z } from "zod";

export default function Login() {
  const [email, setEmail] = useState(null);
  const mySchema = z.string().email();

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const { success } = mySchema.safeParse(email);
    if (!success) {
      alert("Enter valid email");
      return;
    }
    alert("Success");
  };

  return (
    <div className="flex justify-center">
      <form className="mt-28 border p-8 bg-white shadow-lg rounded-xl text-center">
        <h1 className="mb-4 text-xl font-light">
          SIGNIN WITH HERIOT-WATT EMAIL
        </h1>
        <Input
          onChange={handleEmail}
          size="sm"
          className="w-[450px] mb-4 font-sans"
          type="email"
          label="Email"
        />
        <Button
          size="md"
          className="w-[450px] bg-emerald-800 text-white"
          variant="shadow"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
