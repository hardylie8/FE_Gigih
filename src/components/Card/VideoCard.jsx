import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handlePress = (id) => {
    navigate("/detail/" + id);
  };

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none  max-h-96 col-span-6 sm:col-span-4  md:col-span-2 "
      isPressable
      onPress={() => handlePress(video._id)}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover h-64"
        src={video.thumbnailUrl}
      />

      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-purple-900 text-tiny">{video.title}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
