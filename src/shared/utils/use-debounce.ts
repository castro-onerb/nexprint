export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay = 150) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    return new Promise((resolve) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        resolve(fn(...args) as ReturnType<T>);
      }, delay);
    });
  };
}
