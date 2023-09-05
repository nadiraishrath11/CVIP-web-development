document.addEventListener('DOMContentLoaded', () =>
 {
    const runButton = document.getElementById('run-button');
    const editor = document.getElementById('editor');
    const output = document.getElementById('output');

    runButton.addEventListener('click', () => {
        const code = editor.value;
        try {
            // Use eval() for simplicity, but be cautious with this in a production environment.
            const result = eval(code);
            output.innerHTML = `Output: ${result}`;
        } catch (error) {
            output.innerHTML = `Error: ${error.message}`;
        }
    });
});