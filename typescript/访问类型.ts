//1、public允许我在类的内外被调用 (默认)
// 2、private允许在类内被使用
//3、protected 允许在类内及继承的子类中使用

class Person {
  public name: string;
}

const person = new Person();
person.name = 'haha';
