import ReactPlayer from "react-player";

function VideoApresentation() {
  return (
    <div className="video-responsive">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=hxhdhBRP06Y"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default VideoApresentation;
