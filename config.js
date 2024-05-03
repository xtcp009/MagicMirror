/* Config build */
let config = {
        address: "localhost",
        port: 8080,
        basePath: "/",
        ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
        useHttps: false,
        httpsPrivateKey: "",
        httpsCertificate: "",
        language: "en",
        locale: "en-US",
        logLevel: ["INFO", "LOG", "WARN", "ERROR"],
        timeFormat: 24,
        units: "imperial",
      
        modules: [
            {
                module: "MMM-cryptocurrency",
                position: "top_right",
                config: {
                    apikey: 'e7a5db37-b3cc-489f-8b5a-f5d2da33c6ff', // Your CoinMarketCap API key
                    currency: ['ethereum', 'bitcoin'],
                    conversion: 'USD',
                    headers: ['change24h', 'change1h', 'change7d'],
                    displayType: 'logoWithChanges',
                    showGraphs: true
                }
            },
            {
                module: "alert",
            },
            {
                module: "updatenotification",
                position: "top_bar"
            },
            {
                module: "clock",
                position: "top_left",
                config: {
                    timezone: "America/New_York"
                }
            },
            {
                module: "calendar",
                header: "US Holidays",
                position: "top_left",
                config: {
                    calendars: [
                        {
                            fetchInterval: 7 * 24 * 60 * 60 * 1000,
                            symbol: "calendar-check",
                            url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
                        }
                    ]
                }
            },
            {
                module: "compliments",
                position: "lower_third"
            },
            {
                module: "weather",
                position: "top_right",
                config: {
                    weatherProvider: "openweathermap",
                    type: "current",
                    location: "Charleston",
                    locationID: "4574324", // You can use locationID if you have it, otherwise it's optional
                    apiKey: "576e33f2565eb637d48ecc29354a4df7" // Your OpenWeather API key
                }
            },
            {
                module: "weather",
                position: "top_right",
                header: "Weather Forecast",
                config: {
                    weatherProvider: "openweathermap",
                    type: "forecast",
                    location: "Charleston",
                    locationID: "4574324", // You can use locationID if you have it, otherwise it's optional
                    apiKey: "576e33f2565eb637d48ecc29354a4df7" // Your OpenWeather API key
                }
            },
            {
                module: "newsfeed",
                position: "bottom_bar",
                config: {
                    feeds: [
                        {
                            title: "New York Times",
                            url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                        },
                        {
                            title: "Fox News",
                            url: "http://feeds.foxnews.com/foxnews/latest"
                        }
                    ],
                    showSourceTitle: true,
                    showPublishDate: true,
                    broadcastNewsFeeds: true,
                    broadcastNewsUpdates: true
                }
            },
            // Add the new module snippet here
            {
                module: "MMM-ImageSlideshow",
                position: "bottom_left",
                config: {
                    imagePaths: ["MagicMirror/modules/MMM-ImageSlideshow/pics"]
                }
            }
        ]
    };
    
    /*************** DO NOT EDIT THE LINE BELOW ***************/
    if (typeof module !== "undefined") { module.exports = config; }
    