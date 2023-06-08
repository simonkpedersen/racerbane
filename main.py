RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.forward()

def on_forever():
    if RingbitCar.tracking(RingbitCar.TrackingStateType.TRACKING_STATE_2):
        RingbitCar.freestyle(50, 0)
        basic.pause(100)
    if RingbitCar.tracking(RingbitCar.TrackingStateType.TRACKING_STATE_1):
        RingbitCar.freestyle(0, 50)
        basic.pause(100)
    RingbitCar.freestyle(100, 100)
basic.forever(on_forever)
