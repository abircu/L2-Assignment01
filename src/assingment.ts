


{
    // 

    function formatString(input: string, toUpper?: boolean): string{
        return toUpper!==false? input.toUpperCase():input.toLowerCase();
    }


    
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
        return items.filter((item)=>item.rating>=4);
    }
    const books=[
        {title:'book A',rating:4.5},
        {title:'book B',rating:3.2 },
        {title:'book C',rating:5.0},
    ];
    const filterBooks=filterByRating(books);
    




    function concatenateArrays<T>(...arrays: T[][]): T[]{
        let result:T[]=[];
        for(let i=0;i<arrays.length; i++){
            result=result.concat(arrays[i]);
        }
        return result;
       
    }





  
    class Vehicle{
      private make:string;
      private year:number;
      constructor(make:string, year:number){
        this.make=make;
        this.year=year;
      }
    public getInfo():string{
       return`Make ${this.make}, Year ${this.year}`;
      }
    }
  class Car extends Vehicle{
    private model:string;
    constructor(make:string,year:number,model:string){
        super(make,year);
        this.model=model;
    }
    public getModel():string{
        return `Model:${this.model}`
    }
  };
  const myCar=new Car('Toyota',2020,'prado');






  function processValue(value:string|number):number{
    if(typeof value==="string"){
        return value.length;
    }else{
        return value*2;
    }
  };






  interface Product{
    name:string;
    price:number;
  }

  function getMostExpensiveProduct(products:Product[]):Product|null{
    if(products.length===0){
        return null;
    }

    let mostExpensive=products[0];
    for(let i=0;i<products.length; i++){
        if(products[i].price>mostExpensive.price){
            mostExpensive=products[i]
        }
    }
    return mostExpensive;
  }
  
  const products=[
    {name:"Pen",price:10},
    {name:"Natebook",price:20},
    {name:"Bag", price:50},
  ]
  
 const mostExpensiveProduct = getMostExpensiveProduct(products)




 enum Day{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
 }

 function getDayType(day:Day):string{
    if(day===Day.Friday||day===Day.Saturday){
        return "Weekend";
    }else{
        return "Weekday"
    }
 }


 


async function squareAsync(n:number):Promise<number>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n<0){
                reject(new Error('Negative number not allowed'));
            }else{
                resolve(n*n);
            }
        },1000);
    })
}





}