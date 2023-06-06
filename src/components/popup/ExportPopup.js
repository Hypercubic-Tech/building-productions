import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import TableExport from "./TableExport";

const ExportPopup = ({ setSelect, totalSum, aggregatedProducts, projectId, productsToMap, startIndex, endIndex, activeItem, totalSumPrice }) => {
    const [format, setFormat] = useState('excel');

    const handleFormatChange = (e) => {
      setFormat(e.target.value);
    };
  
    const exportToPDF = () => {
      const table = document.getElementById('tableId');
  
      html2canvas(table).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('table.pdf');
      });
    };
  
    const exportToExcel = () => {
      const workbook = XLSX.utils.table_to_book(document.getElementById('tableId'));
      XLSX.writeFile(workbook, 'table.xlsx');
    };
  
    const handleExport = (event) => {
      event.preventDefault(); // Prevents page refresh
  
      if (format === 'pdf') {
        exportToPDF();
      } else if (format === 'excel') {
        exportToExcel();
      }
    };

    return (
        <div className="modal fade show" >
            <div className="modal modal-dialog-centered custom-width">
                <div className="modal-content custom-width" style={{ width: "90% ", height: "90%", margin: "5%" }}>
                <div className="modal-header" id="kt_modal_add_user_header">
                        <h3>ამოღება</h3>
                        <div className=" w-1000">
                            <div className=" mb-100">
                                <label className="required fs-6 fw-bold form-label mb-2 georgian">
                                აირჩიეთ ფორმატი:
                                </label>
                                <select
                                name="format"
                                data-control="select2"
                                data-placeholder="აირჩიეთ ფორმატი"
                                data-hide-search="true"
                                className="form-select form-select-solid georgian"
                                value={format}
                                onChange={handleFormatChange}
                                >
                                <option value="excel">Excel</option>
                                <option value="pdf">PDF</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <button
                                type="reset"
                                className="btn btn-light me-3 georgian"
                                data-kt-users-modal-action="cancel"
                                onClick={() => {
                                    setSelect(null)
                                }}
                                >
                                გამორთვა
                                </button>
                                <button
                                className="btn btn-primary"
                                data-kt-users-modal-action="submit"
                                onClick={(event) => handleExport(event)}
                                >
                                <span className="indicator-label georgian">
                                    გადმოწერა
                                </span>
                                <span className="indicator-progress georgian">
                                    გთხოვთ დაიცადოთ...
                                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                </span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            data-kt-users-modal-action="close"
                            // style={{ marginLeft: "30%" }}
                        >
                            <span
                                className="svg-icon svg-icon-1"
                                onClick={() => {
                                    setSelect(null);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <rect
                                        opacity="0.5"
                                        x={6}
                                        y="17.3137"
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-45 6 17.3137)"
                                        fill="black"
                                    />
                                    <rect
                                        x="7.41422"
                                        y={6}
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(45 7.41422 6)"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                            <TableExport 
                                totalSum={totalSum} 
                                aggregatedProducts={aggregatedProducts} 
                                projectId={projectId}
                                productsToMap={productsToMap} 
                                startIndex={startIndex}
                                endIndex={endIndex}
                                activeItem={activeItem}
                                totalSumPrice={totalSumPrice}
                            />
                </div>
            </div>
        </div>
    );
}

export default ExportPopup;