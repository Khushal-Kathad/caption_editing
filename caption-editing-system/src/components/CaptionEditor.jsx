import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCaption } from "../redux/captionsSlice";

const CaptionEditor = () => {
    const captions = useSelector((state) => state.captions.captions);
    const dispatch = useDispatch();

    const handleEdit = (id, newText) => {
        const captionToUpdate = captions.find((caption) => caption.id === id);
        if (captionToUpdate) {
            dispatch(updateCaption({ ...captionToUpdate, text: newText }));
        }
    };

    return (
        <div className="p-4">
            {captions.map((caption) => (
                <div key={caption.id} className="flex items-center mb-2">
                    <input
                        type="text"
                        value={caption.text}
                        onChange={(e) => handleEdit(caption.id, e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
            ))}
        </div>
    );
};

export default CaptionEditor;
