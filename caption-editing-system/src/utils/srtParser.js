export const parseSRT = (srt) => {
    const pattern = /(\d+)\s+([\d:,]+) --> ([\d:,]+)\s+([\s\S]+?)(?=\n\n|\r\r|\r\n\r\n|$)/g;
    const captions = [];
    let match;
    while ((match = pattern.exec(srt))) {
        captions.push({
            id: parseInt(match[1]),
            startTime: match[2].replace(",", "."), // Replace commas with dots for consistency
            endTime: match[3].replace(",", "."),
            text: match[4].trim().replace(/\n/g, " "), // Ensure clean formatting
        });
    }
    return captions;
};
