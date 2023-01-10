megy = 0
ledek = 0

def on_button_pressed_ab():
    global megy
    basic.show_leds("""
        . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
    """)
    basic.pause(2000)
    megy = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_forever():
    if (0) == (1):
        pass
basic.forever(on_forever)

def on_forever2():
    global ledek, megy
    if megy == 1:
        basic.show_leds("""
            # . . . .
                        . # . . .
                        # . # . .
                        . # . . .
                        # . . . .
        """)
        basic.pause(100)
        basic.show_leds("""
            . # . . .
                        . . # . .
                        # # . # .
                        . . # . .
                        . # . . .
        """)
        basic.pause(100)
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # . #
                        . . . # .
                        . . # . .
        """)
        if input.button_is_pressed(Button.B):
            ledek = 1
            megy = 0
            basic.clear_screen()
basic.forever(on_forever2)

def on_forever3():
    global ledek
    if ledek == 1:
        led.plot(randint(1, 5), randint(1, 5))
    ledek = 0
    ledek = 0
basic.forever(on_forever3)
