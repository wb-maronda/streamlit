/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BaseGridCell, Theme as GlideTheme, GridCell, GridColumn, LoadingCell, TextCell } from "@glideapps/glide-data-grid";
import { Moment } from "moment";
import "moment-duration-format";
import "moment-timezone";
import { EmotionTheme } from "@streamlit/lib/src/theme";
import { Type as ArrowType } from "@streamlit/lib/src/dataframes/Quiver";
/**
 * Interface used for defining the properties (configuration options) of a column.
 * These options can also be used to overwrite from user-defined column config.
 */
export interface BaseColumnProps {
    readonly id: string;
    readonly name: string;
    readonly title: string;
    readonly indexNumber: number;
    readonly arrowType: ArrowType;
    readonly isEditable: boolean;
    readonly isHidden: boolean;
    readonly isIndex: boolean;
    readonly isStretched: boolean;
    readonly isRequired?: boolean;
    readonly width?: number;
    readonly help?: string;
    readonly columnTypeOptions?: Record<string, any>;
    readonly contentAlignment?: "left" | "center" | "right";
    readonly defaultValue?: string | number | boolean;
    readonly themeOverride?: Partial<GlideTheme>;
    readonly icon?: string;
}
/**
 * The interface that is implemented by any column type.
 */
export interface BaseColumn extends BaseColumnProps {
    readonly kind: string;
    readonly sortMode: "default" | "raw" | "smart";
    validateInput?(data?: any): boolean | any;
    getCell(data?: any, validate?: boolean): GridCell;
    getCellValue(cell: GridCell): any | null;
}
/**
 * A type that describes the function signature used to create a column based on
 * some column properties.
 */
export type ColumnCreator = {
    (props: BaseColumnProps, theme: EmotionTheme): BaseColumn;
    readonly isEditableType: boolean;
};
/**
 * Interface used for indicating if a cell contains an error.
 */
interface ErrorCell extends TextCell {
    readonly isError: true;
}
/**
 * Returns a cell with an error message.
 *
 * @param errorMsg: A short error message to use as display value.
 * @param errorDetails: The full error message to show when the user
 *                     clicks on a cell.
 *
 * @return a read-only GridCell object that can be used by glide-data-grid.
 */
export declare function getErrorCell(errorMsg: string, errorDetails?: string): ErrorCell;
/**
 * Returns `true` if the given cell contains an error.
 * This can happen if the value type is not compatible with
 * the given value type.
 */
export declare function isErrorCell(cell: GridCell): cell is ErrorCell;
interface CellWithTooltip extends BaseGridCell {
    readonly tooltip: string;
}
/**
 * Returns `true` if the given cell has a tooltip
 */
export declare function hasTooltip(cell: BaseGridCell): cell is CellWithTooltip;
/**
 * Interface used for indicating if a cell contains no value.
 */
interface MissingValueCell extends BaseGridCell {
    readonly isMissingValue: true;
}
/**
 * Returns `true` if the given cell contains no value (-> missing value).
 * For example, a number cell that contains null is interpreted as a missing value.
 */
export declare function isMissingValueCell(cell: BaseGridCell): cell is MissingValueCell;
/**
 * Returns an empty cell.
 */
export declare function getEmptyCell(missingCell?: boolean): LoadingCell;
/**
 * Returns an empty text cell.
 *
 * @param readonly: If true, returns a read-only version of the cell.
 * @param faded: If true, returns a faded version of the cell.
 *
 * @return a GridCell object that can be used by glide-data-grid.
 */
export declare function getTextCell(readonly: boolean, faded: boolean): TextCell;
/**
 * Converts from our BaseColumn format to the glide-data-grid compatible GridColumn.
 */
export declare function toGlideColumn(column: BaseColumn): GridColumn;
/**
 * Merges the default column parameters with the user-defined column parameters.
 *
 * @param defaultParams - The default column parameters.
 * @param userParams - The user-defined column parameters.
 *
 * @returns The merged column parameters.
 */
export declare function mergeColumnParameters(defaultParams: Record<string, any> | undefined | null, userParams: Record<string, any> | undefined | null): Record<string, any>;
/**
 * Converts the given value of unknown type to an array without
 * the risks of any exceptions.
 *
 * @param data - The value to convert to an array.
 *
 * @returns The converted array or an empty array if the value cannot be interpreted as an array.
 */
