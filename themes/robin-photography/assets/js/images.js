function _appendToColumn(columns, image) {
    const column = columns.reduce((shortestColumn, column) => {
        if (column.offsetHeight < shortestColumn.offsetHeight) {
            shortestColumn = column;
        }
        return shortestColumn;
    });

    column.appendChild(image);
}

export function makeImagesGalleries() {
    const imagesGalleries = document.getElementsByClassName("images");
    if (!imagesGalleries.length) return;

    const columnNumber = window.matchMedia("(min-width: 1000px)").matches ? 4 : 2;

    // handle several galleries in the same page
    for (const gallery of imagesGalleries) {
        const images = Array.prototype.slice.call(gallery.getElementsByClassName("image"));
        const columns = [];

        for (let index = 0; index < columnNumber; index++) {
            const column = document.createElement("div");
            column.className = "images-column";

            gallery.appendChild(column);
            columns.push(column);
        }

        for (const image of images) {
            _appendToColumn(columns, image);
        }
    }
}
