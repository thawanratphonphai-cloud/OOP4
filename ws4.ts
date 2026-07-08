class Hero {
    constructor(name, hp, attackPower) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
    }

    attack(target) {
        target.hp -= this.attackPower;

        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);

        if (target.hp <= 0) {
            console.log(`${target.name} has fainted!`);
        }
    }
}

const hero1 = new Hero("Dream", 100, 30);
const hero2 = new Hero("Goblin", 50, 10);

hero1.attack(hero2);
hero1.attack(hero2);