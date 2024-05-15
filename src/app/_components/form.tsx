"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import type { FieldValues } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  university: z.string().max(1),
  country: z.string().max(15),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 bg-[#F5FAF0] p-4 rounded-md shadow-lg"
    >
      <label className="font-bold text-lime-900 text-[13px]">University</label>
      <Input {...register("university")} className="w-80" placeholder="Name" />
      {errors.university && (
        <p className="text-red-700 text-sm">{errors.university.message}</p>
      )}
      <label className="font-bold text-lime-900 text-[13px]">Country</label>
      <Input {...register("country")} className="w-80" placeholder="Country" />
      {errors.country && (
        <p className="text-red-700 text-sm">{errors.country.message}</p>
      )}
      <Button
        type="submit"
        className="w-full bg-lime-700 text-white text-[14px] mt-4"
      >
        SUBMIT
      </Button>
    </form>
  );
}
