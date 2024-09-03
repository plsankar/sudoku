import _ from "lodash";

export function isSameCol(index: number, target: number) {
    return getCol(index) === getCol(target);
}

export function isSameRow(index: number, target: number) {
    return getRow(index) === getRow(target);
}

export function isSameBlock(index: number, target: number) {
    return getBlockIndex(index) === getBlockIndex(target);
}

export function isSameValue(
    cells: (number | null)[],
    index: number,
    target: number
) {
    return cells[index] === cells[target];
}

export function getCol(index: number) {
    return index % 9;
}

export function getRow(index: number) {
    return Math.floor(index / 9);
}
export function getColumnValuesForThisCell(
    cells: (number | null)[],
    index: number
) {
    return _(cells)
        .map((cell, _index) => {
            if (isSameCol(_index, index)) return cell;
            return null;
        })
        .without(null)
        .value();
}

export function getRowValuesForThisCell(
    cells: (number | null)[],
    index: number
) {
    return _(cells)
        .map((cell, _index) => {
            if (isSameRow(_index, index)) return cell;
            return null;
        })
        .without(null)
        .value();
}

export function getBlockValuesForThisCell(
    cells: (number | null)[],
    index: number
) {
    return _(cells)
        .map((cell, _index) => {
            if (isSameBlock(_index, index)) return cell;
            return null;
        })
        .without(null)
        .value();
}

export function checkIfColumnHasError(cells: (number | null)[], index: number) {
    const cell = cells[index];
    const columnValues = getColumnValuesForThisCell(cells, index);
    const columnDupCount = columnValues.filter(
        (_cell) => cell === _cell
    ).length;

    return columnDupCount > 1;
}

export function checkIfRowHasError(cells: (number | null)[], index: number) {
    const cell = cells[index];
    const rowValues = getRowValuesForThisCell(cells, index);
    const rowDupCount = rowValues.filter((_cell) => cell === _cell).length;
    return rowDupCount > 1;
}

export function checkIfBlockHasError(cells: (number | null)[], index: number) {
    const cell = cells[index];
    const values = getBlockValuesForThisCell(cells, index);
    const dupCount = values.filter((_cell) => cell === _cell).length;
    return dupCount > 1;
}

export function getBlockIndex(i: number) {
    const row = Math.floor(i / 9);
    const col = i % 9;

    const boxRow = Math.floor(row / 3);
    const boxCol = Math.floor(col / 3);
    const boxIndex = boxRow * 3 + boxCol;

    return boxIndex;
}

export function checkIfBoardHasError(cells: (number | null)[]) {
    return (
        cells.filter((cell, index) => {
            if (!cell) return true;
            if (checkIfColumnHasError(cells, index)) return true;
            if (checkIfRowHasError(cells, index)) return true;
            if (checkIfBlockHasError(cells, index)) return true;
            return false;
        }).length > 0
    );
}
