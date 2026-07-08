class Rectangle{
    width:number;
    height:number;

    constructor(w:number,h:number){
        this.width =w;
        this.height =h;
    }
    Area():number{
        return this.width*this.height;
    }
    Perimeter():number{
        return 2*(this.width+this.height);
    }
}
const Rectangle1 =new Rectangle(5,10);
console.log("Area",Rectangle1.Area());
console.log("Perimeter",Rectangle1.Perimeter());