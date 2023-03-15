import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from "xlsx";

const ArrayToExcelButton = ({ data, fileName }) => {
  const excelData = JSON.stringify(data)
  
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
  const fileExtension = '.xlsx';
  
  const exportToExcel = async () => {
  const ws = XLSX.utils.json_to_sheet(excelData);
  const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, {bookType: 'xlsx', type: 'array' });
  const data = new Blob ([excelBuffer], { type: fileType });
  FileSaver.saveAs (data, fileName + fileExtension);
  }
 
    
  return (
    <div>
      <button onClick={(e)=>{exportToExcel(fileName)}}>
       Export
      </button>
    </div>
  )
}

export default ArrayToExcelButton
