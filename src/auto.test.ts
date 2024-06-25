// sum.test.js
import { expect, test } from "vitest";

import { checkIfBoardHasError } from "./utils";
import { generateSudoku } from "./auto";

test("sudoku generate", () => {
    const board = generateSudoku();
    expect(board ? checkIfBoardHasError(board) : true).toBe(false);
});
