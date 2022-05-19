const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) ) + 15;
  const warriorDamage = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) ) + warrior.strength;
  const mageDamage = () => mage.mana < 15 ? 'Não possui mana suficiente' : {
    Damage: Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) ) + mage.intelligence,
    Mana: '-15',            
};
  
  const gameActions = {
      warAct() {
          const damageDone = warriorDamage();
          warrior.damage = damageDone;
          dragon.healthPoints -= damageDone;
          return `O warrior causou ${damageDone} ao dragão!
          A besta ainda tem ${gameActions.dragonHealth} de vida.`;
      },
      mageAct() {
          const damageDone = mageDamage().Damage;
          mage.damage = damageDone;
          mage.mana -= 15;
          dragon.healthPoints -= damageDone;
          return `O mage causou ${damageDone} ao dragão!
          A besta ainda tem ${gameActions.dragonHealth} de vida.`
      },
      dragonAct() {
        const damageDone = dragonDamage();
        dragon.damage = damageDone;
        warrior.healthPoints -= damageDone;
        mage.healthPoints -= damageDone;
        return `O dragão causou ${damageDone} aos membros de batalha!
        O warrior tem ${warrior.healthPoints}
        O mage tem ${mage.healthPoints}`
      },
      roundEnd() {
          this.warAct(),
          this.mageAct(),
          this.dragonAct()
          return battleMembers;
      }
  };
  
  console.log(gameActions.roundEnd());