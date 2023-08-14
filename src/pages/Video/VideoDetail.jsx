import { useParams } from "react-router-dom";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Comment } from "../../components/comment/Comment";
import { ShopCard } from "../../components/Card/ShopCard";
import { CommentForm } from "../../components/comment/CommentForm";

import { domParser } from "../../utils/DomParser";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { socket } from "../../socket";
import { defaultInstance } from "../../api/AxiosInstance";

export const VideoDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState({});
  const productFetch = useFetch("/product?videoId=" + id);
  const videoFetch = useFetch("/video/" + id);

  useEffect(() => {
    const fetchComment = async () => {
      const response = await defaultInstance.get(
        "/comment?limit=100&videoId=" + id
      );
      setComment(response.data.data);
    };
    fetchComment();
    socket.on("receiveComment", (newComment) => {
      // fetchComment();
      setComment((prevState) => ({
        ...prevState,
        docs: [...prevState.docs, newComment],
      }));
    });
  }, []);

  return (
    <div className="w-screen flex flex-wrap gap-4 items-center p-3 h-[80vh]">
      <div className="grid grid-cols-12 gap-4 m-y-5 w-full h-full ">
        <div className="col-span-12  order-last lg:order-first lg:col-span-3 w-full h-100 ">
          <div className="flex flex-row flex-nowrap lg:flex-col  max-w-screen overflow-auto scrollbar-none gap-4 w-full max-h-[80vh]  ">
            {productFetch.data?.docs?.map((product) => (
              <ShopCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-6">
          <iframe
            width="100%"
            height="100%"
            src={
              domParser(videoFetch.data?.embeddedComponent, "iframe", "src") +
              "?controls=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" col-span-12 md:col-span-3 lg:h-full h-[80vh] w-full ">
          <Card
            isBlurred
            className="border-none bg-zinc-50 dark:bg-zinc-900 h-full w-full max-h-[80vh]  overflow-auto   "
            shadow="sm"
          >
            <CardBody className="gap-4 flex flex-col mt-auto mb-14">
              {comment?.docs?.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </CardBody>
            <CardFooter className="absolute bg-zinc-50 dark:bg-zinc-900 bottom-0 z-10 ">
              <CommentForm videoId={id} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
