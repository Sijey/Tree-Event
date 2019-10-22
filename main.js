const tree = document.querySelector('.tree');
const listOfLi = document.querySelectorAll('li');

for (let li of listOfLi) {
    const span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}
  tree.addEventListener('click', (event) => {

    const childStore = event.target.parentNode.querySelector('ul');
    if (!childStore && event.target.tagName !== 'SPAN') {
      return;
    }

    childStore.hidden = !childStore.hidden;
  });
