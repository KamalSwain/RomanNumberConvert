import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-to-roman',
  templateUrl: './number-to-roman.component.html',
  styleUrls: ['./number-to-roman.component.scss']
})
export class NumberToRomanComponent implements OnInit {

  public result: string;
  public numb:number;

  constructor() { }

  ngOnInit() {
  }

  /* Function getting called when user enters the number and submit from html template. */

  convertNumber(numb:number) : string {
    this.result ='';

    // Storing default roman value to loop through.
    const romanFormat = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
  };


    // Loop through the romanFormat object to get the key.
    // tslint:disable-next-line: forin
    for (let key in romanFormat) {
      
        // Returning the "KEY" directly if user entered number matched with "romanFormat" number.
      if (numb == romanFormat[key]) {
              return this.result += key;
          }

      // if user entered number did not match with any "romanFormat". 
      var checkIfBigNum = numb > romanFormat[key];   // checking if the entered number is bigger than any of the "romanFormat" number.
      if (checkIfBigNum) {
          this.result = this.result + key.repeat(numb / romanFormat[key]);  // Repeating the "KEY" that many times after division quotient.
          numb = numb % romanFormat[key]; // If reminder is  not 0 then setting numb variable to reminder value to iterate next match found
      }  
  }
    return this.result;  // return the final result after all loop iteration done.
}

}
