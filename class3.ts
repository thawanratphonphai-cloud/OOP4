class House{
    constructor(public name:string,public room:number,public bath:number,public area:number,public price:number){
    }
    showDetaills():void{
        console.log(`แบบบ้าน ${this.name}${this.room} ห้องนอน ${this.bath}ห้องน้ำ พื้นที่${this.area}ตารางเมตร ราคา${this.price} บาท`);
    }
    adjustPrice(newPrice:number){
        this.price=newPrice;
}
}
let House1 =new House("ขวัญเอ๋ยขวัญมา",4,5,200,21000000000);
House1.showDetaills();
House1.adjustPrice(1800000);
House1.showDetaills();