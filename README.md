# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

  // Method to get data from server
  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/data`);
  }

  // Method to post data to server
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/data`, data);
  }


    // Method to get data from server
  getData() {
    this.sharedService.getData().subscribe({
      next: response => {
        console.log('Data fetched successfully', response);
      },
      error: err => {
        console.error('Error fetching data', err);
      }
    });
  }

  // Method to post data to server
  postData(data: any) {
    this.sharedService.postData(data).subscribe({
      next: response => {
        console.log('Data posted successfully', response);
      },
      error: err => {
        console.error('Error posting data', err);
      }
    });
  }