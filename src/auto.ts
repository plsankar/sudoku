// Function to generate a random permutation of an array
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Generate a Sudoku grid using a random starting state
export function generateSudoku(): number[] {
    let cells: number[];
    let nums: number[];

    do {
        // Initialize a 1-dimensional array of length 81 with zeros
        cells = Array(81).fill(0);

        // Generate a random permutation of numbers 1 to 9
        nums = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        // Attempt to fill the cells with a recursive backtracking approach
    } while (!fillCells(cells, nums));
    return cells; // Return the completed Sudoku grid (1D array)
}

export const DIFFICULTY_EASY = "easy";
export const DIFFICULTY_MEDIUM = "medium";
export const DIFFICULTY_HARD = "hard";

export function prepareBoardForPlaying(
    cells: (number | null)[],
    difficulty: "easy" | "medium" | "hard" = DIFFICULTY_HARD
) {
    let visibleCells = 17;

    if (difficulty === DIFFICULTY_EASY) {
        visibleCells = 40;
    } else if (difficulty === DIFFICULTY_MEDIUM) {
        visibleCells = 30;
    }

    for (let i = 0; i < 81 - visibleCells; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * 81);
        } while (cells[randomIndex] === null);

        cells[randomIndex] = null;
    }

    return cells; // Return the completed Sudoku grid (1D array)
}

function fillCells(cells: number[], nums: number[]): boolean {
    // Find the next empty cell (cell with 0 value)
    const emptyIndex = cells.findIndex((cell) => cell === 0);
    if (emptyIndex === -1) {
        return true; // If no empty cells are found, the grid is filled successfully
    }

    // Try filling the cell with each number from shuffled nums array
    for (const num of nums) {
        if (isValidMove(cells, emptyIndex, num)) {
            // Assign the number to the cell
            cells[emptyIndex] = num;

            // Recursively attempt to fill the rest of the grid
            if (fillCells(cells, nums)) {
                return true; // If successful, return true
            }

            // If filling fails, backtrack by resetting the cell
            cells[emptyIndex] = 0;
        }
    }

    return false; // If no number can be placed, backtrack
}

function isValidMove(cells: number[], index: number, num: number): boolean {
    // Check if assigning num to cells[index] is valid

    // Extract row and column from index
    const row = Math.floor(index / 9);
    const col = index % 9;

    // Check if num is already in the same row
    for (let i = row * 9; i < (row + 1) * 9; i++) {
        if (cells[i] === num) {
            return false;
        }
    }

    // Check if num is already in the same column
    for (let i = col; i < 81; i += 9) {
        if (cells[i] === num) {
            return false;
        }
    }

    // Check if num is already in the 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (cells[i * 9 + j] === num) {
                return false;
            }
        }
    }

    return true; // If num can be placed in cells[index] without violating Sudoku rules
}
