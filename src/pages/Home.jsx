import { VideoCard } from "../components/Card/VideoCard";
import { useFetch } from "../hooks/useFetch";
export function Home() {
  const { data, isLoading, hasError, errorMessage } = useFetch("/video");
  return (
    <>
      {isLoading && <p>{isLoading}</p>}
      {data && (
        <div className="grid grid-cols-12 gap-6 p-4 ">
          {data.docs?.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
      {hasError && <p>{errorMessage}</p>}
    </>
  );
}
