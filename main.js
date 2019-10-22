const tree = document.querySelector('.tree');
const lis = document.querySelectorAll('li');
for (let li of lis) {
    const span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}
  tree.addEventListener('click', (event) => {
    if (event.target.tagName !== 'SPAN') {
      return;
    }

    const childStore = event.target.parentNode.querySelector('ul');
    if (!childStore) {
      return;
    }

    childStore.hidden = !childStore.hidden;
  });
