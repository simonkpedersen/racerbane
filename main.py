RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.forward()

def on_forever():
    if RingbitCar.tracking(RingbitCar.TrackingStateType.TRACKING_STATE_2):
        RingbitCar.freestyle(50, -20)
        basic.pause(50)
    if RingbitCar.tracking(RingbitCar.TrackingStateType.TRACKING_STATE_1):
        RingbitCar.freestyle(-20, 50)
        basic.pause(50)
    RingbitCar.freestyle(100, 100)
basic.forever(on_forever)
