export const copyToClipboard = (text: string | number, callback?: () => void) => {
  navigator.clipboard.writeText(text.toString())
    .then(() => {
      callback?.();
    })
    .catch((err) => {
      console.error('Ошибка копирования текста: ', err);
    });
};