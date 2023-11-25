import { Component } from '@angular/core';
interface keyNumberFormat {
  key: number,
  characters: string[],
}
@Component({
  selector: 'app-phone-digit',
  templateUrl: './phone-digit.component.html',
  styleUrls: ['./phone-digit.component.scss']
})
export class PhoneDigitComponent {
  keys: keyNumberFormat[] = [{
    key: 1, characters: [],
  }, {
    key: 2, characters: ["A", "B", "C"],
  }, {
    key: 3, characters: ["D", "E", "F"],
  }, {
    key: 4, characters: ["G", "H", "I"],
  }, {
    key: 5, characters: ["J", "K", "L"],
  }, {
    key: 6, characters: ["M", "N", "O"],
  }, {
    key: 7, characters: ["P", "Q", "R", "S"],
  }, {
    key: 8, characters: ["T", "U", "V"],
  }, {
    key: 9, characters: ["W", "X", "Y", "Z"],
  }];
  selectedKeys: any = [];
  allCombinations: any = [];
  // current_character: any = [];
  // current_key:number = 0;
  combinations_collections:string[] = []
  constructor () {}
  getSelectedKey(key:number) {
    let checkIfKeySelected = this.setSelectedKeys(key);
    if (checkIfKeySelected) {
      return;
    }
    const getAllMatchKeys = this.keys.filter((x:keyNumberFormat)=>this.selectedKeys.includes(x.key) && x.characters.length);
    this.allCombinations = [];
    this.combinations_collections = [];
    // const getAllCharacters = getAllMatchKeys.flatMap((x:any)=>x.characters);
    // console.log("getAllCharacters>>>", getAllCharacters);
    getAllMatchKeys.map((x:keyNumberFormat)=>{
      this.getCombinations(getAllMatchKeys, x)
    })
  }
  getCombinations(match_keys:keyNumberFormat[], active_key:keyNumberFormat) {
    // active_key.characters.map((x:any)=>{
    //   this.combinations_collections.push(x);
    //   match_keys.map((y:keyNumberFormat)=>{
    //     if(y.key == active_key.key) return;
    //     y.characters.map((z:any)=>{
    //       this.allCombinations.push(x+z)
    //     })
    //   })
    // })

    active_key.characters.map((x:any)=>{
      this.combinations_collections.push(x);
      match_keys.map((y:keyNumberFormat)=>{
        if(y.key == active_key.key) return;
        y.characters.map((z:any)=>{
          this.allCombinations.push(x+z)
        })
      })
    });
  }
  setSelectedKeys(key: number) {
    if (this.selectedKeys.includes(key)) {
      return true;
    }
    this.selectedKeys.push(key)
    this.selectedKeys.sort()
    return false;
  }
}
