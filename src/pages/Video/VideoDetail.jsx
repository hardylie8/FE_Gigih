import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Chat } from "../../components/chat/chat";
import { ShopCard } from "../../components/Card/ShopCard";
import { CommentForm } from "../../components/chat/CommentForm";
export const VideoDetail = () => {
  return (
    <div className="w-screen flex flex-wrap gap-4 items-center p-3">
      <div className="grid grid-cols-12 gap-4 m-y-5 w-full h-100 max-h-full">
        <div className="col-span-12  order-last lg:order-first lg:col-span-3 w-full h-100 ">
          <div className="flex flex-row flex-nowrap lg:flex-col  max-w-screen overflow-auto scrollbar-none gap-4 w-full max-h-[80vh]  ">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />

            <ShopCard />
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-6">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/frPzAF6I_Ek"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" col-span-12 md:col-span-3 h-80 lg:h-full max-h-[80vh] w-full ">
          <Card
            isBlurred
            className="border-none bg-zinc-50 dark:bg-zinc-900 h-full w-full   "
            shadow="sm"
          >
            <CardBody className="gap-4 mt-auto scrollbar-none overflow-auto">
              <Chat />
              <Chat />
              <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat />{" "}
              <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat />{" "}
              <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat />{" "}
              <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat /> <Chat />{" "}
              <Chat /> <Chat /> <Chat />
            </CardBody>
            <CardFooter className="absolute bg-zinc-50 dark:bg-zinc-900 bottom-0 z-10 ">
              <CommentForm />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
