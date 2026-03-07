import random
# Klasa bazowa postaci
# Stwórz klasę o nazwie Character, która będzie mieć konstruktor
# ten konstruktor będzie miał oprócz self dwa argumenty: name, hp
# Przypisz do obiektu te właściwości
class Character:
    def __init__(self, name, hp, weapon):
        self.name = name
        self.hp = hp
        self.weapon = weapon

class Knight(Character):
    def __init__(self, name, hp):
        Character.__init__(self, name, hp)
    def printInfo(self):
        # Napisz metodę printInfo, która wyświetli informacje o postaci:
        # "Jestem rycerzem, zwą mnie {self.name} i mam {self.hp} punktów życia"
        print(f"Jestem rycerzem, zwą mnie {self.name} i mam {self.hp} punktów zycia")

rycerz = Knight("Zawisza Czarny", 1000)

rycerz.printInfo()

# Klasa bazowa dla broni
# Stwórz klasę o nazwie Weapon, która będzie miała konstruktor
# Niech konstruktor oprócz self ma dwa argumenty: damage, critChance, actionPoints
# Przypisz je do self
# Oprócz konstruktora niech ma metodę calcDamage(self)
# - Ta metoda będzie losować liczbę od zera do critChance
# losuje sie liczba od 1 do 100
# jesli liczba jest mniejsza niz critChance, to atak jest krytyczny

class Weapon:
    critMultiplier = 1.5
    def __init__(self, damage, critChance, actionPoints):
        self.damage = damage
        self.critChance = critChance
        self.actionPoints = actionPoints
    def calcDamage(self):
        critNumber = random.randint(1, 100)
        if(critNumber <= self.critChance):
            return self.damage * self.critMultiplier
        else:
            return self.damage
