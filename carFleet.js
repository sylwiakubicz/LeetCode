var carFleet = function(target, position, speed) {
    if (position.length === 1) return 1
    
    let carFleet = []
    let cars = new Array()

    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]])
    }

    cars.sort((a,b) => b[0] - a[0])

    for (let i = 0; i < cars.length; i++) {
        let steps = (target - cars[i][0]) / cars[i][1]

        if (carFleet[carFleet.length - 1] >= steps) {
            continue
        } else {
            carFleet.push(steps)
        }
    }

    return carFleet.length
};
