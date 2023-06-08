RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.forward()
basic.forever(function () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
        RingbitCar.freestyle(50, 0)
        basic.pause(100)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
        RingbitCar.freestyle(0, 50)
        basic.pause(100)
    }
    RingbitCar.freestyle(100, 100)
})
