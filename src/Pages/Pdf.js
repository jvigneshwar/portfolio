import React from 'react'
import ExamplePdf from "../Asserts/foss.pdf";

const Pdf = () => {
  return (
    <div>
        <a
        href={ExamplePdf}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
      <button>Download</button>
    </a>
    </div>
  )
}

export default Pdf