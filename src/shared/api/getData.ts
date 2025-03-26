export async function getAllData() {
  const res = await fetch('../../../../mock/dataBase.json');
  const data = await res.json();
  return data;
}
