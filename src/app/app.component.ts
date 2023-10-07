import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  checked: boolean; // Add the 'checked' property to the interface
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    checked: false,
  },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', checked: false },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', checked: false },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    checked: false,
  },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', checked: false },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', checked: false },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    checked: false,
  },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', checked: false },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    checked: false,
  },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', checked: false },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'checked',
  ];
  dataSource: PeriodicElement[] = ELEMENT_DATA;
  filterValue: string = '';

 

  // filterData(filterValue: string) {
  //   filterValue = filterValue.trim().toLowerCase();
  //   const filteredData = ELEMENT_DATA.filter((element) =>
  //     element.name.toLowerCase().includes(filterValue)
  //   );
  
  //   // Uncheck all elements in the dataSource
  //   this.dataSource.forEach((element) => (element.checked = false));
  
  //   // Check matching elements in filteredData
  //   filteredData.forEach((filteredElement) => {
  //     const matchingElement = this.dataSource.find(
  //       (element) => element.name === filteredElement.name
  //     );
  //     if (matchingElement) {
  //       matchingElement.checked = true;
  //     }
  //   });
  
  //   // Update the dataSource
  //   this.dataSource = [...this.dataSource];
  // }
  filterData(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    const filteredData = ELEMENT_DATA.filter((element) =>
      element.name.toLowerCase() === filterValue
    );
  
    // Uncheck all elements in the dataSource
    this.dataSource.forEach((element) => (element.checked = false));
  
    // Check matching elements in filteredData
    filteredData.forEach((filteredElement) => {
      const matchingElement = this.dataSource.find(
        (element) => element.name === filteredElement.name
      );
      if (matchingElement) {
        matchingElement.checked = true;
      }
    });
  
    // Update the dataSource
    this.dataSource = [...this.dataSource];
  }
  
}
