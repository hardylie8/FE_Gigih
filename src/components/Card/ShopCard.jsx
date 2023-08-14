import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import { BsCartPlusFill } from "react-icons/bs";
import { rupiah } from "../../utils/IdrFormatter";

export const ShopCard = ({ product }) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-solid bg-zinc-50 dark:bg-zinc-900  w-max min-h-[150px] max-w-[35%] min-w-[200px] lg:max-w-fit lg:min-w-full   "
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 lg:col-span-4 grid items-center justify-center">
            <Image
              alt="Album cover"
              className="object-cover w-full min-h-[76px]"
              shadow="md"
              src={product.url}
            />
          </div>

          <div className="flex flex-col col-span-6 lg:col-span-8">
            <div className="flex justify-between my-2 items-start">
              <div className="flex flex-col gap-0">
                <h4 className="text-medium font-semibold text-foreground/90">
                  {product.title}
                </h4>
                {/* <p className="text-tiny text-foreground/80">The news Nike ..</p> */}
                <h5 className="text-small font-small mt-2">
                  {rupiah(product.price)}
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

            <div className="flex w-full items-center justify-start gap-1">
              <Button color="primary" size="sm" variant="solid">
                Buy Now
              </Button>
              <Button isIconOnly color="primary" size="sm" variant="bordered">
                <BsCartPlusFill />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
