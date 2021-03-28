interface Car {
    readonly id: string | number
    color?: string
    size: {
        width: number
        heigth: number
        length: number
    }
    beep?: () => void
}

const redCarRenault: Car = {
    id: 23456,
    color: 'Red',
    size: {
        width: 2000,
        heigth: 1500,
        length: 3680
    }
}

console.log(redCarRenault)

interface Truck extends Car {
    truckSize: number
    
}

const bigRedTruck: Truck = {
    id: 234567,
    size: {
        width: 2000,
        heigth: 3000,
        length: 6080
    },
    truckSize: 6000,
    beep() { console.log('Huge beeeeep !') }
}


bigRedTruck.beep()

interface Styles {
    [key: string]: string
}

const css: Styles = {
    display: 'flex',
    border: '1px solid black',
    true: 'yes'
}

interface OMG {
    [key: string]: boolean | number
}

const cssOMG: OMG = {
    true: true,
    26: 345,
    12345: false
}

console.log(cssOMG.true)

export{}