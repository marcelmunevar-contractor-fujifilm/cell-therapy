"use client";
import Script from "next/script";

export default function Vimeo() {
  return (
    <>
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="lazyOnload" // Load the script after the page has loaded
        onLoad={() => {
          // You can initialize the Vimeo player here if needed
        }}
      />
      <div style={{ padding: "75% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/1067774295?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          title="Fujifilm_CellTherapy"
        ></iframe>
      </div>
    </>
  );
}
