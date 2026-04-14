/**
 * Scroll ke elemen dengan id, dengan offset vertikal (mis. untuk header sticky).
 */
export function scrollToElementById(id: string, offsetY = -100): void {
  const element = document.getElementById(id);
  if (!element) return;
  const y =
    element.getBoundingClientRect().top + window.scrollY + offsetY;
  window.scrollTo({ top: y, behavior: "smooth" });
}
