export function toRoman(num: number): string {
  const roman = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
  ];
  if (num < 1 || num > 11) return "";
  return roman[num] || "";
}
