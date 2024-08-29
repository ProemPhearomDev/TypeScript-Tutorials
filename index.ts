// console.log("Hello via Bun Rom!");
// basic type
const a: number = 10;
const b: string = "20";
const c: boolean = false;
console.log(a, b, c);

b.length;

// special type
const d: any = "hello";
const e: unknown = "hello";
const h: null = null;
// const i: void = null
const i: undefined = undefined;
const g: null = null;
const j: void = undefined; // the undefined

// function test (): void {
//     return "hello"
// }

// array type
const ages: number[] = [12, 14, 17];
ages.push(66);

// tuple of array
const information: [string, number, boolean] = ["hello", 35, false];

const [firstName, age, isMerried] = information;
console.log(firstName, age, isMerried);

// enum
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
console.log(Color.Red);

// object Type
// simple js
const personTest = {
  name: "John",
  age: 14,
  isMerried: false,
};
// set type to object person
type Person = {
  name: string;
  age: number;
  isMerried: boolean;
  // children: Person //array // He have on son
  children: Person[]; //array
};

const person: Person = {
  name: "John",
  age: 14,
  isMerried: false,
  // children:[] //he no children
  children: [
    //he have children
    {
      name: "jane",
      age: 12,
      isMerried: false,
      children: [],
    },
  ],
};
console.log(person.name);

// Interface
// set type to object person
type Person2 = {
  name: string;
  age: number;
  isMerried: boolean;
};
const person2: Person2 = {
  name: "John",
  age: 14,
  isMerried: false,
};

interface window1 {
  ts: string;
}

interface window extends window1 {
  bun: string;
}

// unoin type
// const x: boolean | number = false
const x: string | number = "hello";
if (typeof x === "string") {
  // string perfamance
}

// function
// function add(a: number, b: number): number{
//     return a + b
// }
// console.log(add(10, 15));
// if want convert num to string
// function add(a: number, b: number): string{
//     return (a + b).toString()
// }
// console.log(add(10, 15));

function add(a: number, b: number): string {
  return (a + b).toString();
}
console.log(add(10, 15));
// function type
type Add = (a: number, b: number) => string;

// casting
let n: unknown = 10;
// const test = n as string

// // OOP
// class People {
//     // name: string = "John"
//     name: string = '' // public
// }
// // initalize to object
// const p = new People()
// // new name
// p.name = "New Test"
// console.log(p.name)

// 2
// class People {
//   private name: string = "";

//   public setName(name: string) {
//     this.name = name;
//   }

//   public getName() {
//     return this.name;
//   }
// }
// // initalize to object
// const p = new People();
// p.getName("John");
// console.log(p.getName());
// 2
// class People {
//   private readonly name: string = ""; //private readonly the same

//   public constructor (name: string){
//     this.name = name

//   }
//   public getName() {
//     return this.name
//   }
// }
// // initalize to object
// const p = new People("Hello")
// console.log(p.getName())

// 3  interface with implememt

// interface People {
//   getName(): string;
// }
// // class Test 2
// interface Test {
//     age: number
// }
// class People implements People , Test{
//   name: string = "";
//   age: number = 15;
//   constructor(name: string) {
//     this.name = name;

//     //   }
//     //    getName(): string {
//     //     return this.name
//     //   }
//   }
//   getName(): number | string {
//     return this.name;
//   }
// }
// // initalize to object
// const p = new People("Hello ");
// console.log(p.getName());

// Extend
class People {
    name: string
    constructor (name: string){
        this,name = name
    }

    getName(): string {
        return this.name
    }

}

class Children extends People {
    constructor (name: string) {
        super(name)
    }
}

const p = new Children("0000")
console.log(p.getName())
