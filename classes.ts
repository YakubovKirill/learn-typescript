class TypeScript {
    version: string
    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name} - ${this.version}`
    }
}

class Car {
    readonly countOfWheels: number = 4
    constructor(readonly idNum: string | number, readonly model: string) {}

    printCar(): string {
        return `${this.model} - ${this.idNum} - countOfWheels: ${this.countOfWheels}`
    }
}


class Modificators {
    protected name: string = 'Kirill'
    private readonly security: boolean = true

    print(): string {
        return `${this.name} - ${this.security}`
    }
}

const modificators = new Modificators
console.log(modificators.print())

const toyota = new Car(1234, 'Toyota')
console.log(toyota.printCar())


abstract class Component {
    abstract render(): void
    abstract print(): string
    abstract summary(): number
}

class TestComponent extends Component {
    render() {
        console.log('render')
    }

    print() {
        return 'print'
    }

    summary() {
        return 23
    }


}

export{}