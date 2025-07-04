const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        const spancolor = document.querySelectorAll('h1 span'); // Selecting spans inside h1

        spancolor.forEach((span, index) => {
            span.style.color = colors[index]; // Assigning each span a color from the array
        });

     