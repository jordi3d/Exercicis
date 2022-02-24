export default function ArrayObjectes() {
  let array = ["u1", "u3"];

  let objecte = {
    u1: { name: "Pere" },
    u2: { name: "Joan" },
    u3: { name: "Maria" },
  };
  let resultat = [objecte[array[0]], objecte[array[1]]];

  return (
    <div id="arrayobjectes">
      Array: {JSON.stringify(array)}
      <br />
      Objecte: {JSON.stringify(objecte)}
      <br />
      Resultat: {JSON.stringify(resultat[0])}
      {JSON.stringify(resultat[1])}
    </div>
  );
}
