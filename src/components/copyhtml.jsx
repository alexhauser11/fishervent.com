import React, { useRef } from 'react';

function CopyHtml({ children }) {
  const contentRef = useRef();

  const handleCopy = () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(contentRef.current);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      const success = document.execCommand('copy');
      alert(success ? 'Copied Content!' : 'Copy failed');
    } catch (err) {
      alert('Copy error: ' + err.message);
    }

    selection.removeAllRanges(); // Clean up selection
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button className='copyButton'

        onClick={handleCopy}>Copy Content</button>
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}

export default CopyHtml;