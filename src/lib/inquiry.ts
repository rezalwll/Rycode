export function inquiryMessageMinimum(sourcePath: string) {
  const pathname = sourcePath.split(/[?#]/, 1)[0];
  return /^(?:\/(?:fa|en))?\/contact\/?$/.test(pathname) ? 1 : 10;
}
