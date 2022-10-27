import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PDF = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({

        content: () => componentRef.current,
        documentTitle: 'react-pdf',
        onAfterPrint: () => alert('download success')

    })
    return (
        <div className='m-4'>
                <div ref={componentRef}>
                    <h3>Here is details about of this course.</h3>
                    <p>If your career has been built upon technologies or practices that are fading away, it’s time to get reskilled and ready for your next opportunity. Here is a list of the best IT certifications courses in 2023 that can help you to jump ahead in those fields:</p>
                    <p>1: Data Science, 2:Big Data, 4: Artificial Intelligence and Machine Learning 5:Cloud Computing 6:Project Management</p>
                </div>
                <button className='btn btn-primary' onClick={handlePrint}>Download PDF</button>
            </div>
    );
};

export default PDF;