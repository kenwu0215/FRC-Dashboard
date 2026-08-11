import { NetworkTablesTypeInfos } from "ntcore-ts-client";
import { nt } from "./nt";

export const shooterVelocity = nt.createTopic(
  "/SmartDashboard/Shooter/Velocity",
  NetworkTablesTypeInfos.kDouble,
);

export const shooterCurrent = nt.createTopic(
  "/SmartDashboard/Shooter/Current",
  NetworkTablesTypeInfos.kDouble,
);

export const Topics = {

  shooter: {
    velocity: nt.createTopic(
      "/Shooter/Velocity",
      NetworkTablesTypeInfos.kDouble,
    ),

    current: nt.createTopic(
      "/Shooter/Current",
       NetworkTablesTypeInfos.kDouble
    ),

    voltage: nt.createTopic(
      "/Shooter/Voltage", 
      NetworkTablesTypeInfos.kDouble
    ),
  },

  intaker: {
    velocity: nt.createTopic(
      "Intaker/Velocity",
      NetworkTablesTypeInfos.kDouble
    )
  }
};
