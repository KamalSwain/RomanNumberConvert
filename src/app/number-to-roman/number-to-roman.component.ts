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

  convertNumber(numb:number) : string {
    this.result ='';
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

    // tslint:disable-next-line: forin
    for (let key in romanFormat) {
      if (numb == romanFormat[key]) {
              return this.result += key;
          }

      var checkIfBigNum = numb > romanFormat[key];
      if (checkIfBigNum) {
          this.result = this.result + key.repeat(numb / romanFormat[key]);
          numb = numb % romanFormat[key];
      }  
  }
    return this.result;
}

}
