
export function ramdom (amount: number){
    let Cards:number[] = Array.from({length: amount}, (v, k) => k+1);
    Cards = [...Cards,...Cards];
    Cards.sort(()=>Math.random() - 0.5);
    return Cards.map((card,index) => ({id:index,number:card,isFlipped:false,isDelete:false}))
}
 