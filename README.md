# Assignment 01

Hi, I am sohel. Recent i am exploring typescript. today i am descuss 3 impotant topics about typescript .

## Topics 01: differences between interfaces and types in TypeScript?

## Topics 01: What is the use of the keyof keyword in TypeScript?

## Topics 01: What is type inference in TypeScript? Why is it helpful?

### (01) interface vs types in Typescipt

we use Types and interface to define onbject stucture.Both are almost similar but it has some importance difference. We will Discuss about the difference between types and interface in bellow.

### What is interface in Typescipt?

interface uses for object shape or structure define . I have add an example given bellow

## Examples

```
interface User {
  name: string;
  age: number;
}

```

we can see this Examples . Here user is an object .The object has Two property , the name will be string and the age will be number.

### Type in TypeScript

We will do same thing using type keyword . but we will do some advanced work like union , intersection ,primitive type define .

## Examples

```
type User = {
  name: string;
  age: number;
};


```

### Differece between interfafce and Types.

| Feature     | Interface                                                   | Type                                                                 |
| ----------- | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| Use Case    | Used to define object structure                             | Can define objects, as well as unions, intersections, and primitives |
| Extension   | Can be extended using the `extends` keyword                 | Can be combined using the `&` operator                               |
| Reopening   | Can be declared multiple times and will merge automatically | Cannot be declared multiple times (will throw an error)              |
| Flexibility | Less flexible                                               | More flexible                                                        |

## Interface Extend Example:

```
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}



```

## Type Intersection Example:

```
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}



```

## When to Use Which?

1.  If you just want to define the structure of an object or class → use interface

2.  If you need complex types (like union, intersection, tuple, or literal types) → use type

3.  If you need to extend or implement → interface is perfect

4.  If you need more flexibility → type is more powerful







## (02) Use of Keyof keyword in Typescript.

 Now We are discuss about the important Topic in Typescript of keyof keyword.
 We use sometimes this keyof keyword  but everyone doesnt know why we use it. i am give a breif description about this topics step by step.

 ### What is keyof?
 keyof is a type operator of Typescript.which is taken  any property of object  and it makes union type.

 ### Example:
 





```javascript
type Keys = keyof SomeType;


```
###  understand with example:

```javascript
type Person = {
  name: string;
  age: number;
};
```
now we can write:

```javascript
type PersonKeys = keyof Person;

```
Now the value  of PersonKeys of 

``` javascript
// type PersonKeys = "name" | "age"

```
It means the person objects property (name | age ) is union type .

### Real use-case: Generic  function with keyof.
If you are writen a function wich is return a specefic value of an object,in this purpose you use keyof.

```javascript
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  username: "chatgpt"
};

const username = getValue(user, "username"); 

```

### Explanation
1. K extends keyof T means that the key parameter must be a valid key of the type T.
2. T[K] means the function will return the type of the value associated with the given key in the object.

### What happens if you dont use the keyof propersly?
If you don't use keyof, and pass a key that doesn't actually exist on the object, TypeScript won't be able to catch the mistake at compile time. That could lead to runtime errors. Using keyof ensures TypeScript checks the key at the type level.

### Why keyof is important?
1. Makes your code type-safe
2. Helps prevent bugs and errors
3. Enables reusable and generic functions








## (03) What is type inference in TypeScript? Why is it helpful?

### Type interface in TypeScript.
Type interface is most powerfull future of TypeScript. It makes be smarter in TypeScript. It means it can't say manully type in everywhere . It understand aoutomatically what will be the type of function.

### What is the meanings of type interface?
It understand his own scence what will be the type of a variable function or return value.

### example:
```javascript
 let name = "Sohel";
```
here i didnot difene any type .but TypeScript understand that name will be string. If anyone  want to assing here others type of value they cant be able to assing here without string.
### example:
```javascript
 name = 123; //  Error: Type 'number' is not assignable to type 'string'
```
In the TypeScript aoutomatically detect here the property is number but it will be string.thats why its throwing an error here.

### example
```javascript
function add(a: number, b: number) {
  return a + b;
}
```
Here we can not say explicitly  the return type of this function. but TypeScript understood here a+b will return number type. thats why  add function return type will be number type aoutomatically.

### array inference
```javascript
let numbers = [1, 2, 3];
```
When i put the value of array in number type when TypeScript aoutomatically understood that this array will be number type array.  i did not predifine the array type.

but TypeScript will not understand the type  when it will be any .Now i am given an example bellow here 

### example of any type:
```javascript
let data; // data: any
data = "hello";
data = 123;

```
 there is no predifine value thats why its type will be any. so the best practice is if intially has not any value  manully we define the type

 ### why type inference is helpful.
  1. Less code.
  2. Cleaner and Readable.
  3. Type safty.
  4. Intiligent suggestion.
