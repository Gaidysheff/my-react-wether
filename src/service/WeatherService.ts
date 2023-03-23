import { Weather } from "./../store/types/types";
import { AxiosResponse } from "axios";
import api from "../axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/direct?q=${city}&limit=5`);
  }
}