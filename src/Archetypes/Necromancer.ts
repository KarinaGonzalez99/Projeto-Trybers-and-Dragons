import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private energyType_: EnergyType = 'mana';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdInstances += 1;
  }

  public get energyType(): EnergyType {
    return this.energyType_;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }
}
