import React from "react";
import { useDispatch } from "react-redux";
import { setCaptions } from "../redux/captionsSlice";
import { parseSRT } from "../utils/srtParser"; // Ensure this utility function exists

const FileUpload = ({ onUpload }) => {
    const dispatch = useDispatch();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const fileType = file.name.split('.').pop().toLowerCase();

        if (fileType === "srt") {
            const reader = new FileReader();
            reader.onload = (e) => {
                const srtText = e.target.result;
                const parsedCaptions = parseSRT(srtText);
                dispatch(setCaptions(parsedCaptions)); // Store captions in Redux
            };
            reader.readAsText(file);
        } else {
            alert("Please upload a valid .srt file.");
        }
    };

    return (
        <div className="p-4">
            <input type="file" accept=".srt" onChange={handleFileUpload} className="border p-2" />
        </div>
    );
};

export default FileUpload;
