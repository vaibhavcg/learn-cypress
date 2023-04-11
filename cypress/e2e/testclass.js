
export class testClass{
    
    constructor(n){
        this.n = n;
    }
    
    printEven(){
        console.log("Printing even upto :",this.n);
        var intArr = new Array();
        for(var i=0;i<=this.n;i++){
            if(i%2==0){
                intArr.push(i);
            }
            else
                continue;
        }
        console.log(intArr);
    }
}