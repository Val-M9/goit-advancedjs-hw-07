class Key {
	private signature: number;
	constructor() {
		this.signature = Math.random();
	}

	getSignature() {
		return this.signature;
	}
}

class Person {
	constructor(private key: Key) {
		this.key = key;
	}

	getKey() {
		return this.key;
	}
}

abstract class House {
	protected door: boolean = false;
	protected tenants: Person[] = [];

	constructor(public key: Key) {
		this.key = key;
	}

	public abstract openDoor(key: Key): void;

	public comeIn(person: Person) {
		this.door === true ? this.tenants.push(person) : console.log('The door is closed');
	}
}

class MyHouse extends House {
	constructor(key: Key) {
		super(key);
	}

	public openDoor(key: Key): void {
		key.getSignature() === this.key.getSignature()
			? (this.door = true)
			: console.log('The key is not valid');
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
