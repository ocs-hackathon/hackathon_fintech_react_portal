export function formatDate(timestamp = Date.now()) {
  const date = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formatter.format(date);
}

export function formatMoney(num) {
  console.log(num);
}
