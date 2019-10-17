for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);

    tree.onclick = (event) => {
        if (event.target.tagName != 'SPAN') {
            return;
        }

        let childStore = event.target.parentNode.querySelector('ul');
        if (!childStore) {
            return;
        }

        childStore.hidden = !childStore.hidden;
    }
}
