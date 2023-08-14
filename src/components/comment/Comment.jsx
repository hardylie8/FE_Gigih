import { Avatar } from "@nextui-org/react";

export function Comment({ comment }) {
  return (
    <div className="flex items-center justify-items-start ">
      <div className="flex-none">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          className="w-6 h-6 "
          size="medium"
        />
      </div>

      <div className="flex flex-col  ml-3">
        <span className="text-tiny font-bold text-foreground/80">
          {comment.userId.username}
        </span>
        <span className="text-tiny text-foreground/80">{comment.message}</span>
      </div>
    </div>
  );
}
