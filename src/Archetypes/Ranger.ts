import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private energyType_: EnergyType = 'stamina';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdInstances += 1;
  }

  public get energyType(): EnergyType {
    return this.energyType_;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }
}
