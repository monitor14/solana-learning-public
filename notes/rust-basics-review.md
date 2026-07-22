# Rust Basics Review

## 1. Variables

### `let`
let 是用来定义变量得。Rust 里变量默认不可变，不可重新赋值。

### `let mut`
也是用来定义变量，但是 `mut` 这个关键字添加后，变量就可以被重新赋值了

### `const`
定义常量

```rust
const NUMBER: i32 = 3;
```

### shadowing
shadowing 是用 `let` 重新声明同名变量，可以改变值，也可以改变类型

## 2. Functions
fn `函数名` 定义一个函数 

### function signature

```rust
fn add_one(num: i32) -> i32  
```

### parameters
函数参数是传入函数得值，Rust 里面每个参数都必须写类型

### return type
返回类型告诉Rust 这个函数会返回什么类型得值，写在 `-> ` 后面。

### return value without semicolon
Rust 里面函数最后一行如果不加分号，它得值会被自动返回。
```rust
fn square(num: i32) -> i32 {
    num * num
}
```

## 3. Basic Types

### `i32`
`i32` 是有符号32位整数，可以存正整数和负整数。

### `u64`
 `u64`是unsigned 64-bit integer ，只能是0跟正数，不能是负数。solana的 lamports 常用 `u64`

### `bool`
`bool` 只有两个值， `true`和 `false` 。 `!`表示取反。

### `char`
`char` 表示单个字符，用单引号
```rust
let letter = 'D';
```

### `&str`
字符串字面量/字符串切片， 像 `"Alice"` 这种双引号内容通常是 `&str`

### `String`
`String` 是拥有所有权的字符串，存储在堆上，可以用 `String::from()`创建
```rust
let name = String::from("Alice");
```

## 4. Control Flow
```rust

let identifier = if animal == "crab" {
    1
} else {
    4
};

```
### `if`
if 条件语句 {}  用来判断一个条件是否成立。

### `else if`
用来判断另一个条件

### `else`
表示前面的条件都不成立时执行的分支。

### branch return types
`if / else if / else` 如果作为表达式返回值，每个分支返回的类型必须一样

## 5. Arrays

### `[value; count]`
[0;100]  重复0 100次组成新得数组

### `.len()`
用来获取数组，字符串等数据的长度。

## 6. Common Errors

### immutable variable reassignment

这个错误表示试图给不可变变量重新赋值。如果变量之后需要改变，要使用 `mut`。
```rust
let mut x = 3;
x = 5;
```

### variable not initialized
Rust 不允许使用还没有赋值得变量。


### mismatched types
这个错误表示类型不匹配： Rust 期待一种类型，但实际得到另一种类型。
```rust
let x: i32 = "hello";
```

### function not found
这个错误表示调用了一个不存在的函数，或者函数名拼错了。

### missing type
这个错误表示Rust 需要明确类型，但是代码里没有写。 比如`const` 必须要写类型。


### slice
`slice` 是切片，表示从数组里借用一段连续内容

```rust
let a  = [1,2,3,4,5];
let nice_slice = &a[1..=3];
```

### tuple
tuple 可以存放多个不同类型的值。
```rust
let cat = ("Furry Mcfurson",3.5);
let (name,age) = cat;
```
### tuple index
可以用 `.0`,`.1`,`.2`, 类似的形式来访问里面的元素。

```rust
let numbers = (1,2,3);
let second = numbers.1;
```

## Vector 
`Vector` 是Rust 里面的动态数组， 和array 不同，`Vec`的长度是可以变化的。
```rust
let v = vec![10,20,30,40]
```
创建空数组的方法 ： 
```rust
let mut output = Vec::new();
output.push(2);
```

### .iter()方法
用来遍历数据

### .map()方法
用来把每个元素转换成新值

### .collect()方法
用来把结果收集成新的集合


```rust
input.iter().map(|element| element * 2).collect()
```
链式写法：`iter()` 创建一个迭代器，用来依次访问每个元素；`map()` 对每个 `element` 执行 `element * 2`，产生新的值；最后 `collect()` 把这些新值收集成一个新的 `Vec`。

## Move Semantics  所有权

### Ownership = 谁拥有这个值

Rust 大部分值都有owner.
```rust
let data = String::from("hello");
```
这里的data拥有 这个String




### Move = 拿走所有权
```rust
let s1 = String::from("hello");
let s2 = s1;
```
这里的s1 的所有权移动给s2.
之后s1不能再使用。


### Borrow  = 借用，不拿走
```rust
let s1 = String::from("hello");
let s2 = &s1 ;
```
这里s2只是借用s1
所以s1还能继续使用。

### Mutable Borrow = 可变借用
```rust
let y = &mut x;
```
表示：借用x，并且允许通过y修改x
但是规则是  ：同一时间只能有一个可变借用。
所以以下不行：
```rust
let y = &mut x;
let z = &mut x;
y.push(42);
```
因为y还没用完，z又想借
不过以下可以
```rust
let y = &mut x;
y.push(42);
let z = &mut x;
z.push(42);

```
因为`y`用完后，`z`才开始借

### 函数参数也涉及所有权
函数参数本质上也是变量。
拿走所有权：
```rust
fn string_uppercase(data: String)
```
调用：
```rust
string_uppercase(data);
```
意思是把 `data`交给函数。
只借用：
```rust
fn get_char(data: &String)
```
调用：
```rust
get_char(&data);
```
意思是把 `data`借给函数看一下。
### 最重要的判断方法
```问自己，这个函数是只需要看一下，还是要完全交给他处理？```
|目的|参数类型|调用方式|
|---|---|---|
|只读借用|`&String`|`&data`|
|拿走所有权|`String`|`data`|
|可变借用|`&mut String`|`&mut data`|