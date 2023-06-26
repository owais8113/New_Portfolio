import React from 'react';

const PDFViewer = () => {
  const pdfURL = 'https://drive.google.com/file/d/10RzfiuqCHjJUFGbxOp5uCjXq6AsrZexe/view?usp=sharing';

  return (
    <div>
      <iframe src={`https://drive.google.com/file/d/${getFileId(pdfURL)}/preview`} title="PDF Viewer" width="100%" height="500px" />
    </div>
  );
};

export default PDFViewer;

// Helper function to extract the file ID from the Google Drive URL
const getFileId = (url) => {
  const match = url.match(/\/file\/d\/(.*?)\//);
  if (match && match[1]) {
    return match[1];
  }
  return '';
};
