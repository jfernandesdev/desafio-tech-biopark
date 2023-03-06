export const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "UTC",
});

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return dateFormatter.format(date);
}
