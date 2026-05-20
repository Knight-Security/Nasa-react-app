export default function Main({ data }) {
  return (
    <div className="imgContainer">
      {data?.media_type === "image" ? (
        <img
          className="bgImage"
          src={data?.hdurl || data?.url}
          alt={data?.title || "NASA APOD"}
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