console.log('Hello World');

let container = document.querySelector('.container');

let row;

for(i = 0; i < 16; i++) {
    row = document.createElement('div');
    row.classList.add('container-row');

    container.appendChild(row);
    for(j = 0; j < 16; j++) {
        let pixel = document.createElement('div');
        pixel.classList.add('row-item');
        
        pixel.addEventListener('mouseenter', function() {
            pixel.classList.add('chocolate');
        })

        row.appendChild(pixel);
    }
}

function squares() {
    size = prompt('Select the amount of squares on a side \n\n(Maximum amount: 100)');

    if(size <= 100) {
        while (container.firstChild) {
            container.firstChild.remove();
        }
        for(i = 0; i < size; i++) {
            row = document.createElement('div');
            row.classList.add('container-row');
        
            container.appendChild(row);
            for(j = 0; j < size; j++) {
                let pixel = document.createElement('div');
                pixel.classList.add('row-item');
                
                pixel.addEventListener('mouseenter', function() {
                    pixel.classList.add('chocolate');
                })
        
                row.appendChild(pixel);
            }
        }
    } else {
        alert('Please enter value below 100');
    }
}





