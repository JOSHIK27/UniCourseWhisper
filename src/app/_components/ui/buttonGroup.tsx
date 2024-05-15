import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function BtnGroup({ inputs }: { inputs: string[] }) {
  return (
    <ButtonGroup>
      {inputs?.map((item) => (
        <Button>{item}</Button>
      ))}
    </ButtonGroup>
  );
}
