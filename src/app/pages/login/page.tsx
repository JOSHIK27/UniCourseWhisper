import { Input, Button } from "@nextui-org/react";
export default function Login() {
  return (
    <div className="flex justify-center">
      <form className="mt-28 border p-8 bg-white shadow-lg rounded-xl text-center">
        <h1 className="mb-4 text-xl font-light">SIGNIN WITH INSTITUE EMAIL</h1>
        <Input
          size="sm"
          className="w-[450px] mb-4"
          type="email"
          label="Email"
        />
        <Input
          size="sm"
          className="w-[450px] mb-4"
          type="password"
          label="Password"
        />
        <Button
          size="md"
          className="w-[450px] bg-emerald-800 text-white"
          variant="shadow"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
