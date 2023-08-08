import { Button, Input } from "@nextui-org/react";
import { BsFillSendFill } from "react-icons/bs";
export const CommentForm = () => {
  // const ButtonSend = ;
  return (
    <Input
      type="email"
      //   label="Email"
      placeholder="you@example.com"
      labelPlacement="outside"
      endContent={<Button color="primary">test</Button>}
    />
  );
};
