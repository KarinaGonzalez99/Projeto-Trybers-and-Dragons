import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private energyType_: EnergyType = 'stamina';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdInstances += 1;
  }

  public get energyType(): EnergyType {
    return this.energyType_;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }
}
