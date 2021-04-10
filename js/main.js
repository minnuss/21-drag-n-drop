const fillBox = document.querySelector('.project__content__empty--fill');
const emptyBoxes = document.querySelectorAll('.project__content__empty');

// LISTENERS THAT GOES TO FILLED BOX
fillBox.addEventListener('dragstart', dragStart);
fillBox.addEventListener('dragend', dragEnd);

// LISTENERS THAT GOES TO EMPTY BOXES
for (let emptyBox of emptyBoxes) {
    emptyBox.addEventListener('dragover', dragOver);
    emptyBox.addEventListener('dragenter', dragEnter);
    emptyBox.addEventListener('dragleave', dragLeave);
    emptyBox.addEventListener('drop', dragDrop);
}

function dragStart() {
    // when add new class, pay attention to first space in front of class " hovered";
    this.className += ' hold';

    setTimeout(() => {
        // class invisible is made up, it doesn't exist
        // it triggers box content to disappear
        this.className = 'invisible';
    }, 1);
    console.log('drag start')
}

function dragEnd() {
    // when drag is ended, put box to empty class
    this.className = 'project__content__empty--fill';
    console.log('drag end')
}

function dragOver(e) {
    // just prevent default - it needs to work
    e.preventDefault();
    console.log('drag over')
}

function dragEnter(e) {
    // just prevent default - it needs to work
    e.preventDefault();

    // when add new class, pay attention to first space in front of class " hovered";
    this.className += ' hovered';
    console.log('drag enter')
}

function dragLeave() {
    // when drag is leaved from box, put box to empty class
    this.className = 'project__content__empty';
    console.log('drag leave')
}

function dragDrop() {
    // reset box to empty class
    this.className = 'project__content__empty';
    // when drag is droped to box, append whole const element
    this.append(fillBox);
    console.log('drag drop')
}