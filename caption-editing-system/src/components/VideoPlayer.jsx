import React, { useEffect, useState } from "react";

const VideoPlayer = ({ src, captions }) => {
    const [subtitleUrl, setSubtitleUrl] = useState(null);

    const generateVTT = () => {
        if (captions && captions.length > 0) {
            const vttContent = "WEBVTT\n\n" + captions
                .map((caption) => {
                    const startTime = caption.startTime ? caption.startTime.replace(",", ".") : "00:00:00.000";
                    const endTime = caption.endTime ? caption.endTime.replace(",", ".") : "00:00:00.000";
                    return `${startTime} --> ${endTime}\n${caption.text || ""}\n\n`;
                })
                .join("");

            const blob = new Blob([vttContent], { type: "text/vtt" });
            setSubtitleUrl(URL.createObjectURL(blob));
        }
    };

    useEffect(() => {
        generateVTT();
    }, [captions]); // Regenerate VTT whenever captions change

    return (
        <div className="relative w-full">
            {src ? (
                <video controls className="w-full h-auto">
                    <source src={src} type="video/mp4" />
                    {subtitleUrl && (
                        <track src={subtitleUrl} kind="subtitles" srcLang="en" label="English" default />
                    )}
                </video>
            ) : (
                <p className="text-center text-red-500">No video source available</p>
            )}
        </div>
    );
};

export default VideoPlayer;
