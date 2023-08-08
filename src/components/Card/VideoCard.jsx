import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const VideoCard = () => {
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
      onPress={() => handlePress(1)}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover "
        src="https://media.suara.com/pictures/original/2021/10/12/78516-atirmadarmawangsareal-saat-livestream-tiktok-shopping-1010.jpg"
      />
      {/* <CardFooter className=" before:bg-white/10  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
      </CardFooter> */}

      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white/60 text-tiny">
            Available soon. vailable soon.vailable soon. ...
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
