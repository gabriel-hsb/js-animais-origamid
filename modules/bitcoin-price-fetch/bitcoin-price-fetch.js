export default async function getBitcoinPrice() {
  const btcSpan = document.querySelector("[data-btc]");

  try {
    const urlBtc = "https://blockchain.info/ticker";

    const res = await fetch(urlBtc);
    const json = await res.json();

    const formatedBtc = Math.ceil(json.BRL.buy);

    btcSpan.innerText = formatedBtc.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    console.log(formatedBtc);
  } catch (err) {
    btcSpan.innerText = "R$ 349.420,69";
    console.error(err);
  }
}
