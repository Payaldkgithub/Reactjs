function Child3() {
  let fruits = ["Apple", "Mango", "Grapes", "Banana", "Orange"];
  let numbers = [10, 20, 30, 40, 50];
  let nums = [];
  for (let n of numbers) {
    nums.push(<li>{n}</li>);
  }
  return (
    <div>
      {fruits.map(function (fruit) {
        return <li>{fruit}</li>;
      })}

      {nums}
    </div>
  );
}
export default Child3;
