type MyInterface = {
  prop: string[];
};

function t(att: MyInterface | undefined): string {
  //
  //
  return att?.prop.length ? "a" : "b";
}
