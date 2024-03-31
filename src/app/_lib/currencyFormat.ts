export default function formatCurrency(amount: number) {
  return "Rp." + amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}
