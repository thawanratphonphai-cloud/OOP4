class BankAccount{
    constructor(public owner:string,public balance:number){
    }
    displayBal():void{
        console.log(`ชื่อบัญชี ${this.owner}มียอดเงินคงเหลือ ${this.balance}`);
    }
    deposit(amount:number):void{
        this.balance +=amount;
        console.log(`ชื่อบัญชี ${this.owner}ฝากเงิน ${amount}บาท ยอดเงินคงเหลือ ${this.balance}บาท`);
    }
    withdraw(amount:number):void{
        if(this.balance >=amount){
            this.balance-=amount;
            console.log(`ชื่อบัญชี ${this.owner}ถอนเงิน ${amount}บาท ยอดเงินคงเหลือ ${this.balance}บาท`);
        }else{
            console.log(`ชื่อบัญชี ${this.owner}ถอนเงิน ${amount}บาท ยอดเงินคงเหลือ ${this.balance}บาท`);
        }
    }
}
const account1=new BankAccount("Thawanrat",2000);
account1.displayBal();
account1.deposit(500);
account1.withdraw(1700);
