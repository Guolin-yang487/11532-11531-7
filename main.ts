function TurnLeft () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 30)
}
function stop () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 0)
}
input.onButtonPressed(Button.A, function () {
    forward()
    basic.pause(1000)
    stop()
})
function backward () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 30)
}
input.onButtonPressed(Button.B, function () {
    backward()
    basic.pause(1000)
    stop()
})
function forward () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 0)
}
function TurnRight () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 0)
}
let sonar = Math.round(mbitbot.Me_Ultrasonic_Sensor(mbitbot.Jpin.J3))
basic.showNumber(sonar)
basic.pause(1000)
basic.forever(function () {
    sonar = Math.round(mbitbot.Me_Ultrasonic_Sensor(mbitbot.Jpin.J3))
    if (sonar < 25) {
        if (Math.randomBoolean()) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . . # #
                `)
            TurnRight()
            basic.pause(1000)
            stop()
        } else {
            if (Math.randomBoolean()) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    # # . . .
                    `)
                TurnLeft()
                basic.pause(1000)
                stop()
            } else {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
                forward()
                basic.pause(100)
            }
        }
    }
})
