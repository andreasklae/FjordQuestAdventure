function column(content, className = "") {
    return `
        <div class="column-container ${className}" style="display: flex; flex-direction: column; gap: 0px;">
            ${content}
        </div>
    `;
}

function row(content, className = "") {
    return `
        <div class="row-container ${className}" style="display: flex; flex-direction: row; gap: 10px;">
            ${content}
        </div>
    `;
}