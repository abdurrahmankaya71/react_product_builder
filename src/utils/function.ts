/**
 * Trims a string to a specified maximum length and appends an ellipsis if the string exceeds that length.
 *
 * @param {string} txt - The input string to be trimmed.
 * @param {number} [max=100] - The maximum allowed length of the string before trimming. Defaults to 100 if not specified.
 * @returns {string} The trimmed string with an ellipsis appended if it exceeded the maximum length.
 */
export function textSlicer(txt: string, max: number = 100) {
    if (txt.length >= max) {
        return `${txt.slice(0, max)}...`;
    }
    return txt;
}
