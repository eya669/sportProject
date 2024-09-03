import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string) {
    let ch1 = "";
    
    let v = ["a", 'e', 'i', 'u', 'y', 'A', 'E', 'I', 'U', 'Y', 'O', 'o']
    for (let i = 0; i < ch.length; i++) {
      let x = ch[i];
        for (let j = 0; j < v.length; j++) {
          //utiliser toLowerCase() si v appartient que les car min
            if (x.toLowerCase() == v[j]) {
                x = "*";
                 break;
            }


        }
        ch1 = ch1 + x;
        //ch1+=x;
    }
    return ch1;
//remplacer tous par 
//ch.replace("/aeiuyo/","*")
}
}