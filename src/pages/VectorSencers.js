export default function VectorSencers() {
  let vectorInt = [1, 29, 46, 2, 14, 39, 5];

  function estadistiques(vector) {
    let max = Math.max(...vector);
    let min = Math.min(...vector);
    let median = 0;
    let suma = 0;
    vector.forEach((element) => {
      median += element;
    });
    suma = median;
    median = (median / vector.length).toFixed(2);
    return (
      <div id="vectorsencers">
        Array: {JSON.stringify(vector, null, 2)}
        <br />
        Màxim: {max}
        <br />
        Mínim: {min}
        <br />
        Suma: {suma}
        <br />
        Mitjana: {median}
        <br />
      </div>
    );
  }
  return <div id="VectorSencers">{estadistiques(vectorInt)}</div>;
}
