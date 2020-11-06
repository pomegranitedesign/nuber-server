import { RideStatus } from "src/types/types";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./User";

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.rideAsDriver)
  driver: User;

  @ManyToOne((type) => User, (user) => user.rideAsPassenger)
  passenger: User;

  @Column({
    type: "text",
    enum: ["ACCEPTED", "FINISHED", "CANCELLED", "REQUESTING", "ONROUTE"],
  })
  status: RideStatus;

  @Column({ type: "text" })
  pickUpLocation: string;

  @Column({ type: "double precision" })
  pickUpLat: number;

  @Column({ type: "double precision" })
  pickUpLon: number;

  @Column({ type: "text" })
  dropoffAddress: string;

  @Column({ type: "double precision" })
  dropOffLat: number;

  @Column({ type: "double precision" })
  dropOffLong: number;

  @Column({ type: "double precision" })
  price: number;

  @Column({ type: "text" })
  duration: string;

  @Column({ type: "text" })
  distance: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Ride;
