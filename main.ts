RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.forward()
let speed = 80
basic.forever(function () {
    while (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
        RingbitCar.freestyle(speed, 0)
        basic.pause(50)
        speed += -5
        if (speed < 50) {
            speed = 50
        }
    }
    while (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
        RingbitCar.freestyle(0, speed)
        basic.pause(50)
        speed += -5
        if (speed < 50) {
            speed = 50
        }
    }
    RingbitCar.freestyle(80, 80)
    speed += 10
    if (speed >= 100) {
        speed = 100
    }
})
