import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import fileSaver from "file-saver";

@Component({
  selector: 'app-report-bottom',
  templateUrl: './report-bottom.component.html',
  styleUrls: ['./report-bottom.component.css']
})
export class ReportBottomComponent implements OnInit {

  products: Product[] = [];

  selectedProducts: Product[] [] = [];

  constructor() {}

  cols: any[] = [];     

  exportColumns: any[] = [];

  ngOnInit() {   

    this.cols = [
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "category", header: "Category" },
      { field: "quantity", header: "Quantity" }
    ];

    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    fileSaver.then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
}
