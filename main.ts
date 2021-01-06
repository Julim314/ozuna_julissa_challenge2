while (true) {
    console.log("Light Levels:" + input.lightLevel())
    if (input.lightLevel() < 10) {
        light.setAll(light.rgb(255, 100, 20))
    } else if (input.lightLevel() < 2) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.clear()
    }
    
}
