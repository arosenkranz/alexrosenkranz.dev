export default function copyToClipboard(str: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str);
  }
}
