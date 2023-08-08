import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import { BsCartPlusFill } from "react-icons/bs";

export const ShopCard = () => {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none  w-max min-h-[170px] max-w-[35%] min-w-[200px] lg:max-w-fit lg:min-w-full  bg-zinc-50 dark:bg-zinc-900  "
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 lg:col-span-4 grid items-center justify-center">
            <Image
              alt="Album cover"
              className="object-cover w-max "
              shadow="md"
              src="https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png"
            />
          </div>

          <div className="flex flex-col col-span-6 lg:col-span-8">
            <div className="flex justify-between my-2 items-start">
              <div className="flex flex-col gap-0">
                <h4 className="text-small font-semibold text-foreground/90">
                  {" "}
                  Nike Adapt BB 2.0
                </h4>
                <p className="text-tiny text-foreground/80">The news Nike ..</p>
                <h5 className="text-small font-small mt-2">
                  Rp. 18.0000.000,-
                </h5>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex w-full items-center justify-around gap-1">
              <Button color="primary" size="sm" variant="solid">
                Buy Now
              </Button>
              <Button isIconOnly color="primary" size="sm" variant="bordered">
                <BsCartPlusFill />
              </Button>
              {/* <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                color="primary"
              >
                <BsCartPlusFill />
                <RepeatOneIcon className="text-foreground/80" />
              </Button> */}
              {/* <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <ShuffleIcon className="text-foreground/80" />
              </Button> */}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
