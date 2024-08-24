document.querySelectorAll('.image').forEach(div => {
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragover', dragOver);
    div.addEventListener('drop', drop);
});

let draggedElement = null;

function dragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.setData('text/plain', '');
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (draggedElement) {
        let target = event.target;
        while (target && !target.classList.contains('image')) {
            target = target.parentElement;
        }
        if (target && target !== draggedElement) {
            swapDiv(draggedElement, target);
        }
    }
    draggedElement = null;
}

function swapDiv(element1, element2) {
    const temp = element1.style.backgroundImage;
    element1.style.backgroundImage = element2.style.backgroundImage;
    element2.style.backgroundImage = temp;
}
