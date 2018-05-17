export class TestObject {
    constructor(valueString, valueNumber) {
        this.valueString = valueString
        this.valueNumber = valueNumber
    }
}

export class TestNestedObject {
    constructor(testObject) {
        this.valueObject = testObject
    }

}