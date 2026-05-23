export default function Main({ data }) {
  return (
    <div className="imgContainer">
      {data?.media_type === "image" ? (
        <img
          className="bgImage"
          src={data?.url}
          alt={data?.title || "NASA APOD"}
          loading="lazy"
        />
      ) : (
        <iframe
          src={data?.url}
          title="NASA Video"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}