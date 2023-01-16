let dobokocka = 0
let dontes = 0
let kockafelsohatar = 0
input.onGesture(Gesture.Shake, function () {
    if (dobokocka == 1) {
        basic.showNumber(randint(1, 6))
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        dontes += 1
        basic.pause(1000)
    }
    if (dontes > 1) {
        dontes = 0
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B)) {
        dobokocka += 1
        basic.pause(100)
    }
    if (dobokocka > 1) {
        dobokocka = 0
        kockafelsohatar = 6
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (dontes == 1) {
        if (input.acceleration(Dimension.X) > 20) {
            basic.showString("J")
        }
        if (input.acceleration(Dimension.X) < -20) {
            basic.showString("B")
        }
        if (input.acceleration(Dimension.Y) > 20) {
            basic.showString("L")
        }
        if (input.acceleration(Dimension.Y) < -20) {
            basic.showString("F")
        }
    }
})
