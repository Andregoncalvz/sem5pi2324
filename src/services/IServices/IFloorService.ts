import { Result } from "../../core/logic/Result";
import {IFloorDTO} from "../../dto/IFloorDTO";

export default interface IFloorService  {
  createFloor(floorDTO: IFloorDTO): Promise<Result<IFloorDTO>>;
  updateFloor(floorDTO: IFloorDTO): Promise<Result<IFloorDTO>>;

  getFloor (floorId: string): Promise<Result<IFloorDTO>>;

}