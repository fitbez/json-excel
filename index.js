// const data = [
//   {
//     "first name": "fitsum",
//     "last name": "Belayneh",
//   },
//   {
//     "first name": "hana",
//     "last name": "Belayneh",
//   },
//   {
//     "first name": "solomon",
//     "last name": "Belayneh",
//   },
//   {
//     "first name": "azeb",
//     "last name": "Belayneh",
//   },
// ];
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

const url = "https://jsonplaceholder.typicode.com/posts";

const downloadAsExcel = () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = {
        Sheets: {
          data: worksheet,
        },
        SheetNames: ["data"],
      };
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      console.log(excelBuffer);
      saveAsExcel(excelBuffer, "myFile");
    });

  const saveAsExcel = (buffer, filename) => {
    const data = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${filename}_export_${new Date().getTime()}XCEL_EXTENSION`);
  };
};
// console.log(data);

// const downloadAsExcel = () => {

// };
