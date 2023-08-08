import { Avatar } from "@nextui-org/react";
export function Chat() {
  return (
    <div className="flex gap-4 ">
      <Avatar
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        className="w-6 h-6 "
        size="small"
      />

      <span className="text-tiny text-foreground/80">The news Nike ..</span>
    </div>
  );
}
