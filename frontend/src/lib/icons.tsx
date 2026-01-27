import {
  IconAutomation,
  IconBoltFilled,
  IconBulb,
  IconMap,
  IconShield,
  IconTable,
  IconTableFilled,
  IconUserCog,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import {
  AppWindow as IconAppWindow,
  HardDrive as IconHardDrive,
  HardDriveDownload as IconHardDriveDownload,
  History as IconHistory,
  MemoryStick as IconMemoryStick,
  MonitorCheck as IconMonitorCheck,
  PackageCheck as IconPackageCheck,
  Signal as IconSignal,
  Smartphone as IconSmartphone,
  UsersRound as IconUsersRound,
} from "lucide-react";

import IconForge from "@/components/icons/forge";
import IconSpigot from "@/components/icons/spigot";
import type { IconName } from "@/types/directus";

// biome-ignore lint/suspicious/noExplicitAny: Because of mapping type definition
export const iconMapper: { [key in IconName]: React.ComponentType<any> } = {
  Spigot: IconSpigot,
  Forge: IconForge,
  Automation: IconAutomation,
  BoltFilled: IconBoltFilled,
  Bulb: IconBulb,
  Map: IconMap,
  Shield: IconShield,
  Table: IconTable,
  TableFilled: IconTableFilled,
  UserCog: IconUserCog,
  Users: IconUsers,
  World: IconWorld,
  HardDrive: IconHardDrive,
  HardDriveDownload: IconHardDriveDownload,
  MemoryStick: IconMemoryStick,
  Smartphone: IconSmartphone,
  UsersRound: IconUsersRound,
  AppWindow: IconAppWindow,
  Signal: IconSignal,
  PackageCheck: IconPackageCheck,
  MonitorCheck: IconMonitorCheck,
  History: IconHistory,
};

export function IconMapper({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const IconComponent = iconMapper[name];

  return <IconComponent className={className} />;
}
