# Calculator Project - README

## Overview
This project is a fully functional web-based calculator that supports basic arithmetic operations, including addition, subtraction, multiplication, and division. It is designed to practice DOM manipulation, event handling, and JavaScript functions, providing users with an interactive tool for performing simple calculations.

## Features
1. **Basic Math Operations**:
   - Supports four fundamental operations: 
     - Addition (`+`)
     - Subtraction (`-`)
     - Multiplication (`*`)
     - Division (`/`)

2. **Operate Function**:
   - The `operate()` function takes two numbers and an operator, processes the calculation, and returns the result.

3. **Display**:
   - Displays the current number or the result of the operation.
   - The display updates dynamically as users input numbers or perform operations.

4. **Clear Button**:
   - A "clear" button resets the calculator, clearing any current input or result for a fresh start.

5. **Input Handling**:
   - Stores the first and second numbers input by the user and the selected operator for calculation.
   - After pressing `=`, the result of the operation is displayed, and the result becomes the first number for future operations.

6. **Error Handling**:
   - Prevents invalid operations, such as division by zero, and displays a custom error message to inform users of the issue.

7. **Decimal Point Support**:
   - Allows users to input floating-point numbers with a single decimal point.
   - Prevents users from entering multiple decimal points in a number (e.g., `12.3.4` is disallowed).

8. **Additional Features**:
   - **Backspace Button**: Allows users to remove the last entered digit or operator.
   - **Keyboard Support**: The calculator supports keyboard input, allowing users to type numbers and operators directly from the keyboard.
   - **Multiple Equals Button Presses**: When the `=` button is pressed consecutively, the calculator applies the same operation to the result, continuing the calculation with the previous result.
   - **EasterEgg**: Inserting the number `80085` directly and pressing `=` toggles darkmode.

## Technologies Used
- **JavaScript**: Used for handling logic, operations, event handling, and updating the display.
- **CSS**: Styles the layout and buttons for the calculator interface.
- **HTML**: Provides the basic structure of the calculator, including buttons and the display area.

## How to Run
1. Clone the project repository from GitHub.
2. Open the `index.html` file in a web browser to start using the calculator.
3. Enter numbers, select operators, and use the equal button to perform calculations.
