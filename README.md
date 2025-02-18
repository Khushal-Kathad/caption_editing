# Web-Based Caption Editing System

## Overview
This is a **Web-Based Caption Editing System** that allows users to:
- **Upload and play videos**
- **Load and edit subtitles dynamically**
- **Modify captions in real-time**
- **Save edited captions as an SRT file**
- **Ensure captions update dynamically and persist**

The project is built using **React.js, Redux Toolkit, and Tailwind CSS**.

---

## Features
✔ **Video Upload:** Load a video file dynamically.
✔ **Subtitle Upload:** Load `.srt` files and display captions.
✔ **Real-Time Editing:** Modify captions while the video is playing.
✔ **Automatic Synchronization:** Edited captions are linked to video timestamps.
✔ **SRT File Export:** Save updated captions in `.srt` format.
✔ **Dynamic Updates:** Captions persist and update in real-time.

---

## Tech Stack
- **Frontend:** React.js, TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Parsing & Processing:** JavaScript (Regex for SRT parsing)

---

## Installation

### Prerequisites
Make sure you have **Node.js (>= 16.x) and npm (>= 8.x)** installed.

### Clone the Repository
```bash
git clone https://github.com/Khushal-Kathad/caption_editor.git
cd caption-editor
```

### Install Dependencies
```bash
npm install
```

### Run the Application
```bash
npm run dev
```
The application will be available at **`http://localhost:5173`** (default Vite port).

---

## Project Structure
```
📂 caption-editor/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── FileUpload.jsx   # Handles video & subtitle file uploads
│   │   ├── VideoPlayer.jsx  # Video player with subtitle integration
│   │   ├── CaptionEditor.jsx # Edit subtitles dynamically
│   ├── 📂 redux/
│   │   ├── captionsSlice.js  # Redux state management for captions
│   │   ├── store.js         # Redux store setup
│   ├── 📂 utils/
│   │   ├── parseSRT.js      # Parses .srt files into a structured format
│   ├── App.jsx              # Main React component
│   ├── main.jsx             # React entry point
├── 📜 package.json          # Project dependencies & scripts
├── 📜 tailwind.config.js     # Tailwind CSS configuration
├── 📜 README.md             # Project documentation
```

---

## Usage Guide

### Uploading a Video
1. Click **"Upload Video"** and select a `.mp4` file.
2. The video will load and be playable in the built-in player.

### Uploading Subtitles
1. Click **"Upload Subtitle (.srt)"** and select an `.srt` file.
2. The captions will load and be displayed below the video.

### Editing Captions
1. Modify captions directly in the input fields.
2. Changes update **dynamically** and persist in the system.

### Saving Captions
1. Click **"Save Captions as SRT"**.
2. The modified captions will be downloaded as `captions.srt`.

---




---

## SRT File Format

An SRT (SubRip Subtitle) file follows this structure:
```
1
00:00:05,000 --> 00:00:10,000
Hello, welcome to the video!

2
00:00:12,000 --> 00:00:15,500
Enjoy learning with us.
```

---

## Future Enhancements 🚀
🔹 **Waveform-based captioning** (visual representation of audio)
🔹 **Speech-to-Text integration** (automatically generate subtitles)
🔹 **Multiple subtitle format support** (VTT, ASS, SSA)
🔹 **Database Integration** (to store captions for later retrieval)

---

---

## Author
👤 **Khushal Kathad**  
📧 Contact: khushal.kathad@gmail.com  
🔗 GitHub: [Khushal-Kathad](https://github.com/Khushal-Kathad)
