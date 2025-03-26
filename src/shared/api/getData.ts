export async function getAllData() {
  const res = await fetch('/infinite-synergy/mock/dataBase.json');
  const data = await res.json();
  return data;
}