export declare function toSafeArray(data: any): any[];
/**
 * Converts the given value of unknown type to a string without
 * the risks of any exceptions.
 *
 * @param data - The value to convert to a string.
 *
 * @return The converted string or a string showing the type of the object as fallback.
 */
export declare function toSafeString(data: any): string;
/**
 * Converts the given value of unknown type to a boolean without
 * the risks of any exceptions.
 *
 * @param value - The value to convert to a boolean.
 *
 * @return The converted boolean, null if the value is empty or undefined if the
 *         value cannot be interpreted as a boolean.
 */
export declare function toSafeBoolean(value: any): boolean | null | undefined;
/**
 * Converts the given value of unknown type to a number without
 * the risks of any exceptions.
 *
 * @param value - The value to convert to a number.
 *
 * @returns The converted number or null if the value is empty or undefined or NaN if the
 *          value cannot be interpreted as a number.
 */
export declare function toSafeNumber(value: any): number | null;
/**
 * Formats the given number to a string based on a provided format or the default format.
 *
 * @param value - The number to format.
 * @param format - The format to use. If not provided, the default format is used.
 * @param maxPrecision - The maximum number of decimals to show. This is only used by the default format.
 *                     If not provided, the default is 4 decimals and trailing zeros are hidden.
 *
 * @returns The formatted number as a string.
 */
export declare function formatNumber(value: number, format?: string | undefined, maxPrecision?: number | undefined): string;
/**
 * Formats the given date to a string with the given format.
 *
 * @param momentDate The moment date to format.
 * @param format The format to use.
 *   If the format is `locale` the date will be formatted according to the user's locale.
 *   If the format is `relative` the date will be formatted as a relative time (e.g. "2 hours ago").
 *   Otherwise, it is interpreted as momentJS format string: https://momentjs.com/docs/#/displaying/format/
 * @returns The formatted date as a string.
 */
export declare function formatMoment(momentDate: Moment, format: string): string;
/**
 * Converts the given value of unknown type to a date without
 * the risks of any exceptions.
 *
 * Note: Unix timestamps are only supported in seconds.
 *
 * @param value - The value to convert to a date.
 *
 * @returns The converted date or null if the value cannot be interpreted as a date.
 */
export declare function toSafeDate(value: any): Date | null | undefined;
/**
 * Count the number of decimals in a number.
 *
 * @param {number} value - The number to count the decimals for.
 *
 * @returns {number} The number of decimals.
 */
export declare function countDecimals(value: number): number;
/**
 * Truncates a number to a specified number of decimal places without rounding.
 *
 * @param {number} value - The number to be truncated.
 * @param {number} decimals - The number of decimal places to preserve after truncation.
 *
 * @returns {number} The truncated number.
 *
 * @example
 * truncateDecimals(3.14159265, 2); // returns 3.14
 * truncateDecimals(123.456, 0); // returns 123
 */
export declare function truncateDecimals(value: number, decimals: number): number;
/**
 * Removes all line breaks from the given text.
 * @param text - The text to remove line breaks from.
 * @returns The text without line breaks.
 */
export declare function removeLineBreaks(text: string): string;
/**
 * Determines the correct value to display in a link cell based on the `href` and `regexPattern` parameters.
 *
 * @param href - The raw url value.
 * @param displayTextRegex - The regex pattern which will be applied to the `href`. If no match is found, then we return the `href`.
 * @returns - The string value to be displayed in the cell.
 *
 * * @example
 * const regex = new RegExp("https:\/\/(.*?)\.streamlit\.app")
 * const regex2 = new RegExp("https:\/\/roadmap\.(.*?)\.app")
 * getLinkDisplayValueFromRegex(regex, "https://roadmap.streamlit.app"); // returns "roadmap"
 * getLinkDisplayValueFromRegex(regex, "https://roadmap.streamlit.app"); // returns "streamlit"
 */
export declare function getLinkDisplayValueFromRegex(displayTextRegex: RegExp, href?: string | null): string;
export {};
