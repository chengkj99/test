name = 'Elsa'
health = 50
magicPoints = 80
inventory = {'gold': 40, 'healing potion': 2, 'key': 1}

print('The hero %s has %s health.' % (name, health))



heroName = 'Elsa'
heroHealth = 50
heroMagicPoints = 80
heroInventory = {'gold': 40, 'healing potion': 2, 'key': 1}
monsterName = 'Goblin'
monsterHealth = 20
monsterMagicPoints = 0
monsterInventory = {'gold': 12, 'dagger': 1}

print('The hero %s has %s health.' % (heroName, heroHealth))


monsterName = ['Goblin', 'Dragon', 'Goblin']
monsterHealth = [20, 300, 18]
monsterMagicPoints = [0, 200, 0]
monsterInventory = [
  {'gold': 12, 'dagger': 1},
  {'gold': 890, 'magic amulet': 1},
  {'gold': 15, 'dagger': 1}
]




def vanquishMonster(monsterIndex):
    del monsterName[monsterIndex]
    del monsterHealth[monsterIndex]
    del monsterMagicPoints[monsterIndex]
    # Note there is no del for monsterInventory
vanquishMonster(0)





monsters = [
  {
    'name': 'Goblin',
    'health': 20, 'magic points': 0,
    'inventory': {
      'gold': 12, 'dagger': 1
    }
  },
  {
    'name': 'Dragon',
    'health': 300,
    'magic points': 200,
    'inventory': {
      'gold': 890,
      'magic amulet': 1
    }
  },
  {
    'name': 'Goblin',
    'health': 18,
    'magic points': 0,
    'inventory': {
      'gold': 15, 'dagger': 1
    }
  }
]







class LivingThing():
    def __init__(self, name, health, magicPoints, inventory):
        self.name = name
        self.health = health
        self.magicPoints = magicPoints
        self.inventory = inventory

# Create the LivingThing object for the hero.
hero = LivingThing('Elsa', 50, 80, {})
monsters = []
monsters.append(LivingThing('Goblin', 20, 0, {'gold': 12, 'dagger': 1}))
monsters.append(LivingThing('Dragon', 300, 200, {'gold': 890, 'magic amulet': 1}))

print('The hero %s has %s health.' % (hero.name, hero.health))



class LivingThing():





  def __init__(self, name, health, magicPoints, inventory):




hero = LivingThing('Elsa', 50, 80, {})



self.name = name
self.health = health
self.magicPoints = magicPoints
self.inventory = inventory




# Create the LivingThing object for the hero.
hero = LivingThing('Elsa', 50, 80, {})
monsters = [LivingThing('Goblin', 20, 0, {'gold': 12, 'dagger': 1}),
            LivingThing('Dragon', 300, 200, {'gold': 890, 'magic amulet': 1}),
            LivingThing('Goblin', 18, 0, {'gold': 15, 'dagger': 1})]

print('The hero %s has %s health.' % (hero.name, hero.health))
































