import { Component, OnInit } from "@angular/core";
import { CancelTradesService } from "./cancel-trades.service";
import { ImportFile } from "./importFile";

@Component({
  selector: "app-cancel-trades",
  templateUrl: "./cancel-trades.component.html",
  styleUrls: ["./cancel-trades.component.css"]
})
export class CancelTradesComponent implements OnInit {
  pageTitle = "Cancel Trades";
  importFiles: ImportFile[] = [];
  errorMessage: string;

  constructor(private service: CancelTradesService) {}

  ngOnInit(): void {
    this.service.getImportFiles().subscribe(
      importFiles => {
        this.importFiles = importFiles;
        console.log(importFiles);
      },
      error => (this.errorMessage = <any>error)
    );
  }

  cancelTrade(id: number): void {
    console.log(id + " clicked");
  }
}
