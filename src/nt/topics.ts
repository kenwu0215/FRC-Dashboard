import { NetworkTablesTopic, NetworkTablesTypeInfos } from "ntcore-ts-client";
import { nt } from "./nt";

export const shooterVelocity : NetworkTablesTopic<number> = nt.createTopic(
  "/SmartDashboard/Shooter/Velocity",
  NetworkTablesTypeInfos.kDouble
);

export const shooterCurrent = nt.createTopic(
  "/SmartDashboard/Shooter/Current",
  NetworkTablesTypeInfos.kDouble
);