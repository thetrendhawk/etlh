const DISPLAY_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string): string {
  return DISPLAY_DATE_FORMATTER.format(new Date(`${iso}T00:00:00Z`));
}
