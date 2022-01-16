const salaries:number[]=[8000,5000,7000,4000,3000];
console.log(salaries);

const friend:string[]=['sakib','kamal','jehad'];

let sum=0;

for (const max of salaries){
    if(max>sum){
        sum=max;
    }
}
console.log(sum);
