import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { postComment } from "../../services/CommentService";
import { socket } from "../../socket";
import useLocalStorage from "../../hooks/useLocalStorage";
import Swal from "sweetalert2";

export const CommentForm = ({ videoId }) => {
  const TOKEN_KEY = "authToken";
  const [token] = useLocalStorage(TOKEN_KEY, "");
  const [commentValue, setCommentValue] = useState("");

  const handleInputChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      Swal.fire(
        "An Error Occurred",
        "Please Login First before sending a comment",
        "error"
      );
    } else {
      const response = await postComment(videoId, commentValue, token);
      socket.emit("sendComment", response.data);
      setCommentValue("");
    }
  };

  return (
    <form className="w-full " onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Write a comment ?"
        labelPlacement="outside"
        value={commentValue}
        onChange={handleInputChange}
        min="4"
        endContent={
          <button type="submit">
            <BsFillSendFill />
          </button>
        }
      />
    </form>
  );
};
