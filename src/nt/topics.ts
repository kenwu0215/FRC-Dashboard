import { NetworkTablesTypeInfos } from "ntcore-ts-client";
import { nt } from "./nt";

export const Topics = {

  swerve: {
    
    pose: {
      x: nt.createTopic<number>("/Swerve/Pose/X", NetworkTablesTypeInfos.kDouble),
      y: nt.createTopic<number>("/Swerve/Pose/Y", NetworkTablesTypeInfos.kDouble),
      rotation: nt.createTopic<number>("/Swerve/Pose/Rotation", NetworkTablesTypeInfos.kDouble)
    },

    gyro_angle: nt.createTopic<number>(
      "/Swerve/GyroAngle",
      NetworkTablesTypeInfos.kDouble
    )
  },

  shooter: {

    velocity: nt.createTopic<number>(
      "/Shooter/Velocity",
      NetworkTablesTypeInfos.kDouble,
    ),

    current: nt.createTopic<number>(
      "/Shooter/Current",
       NetworkTablesTypeInfos.kDouble
    ),

    voltage: nt.createTopic<number>(
      "/Shooter/Voltage", 
      NetworkTablesTypeInfos.kDouble
    ),

    ready_for_shooting: nt.createTopic<boolean>(
      "/Shooter/Ready",
      NetworkTablesTypeInfos.kBoolean
    )

  },

  intaker: {

    velocity: nt.createTopic<number>(
      "/Intaker/Velocity",
      NetworkTablesTypeInfos.kDouble
    ),

    position: nt.createTopic<number>(
      "/Intaker/Position",
      NetworkTablesTypeInfos.kDouble
    ),

    current: nt.createTopic<number>(
      "/Intaker/Current",
       NetworkTablesTypeInfos.kDouble
    ),

    voltage: nt.createTopic<number>(
      "/Intaker/Voltage", 
      NetworkTablesTypeInfos.kDouble
    )

  },

  Transfer: {

    velocity: nt.createTopic<number>(
      "/Transfer/Velocity",
      NetworkTablesTypeInfos.kDouble
    ),

    voltage: nt.createTopic<number>(
      "/Transfer/Voltage",
      NetworkTablesTypeInfos.kDouble
    ),

    current: nt.createTopic<number>(
      "/Transfer/Current",
      NetworkTablesTypeInfos.kDouble
    ),

    temp: nt.createTopic<number>(
      "/Transfer/Temp",
      NetworkTablesTypeInfos.kDouble
    )
    
  }
};
