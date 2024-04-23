export const welcomeMsg = (req,res) => {
    res.send("How's weather in your city?")
}

export const searchByCity = async (req,res) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.input}&units=metric&appid=${process.env.WEATHER_KEY}`);
    const result = await response.json();
    res.status(200).json(result);
}