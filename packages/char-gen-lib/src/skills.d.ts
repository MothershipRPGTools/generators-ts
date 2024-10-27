export type Skill = {
  name: string;
  bonus: number;
  dependsOn?: Skill[];
};

export class TrainedSkill {
  static readonly LINGUISTICS = new TrainedSkill("Linguistics");
  static readonly ZOOLOGY = new TrainedSkill("Zoology");
  static readonly BOTANY = new TrainedSkill("Botany");
  static readonly GEOLOGY = new TrainedSkill("Geology");
  static readonly INDUSTRIALEQUIPMENT = new TrainedSkill("Industrial Equipment");
  static readonly JURYRIGGING = new TrainedSkill("Jury-Rigging");
  static readonly CHEMISTRY = new TrainedSkill("Chemistry");
  static readonly COMPUTERS = new TrainedSkill("Computers");
  static readonly ZEROG = new TrainedSkill("Zero-G");
  static readonly MATHEMATICS = new TrainedSkill("Mathematics");
  static readonly ART = new TrainedSkill("Art");
  static readonly ARCHAEOLOGY = new TrainedSkill("Archaeology");
  static readonly THEOLOGY = new TrainedSkill("THEOLOGY");
  static readonly MILITARYTRAINING = new TrainedSkill("Military Training");
  static readonly RIMWISE = new TrainedSkill("Rimwise");
  static readonly ATHLETICS = new TrainedSkill("Athletics");

  static readonly BONUS = 10;
  private constructor(private readonly name: string) {}

  toString() {
    return this.name;
  }
}

export class ExpertSkill {
  static readonly PSYCHOLOGY = new ExpertSkill("Psychology", [TrainedSkill.LINGUISTICS, TrainedSkill.ZOOLOGY]);
  static readonly PATHOLOGY = new ExpertSkill("Pathology", [TrainedSkill.ZOOLOGY, TrainedSkill.BOTANY]);
  static readonly FIELDMEDICINE = new ExpertSkill("Field Medicine", [TrainedSkill.ZOOLOGY]);
  static readonly ECOLOGY = new ExpertSkill("Ecology", [TrainedSkill.BOTANY, TrainedSkill.GEOLOGY]);
  static readonly ASTEROIDMINING = new ExpertSkill("Asteroid Mining", [
    TrainedSkill.GEOLOGY,
    TrainedSkill.INDUSTRIALEQUIPMENT,
  ]);
  static readonly MECHANICALREPAIR = new ExpertSkill("Mechanical Repair", [
    TrainedSkill.INDUSTRIALEQUIPMENT,
    TrainedSkill.JURYRIGGING,
  ]);
  static readonly EXPLOSIVES = new ExpertSkill("Explosives", [
    TrainedSkill.JURYRIGGING,
    TrainedSkill.CHEMISTRY,
    TrainedSkill.MILITARYTRAINING,
  ]);
  static readonly PHARMACOLOGY = new ExpertSkill("Pharmacology", [TrainedSkill.CHEMISTRY]);
  static readonly HACKING = new ExpertSkill("Hacking", [TrainedSkill.COMPUTERS]);
  static readonly PILOTING = new ExpertSkill("Piloting", [TrainedSkill.ZEROG]);
  static readonly PHYSICS = new ExpertSkill("Physics", [TrainedSkill.MATHEMATICS]);
  static readonly MYSTICISM = new ExpertSkill("Mysticism", [
    TrainedSkill.ART,
    TrainedSkill.ARCHAEOLOGY,
    TrainedSkill.THEOLOGY,
  ]);
  static readonly WILDERNESSSURVIVAL = new ExpertSkill("Wilderness Survival", [
    TrainedSkill.BOTANY,
    TrainedSkill.MILITARYTRAINING,
  ]);
  static readonly FIREARMS = new ExpertSkill("Firearms", [TrainedSkill.MILITARYTRAINING, TrainedSkill.RIMWISE]);
  static readonly HANDTOHANDCOMBAT = new ExpertSkill("Hand-To-Hand Combat", [
    TrainedSkill.ATHLETICS,
    TrainedSkill.MILITARYTRAINING,
    TrainedSkill.RIMWISE,
  ]);

  static readonly BONUS = 15;
  private constructor(
    private readonly name: string,
    private readonly dependsOn: TrainedSkill[],
  ) {}

  toString() {
    return this.name;
  }
}

export class MasterSkill {
  static readonly SOPHONTOLOGY = new MasterSkill("Sophontology", [ExpertSkill.PSYCHOLOGY]);
  static readonly EXOBIOLOGY = new MasterSkill("Exobiology", [ExpertSkill.PATHOLOGY]);
  static readonly SURGERY = new MasterSkill("Surgery", [ExpertSkill.PATHOLOGY, ExpertSkill.FIELDMEDICINE]);
  static readonly PLANETOLOGY = new MasterSkill("Planetology", [ExpertSkill.ECOLOGY, ExpertSkill.ASTEROIDMINING]);
  static readonly ROBOTICS = new MasterSkill("Robotics", [ExpertSkill.MECHANICALREPAIR]);
  static readonly ENGINEERING = new MasterSkill("Engineering", [ExpertSkill.MECHANICALREPAIR]);
  static readonly CYBERNETICS = new MasterSkill("Cybernetics", [ExpertSkill.MECHANICALREPAIR]);
  static readonly ARTIFICIALINTELLIGENCE = new MasterSkill("ArtificialIntelligence", [ExpertSkill.HACKING]);
  static readonly HYPERSPACE = new MasterSkill("Hyperspace", [ExpertSkill.PHYSICS, ExpertSkill.MYSTICISM]);
  static readonly XENOESOTERICISM = new MasterSkill("Xenoesotericism", [ExpertSkill.MYSTICISM]);
  static readonly COMMAND = new MasterSkill("Command", [ExpertSkill.PILOTING, ExpertSkill.FIREARMS]);

  static readonly BONUS = 20;
  private constructor(
    private readonly name: string,
    private readonly dependsOn: ExpertSkill[],
  ) {}

  toString() {
    return this.name;
  }
}
