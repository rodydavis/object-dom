export function createComment(content: string = "") {
  const elem: Comment = document.createComment(content);
  return elem;
}
