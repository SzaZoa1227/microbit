let megy = 0
let ledek = 0
let jatek = 0
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(2000)
    megy = 1
})
basic.forever(function () {
    if (megy == 1) {
        basic.showLeds(`
            # . . . .
            . # . . .
            # . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . . .
            . . # . .
            # # . # .
            . . # . .
            . # . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        if (input.buttonIsPressed(Button.B)) {
            ledek = 1
            megy = 0
            basic.clearScreen()
        }
    }
    if (ledek == 1) {
        led.plot(randint(0, 4), 4)
        led.plot(randint(0, 4), 4)
        led.plot(randint(0, 4), 4)
        ledek = 0
        jatek = 1
    }
    if (jatek == 1) {
        let ledy = 0
        let ledx = 0
        led.toggle(ledx, ledy)
    }
})
basic.forever(function () {
	
})
