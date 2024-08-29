const Character = require('./character');
const Thief = require('./thief');
const Mage = require('./mage');
const Warrior = require('./warrior');

// Exemplo de personagem básico
const hero = new Character('Hero', 100, 20, 15);

// Exemplo de ladrão
const sneakyThief = new Thief('Sneaky Thief', 80, 25, 10);

// Exemplo de mago
const powerfulMage = new Mage('Powerful Mage', 90, 18, 12, 30);

// Exemplo de guerreiro
const mightyWarrior = new Warrior('Mighty Warrior', 120, 22, 20, 10);

// Atacando outros personagens
sneakyThief.attack(hero);
powerfulMage.attack(mightyWarrior);

// Mudando a posição do guerreiro
mightyWarrior.changeStance(); // Alterna para a posição de defesa
mightyWarrior.attack(sneakyThief); // Calcula o ataque com base na defesa

console.log(hero);
console.log(sneakyThief);
console.log(powerfulMage);
console.log(mightyWarrior);
