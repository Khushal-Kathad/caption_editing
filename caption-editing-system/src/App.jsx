import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCaptions } from "./redux/captionsSlice";
import FileUpload from "./components/FileUpload";
import VideoPlayer from "./components/VideoPlayer";
import CaptionEditor from "./components/CaptionEditor";
import { parseSRT } from "./utils/srtParser";
import video from "./assets/k.mp4";

const App = () => {
  const [videoSrc, setVideoSrc] = useState(video);
  const captions = useSelector((state) => state.captions.captions);
  const dispatch = useDispatch();

  const handleFileUpload = (event) => {
    if (event.target.files.length > 0) {
      setVideoSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSRTUpload = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const parsedCaptions = parseSRT(e.target.result);
        dispatch(setCaptions(parsedCaptions));
      };
      reader.readAsText(file);
    }
  };

  const saveSRTFile = () => {
    const srtContent = captions
      .map((caption) => `${caption.id}\n${caption.startTime} --> ${caption.endTime}\n${caption.text}\n`)
      .join("\n");

    const blob = new Blob([srtContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "captions.srt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Video Upload Button */}
      <label className="bg-blue-500 text-white p-2 cursor-pointer">
        Upload Video
        <input type="file" accept="video/mp4" onChange={handleFileUpload} className="hidden" />
      </label>

      {/* Subtitle Upload Button */}
      <label className="bg-green-500 text-white p-2 ml-2 cursor-pointer">
        Upload Subtitle (.srt)
        <input type="file" accept=".srt" onChange={handleSRTUpload} className="hidden" />
      </label>

      <VideoPlayer src={videoSrc} captions={captions} />
      <CaptionEditor />

      <button onClick={saveSRTFile} className="bg-red-500 text-white p-2 mt-4">
        Save Captions as SRT
      </button>
    </div>
  );
};

export default App;
