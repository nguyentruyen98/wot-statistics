import { apiClient } from "@/api/client";
import { TankNations } from "@/enums/common";

export class TankServices {
  private readonly baseUrl = "api/tanks";

  async getTechTree(nation: TankNations): Promise<any> {
    return apiClient.get(`${this.baseUrl}/${nation}`);
  }
}

export const tankServices = new TankServices();
