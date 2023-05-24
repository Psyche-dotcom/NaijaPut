import React from "react";

const YouTubeEmbed = () => {
  return (
    <div className="video-responsive w-full h-full">
      <iframe
        className="rounded-3xl w-full h-full"
        src={`https://www.youtube.com/embed/O6affOebZ6Y`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
