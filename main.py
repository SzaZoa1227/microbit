def on_forever():
    if input.acceleration(Dimension.X) > 20:
        basic.show_string("Jobb")
    if input.acceleration(Dimension.X) < -20:
        basic.show_string("Bal")
    if input.acceleration(Dimension.Y) > 20:
        basic.show_string("Le")
    if input.acceleration(Dimension.Y) < -20:
        basic.show_string("Fel")
basic.forever(on_forever)
