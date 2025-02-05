import { format, parseISO } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  console.log(date);
  return <time date={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
