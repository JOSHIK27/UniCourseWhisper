"use client";

import { useState } from "react";
import BtnGroup from "@/app/_components/ui/buttonGroup";
import Form from "@/app/_components/form";

export default function Page() {
  const [whichForm, setWhichForm] = useState<string>("");
  return (
    <>
      <div className="flex justify-center mt-20">
        <div>
          <BtnGroup
            inputs={["University", "Professor", "Discipline", "Course"]}
          />
          <Form />
        </div>
      </div>
    </>
  );
}
