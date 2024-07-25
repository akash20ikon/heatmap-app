# HeatMapApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.17.

## Design Choice 
I am using mat-grid angular material classes for the formation of gird layout for the heatmap.
Three diff colors for diff friquencies i.e. low, mid and high.

## Component State 
The component i.e heatmap.component This component is being initiated from app.component.html.
The component is subscribing the data from static-mock folder using an api GET call request.
It has logic related properties which is helping in data binding for the creation of heatmap.

## Data Processing
Assumptions - The data is a month data - 28days means - 28 object in an month array - each object contains two key values timestamp(date of the month of event occurence) and intensity(intensity value of that event).
The frequency of intensity is classified into three sections low, mid and high.
class interval formula = (maxmimu intensity - minimum intensity)/3

## Updates
The data handling in component is fully dynamic changing the dataset in static-mock(with the defined data structure) will reflect the changes in UI
Things to note while changing data - 
1) The month is considered to be of 28days so 29,30 and 31 dates are invalid date and the console error will come - error handling is not done.
2) In case of duplicate dates the second occurence will considered as the updated value from backend and no sumition logic is handled by frontend.

## local setup
install the node modules - npm install.
and run - npm start.
In localhost:4200 or whatever you choose, the UI we can see.
