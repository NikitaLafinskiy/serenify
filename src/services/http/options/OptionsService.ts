import { AxiosResponse } from "axios";
import { $api } from "..";
import { Options, UpdateOptionsRes } from "../models";

export class OptionsService {
  static async updateOptions(
    options: Options
  ): Promise<AxiosResponse<UpdateOptionsRes>> {
    return $api.put("/options/update", {
      breaths: options.breaths,
      inhale: options.inhale,
      exhale: options.exhale,
      hold: options.hold,
    });
  }

  static async setLocalOptions(options: Options) {
    localStorage.setItem("breaths", options.breaths.toString());
    localStorage.setItem("inhale", options.inhale.toString());
    localStorage.setItem("hold", options.hold.toString());
    localStorage.setItem("exhale", options.exhale.toString());
  }
}
