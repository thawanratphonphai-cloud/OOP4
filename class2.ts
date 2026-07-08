class Car{
    brand:string;
    model:string;
    type:string;
    engine:number;
    doors:number;
    price:number;

    constructor(b:string,m:string,t:string,e:number,d:number,p:number){
        this.brand =b;
        this.model =m;
        this.type =t;
        this.engine =e;
        this.doors =d;
        this.price =p;
    }
    display():void{
        console.log(`รถ ยี่ห้อ ${this.brand} รุ่น ${this.model}ประเภท ${this.type}เครื่องยนต์ ${this.engine}ซีซี ${this.doors}ประตู ${this.price}บาท`);
    }
    changeCC(cc:number):void{
        this.engine=cc;

    }
}

let v1 = new Car("Toyota","Camry","เก๋ง",2000,4,2800000000000);
let v2 =new Car ("Isuzu","Mu x","กระบะ",2500,5,15000000000);

v1.display();
v2.display();
v1.changeCC(2200);
v1.display();
