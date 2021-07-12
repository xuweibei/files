interface Person {
  name: string;
  age?: Number; //?选填
}

interface PersonTwo {
  readonly name: string; //readonly代表只读，意思就是使用的时候不能进行赋值
  age?: Number; //?选填
}

interface PersonTherr {
  name: string;
  age?: Number; //?选填
  [propName: string]: any; // 意思是，可以添加任意为string类型的字段(键名)， 值的类型是任意
}

const fn = (person: Person) => {
  console.log(person);
};

const perObj = {
  name: 'haha',
  sexe: 'male',
};

fn(perObj); //如果是以变量的形式进行传递，则是非强校验，也就是perObj里包含Person没有的内容都可以
fn({
  name: 'haha',
  sexe: 'male',
}); //直接写入对象的形式就必须和Person的一样了，这叫强校验

//类去使用Person类型使用implement
class User implements Person {
  name: 'lala';
}
