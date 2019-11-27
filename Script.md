# Presentación Application Insights

## Acto I

- Hacer un intro de application Insights
- Hacer el primer demo de application Insights con Live Monitoring

```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.Extensions.Logging.AzureAppServices" Version="3.0.1" />
  </ItemGroup>
```

```cs
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureLogging(logging => logging.AddAzureWebAppDiagnostics())
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
            });
```

```cs
        [HttpGet]
        public IEnumerable<WeatherForecast> Get([FromQuery] string something = "good")
        {
            if (something != "good")
            {
                _logger.LogError("Un Error Fatal");
                throw new NullReferenceException("Esto es un error fatal");
            }

            _logger.LogInformation("Todo Ok con este servicio");
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
```

- Mostrar Logs de Información
- Mostrar Logs de Error

```cs
```

- Mostrar Exceptions de telemetría

## Acto II