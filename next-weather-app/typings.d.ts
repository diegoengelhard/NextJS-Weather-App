interface Current {
    apparent_temperature: number | null;
    interval: number | null;
    is_day: number | null;
    precipitation: number | null;
    rain: number | null;
    relative_humidity_2m: number | null;
    showers: number | null;
    snowfall: number | null;
    temperature_2m: number | null;
    time: Date | null;
    wind_speed_10m: number | null;
  }
  
  interface CurrentUnits {
    apparent_temperature: string | null;
    interval: string | null;
    is_day: string | null;
    precipitation: string | null;
    rain: string | null;
    relative_humidity_2m: string | null;
    showers: string | null;
    snowfall: string | null;
    temperature_2m: string | null;
    time: string | null;
    wind_speed_10m: string | null;
  }
  
  interface Daily {
    temperature_2m_max: number[] | null;
    temperature_2m_min: number[] | null;
    time: Date[] | null;
    weather_code: number[] | null;
  }
  
  interface DailyUnits {
    temperature_2m_max: string | null;
    temperature_2m_min: string | null;
    time: string | null;
    weather_code: string | null;
  }
  
  interface Hourly {
    apparent_temperature: number[] | null;
    dew_point_2m: number[] | null;
    relative_humidity_2m: number[] | null;
    temperature_2m: number[] | null;
    time: Date[] | null;
  }
  
  interface HourlyUnits {
    apparent_temperature: string | null;
    dew_point_2m: string | null;
    relative_humidity_2m: string | null;
    temperature_2m: string | null;
    time: string | null;
  }
  
  interface Root {
    current: Current | null;
    current_units: CurrentUnits | null;
    daily: Daily | null;
    daily_units: DailyUnits | null;
    elevation: number | null;
    generationtime_ms: number | null;
    hourly: Hourly | null;
    hourly_units: HourlyUnits | null;
    latitude: number | null;
    longitude: number | null;
    timezone: string | null;
    timezone_abbreviation: string | null;
    utc_offset_seconds: number | null;
  }
  
  interface Query {
    myQuery(
      current: string | null,
      daily: string | null,
      hourly: string | null,
      latitude: string | null,
      longitude: string | null,
      timezone: string | null
    ): Root | null;
  }
  