import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import resumepdf from '../files/Ibrahim-Sevindik-Resume.pdf'
//import { Document } from 'react-pdf/dist/entry.webpack';
 
class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Document
          file={resumepdf}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default Resume;