while True:
    print("Light Levels:"+ input.light_level())
    if input.light_level() < 10:
        light.set_all (light.rgb (255,100,20))
    elif input. light_level()<2:
        light.set_all(light.rgb(255,255,0))
    else:
        light.clear()
