// @flow
function Foo() {
  const list = ([1]: Array<number>); // Error!!
  //const list = ([1]: number[]); // OK
}

export default Foo;
