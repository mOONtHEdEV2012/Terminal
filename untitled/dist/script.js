// Select the necessary elements
const inputField = document.getElementById('terminal-input');
const outputDiv = document.getElementById('output');
const nameTag = document.getElementById('name-tag');

// Mock function to get the PC name (or any identifier)
function getPCName() {
    // This is a placeholder. In a real environment, you'd use a backend service or Node.js
    // Here, we're going to mock it with a static name.
    return "User-PC";
}

// Set the PC's name tag in the terminal prompt
nameTag.textContent = getPCName() + "> ";

// Handle "Enter" key press
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = inputField.value.trim();
        if (input) {
            processCommand(input);
        }
        inputField.value = ''; // Clear the input field
    }
});

// Function to process the custom commands
function processCommand(command) {
    // Add the command to the terminal output
    addToTerminal(nameTag.textContent + command);

    // Process commands prefixed with !*
    const commandTokens = command.split(' ');

    switch (commandTokens[0]) {
        case '!*print':
            // Prints a message
            addToTerminal(commandTokens.slice(1).join(' '));
            break;

        case '!*add':
            // Adds two numbers (binary)
            const num1 = parseInt(commandTokens[1], 2);
            const num2 = parseInt(commandTokens[2], 2);
            const sum = (num1 + num2).toString(2);
            addToTerminal(`Result: ${sum}`);
            break;

        case '!*clear':
            // Clears the terminal
            outputDiv.innerHTML = '';
            break;

        case '!*pcinfo':
            // Mock system info display
            addToTerminal("PC Name: " + getPCName());
            addToTerminal("Operating System: Windows 10 (mocked)");
            addToTerminal("Memory: 16GB RAM (mocked)");
            addToTerminal("Processor: Intel Core i7 (mocked)");
            break;

        case '!*time':
            // Displays current time
            const now = new Date();
            addToTerminal(`Current Time: ${now.toLocaleTimeString()}`);
            break;

        case '!*multiply':
            // Multiplies two numbers (binary)
            const mul1 = parseInt(commandTokens[1], 2);
            const mul2 = parseInt(commandTokens[2], 2);
            const product = (mul1 * mul2).toString(2);
            addToTerminal(`Result: ${product}`);
            break;

        case '!*help':
            // Display available commands
            addToTerminal("Available Commands:");
            addToTerminal("!*print <message> - Prints a message");
            addToTerminal("!*add <binary1> <binary2> - Adds two binary numbers");
            addToTerminal("!*multiply <binary1> <binary2> - Multiplies two binary numbers");
            addToTerminal("!*clear - Clears the terminal");
            addToTerminal("!*pcinfo - Displays mock PC information");
            addToTerminal("!*time - Displays current time");
            break;

        default:
            addToTerminal("Unknown command. Type !*help for a list of commands.");
            break;
    }
}

// Function to display output in the terminal
function addToTerminal(message) {
    const newLine = document.createElement('div');
    newLine.textContent = message;
    outputDiv.appendChild(newLine);
    outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to the bottom
}