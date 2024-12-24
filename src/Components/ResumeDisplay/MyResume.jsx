import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import Template1 from '../TemplatesComponents/Template1';
import Template2 from '../TemplatesComponents/Template2';
import Template3 from '../TemplatesComponents/Template3';
import Template4 from '../TemplatesComponents/Template4';
import Template5 from '../TemplatesComponents/Template5';
import Template6 from '../TemplatesComponents/Template6';
import Template7 from '../TemplatesComponents/Template7';
import Template8 from '../TemplatesComponents/Template8';
import Template9 from '../TemplatesComponents/Template9';
import html2canvas from 'html2canvas';
import SuccessMessage from './Modal';

function MyResume() {
  const selectedTemplate = useSelector(
    (state) => state.dataStore.selectedTemplate
  );
  const [showModal, setShowModal] = useState(false);

  const downloadComponentPDF = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input, { scrollY: -window.scrollY })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4'); // Use "pt" for points, which is better for PDF dimensions
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;

        // Calculate the height based on the width of the PDF
        const height = pdfWidth / ratio;

        // Add image to PDF
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, height);
        pdf.save('resume.pdf');
      })
      .then(() => {
        setTimeout(() => {
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 6000);
        }, 100);
      });
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <div className='row mt-2'>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Link to='/detailsfillingpage/keyskills'>
            <button
              style={{
                padding: '10px',
                margin: '5px',
                backgroundColor: '#007bff',
                color: '#fff',
              }}
            >
              {' '}
              Go-Back
            </button>
          </Link>
          <button
            style={{
              padding: '10px',
              margin: '5px',
              backgroundColor: '#28a745',
              color: '#fff',
            }}
            onClick={downloadComponentPDF}
          >
            Save Resume
          </button>
        </div>
      </div>
      <div className='mt-2'>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <div id='outerdiv'>
            <div
              id='divToPrint'
              style={{
                width: '1200px',
                margin: '0 auto',
                scale: '1',
                transformOrigin: 'top left',
              }}
            >
              {' '}
              {/* Fixed width for PDF */}
              {/* In this div, user selected template is rendered along with the details filled by the user. */}
              {selectedTemplate === '' ? (
                <div>
                  <h1>Please select a template!</h1>
                </div>
              ) : selectedTemplate === 'Template 1' ? (
                <Template1 />
              ) : selectedTemplate === 'Template 2' ? (
                <Template2 />
              ) : selectedTemplate === 'Template 3' ? (
                <Template3 />
              ) : selectedTemplate === 'Template 4' ? (
                <Template4 />
              ) : selectedTemplate === 'Template 5' ? (
                <Template5 />
              ) : selectedTemplate === 'Template 6' ? (
                <Template6 />
              ) : selectedTemplate === 'Template 7' ? (
                <Template7 />
              ) : selectedTemplate === 'Template 8' ? (
                <Template8 />
              ) : selectedTemplate === 'Template 9' ? (
                <Template9 />
              ) : null}
            </div>
          </div>
        </div>

        {/* this SuccessMessage component displays modal popup on the screen with the message 'Your resume has been successfully downloaded'. */}
        <div>
          <SuccessMessage showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
}

export default MyResume;
