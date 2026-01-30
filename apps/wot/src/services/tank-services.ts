import { apiClient } from "@/api/client";
import { Nations } from "@/enums/common";

export class TankServices {
  private readonly baseUrl = "api/tanks";

  async getTechTree(nation: Nations): Promise<any> {
    return apiClient.get(`${this.baseUrl}?nation=${nation}`);
  }
}

export const tankServices = new TankServices();
