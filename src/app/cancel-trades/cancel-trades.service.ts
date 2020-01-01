import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ImportFile } from "./importFile";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map, first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CancelTradesService {
  constructor(private http: HttpClient) {}

  private importFilesUrl = "api/cancel-trades/importFiles.json";

  getImportFiles(): Observable<ImportFile[]> {
    return this.http.get<ImportFile[]>(this.importFilesUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
