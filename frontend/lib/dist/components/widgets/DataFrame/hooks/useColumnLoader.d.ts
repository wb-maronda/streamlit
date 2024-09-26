import { Quiver } from "@streamlit/lib/src/dataframes/Quiver";
import { Arrow as ArrowProto } from "@streamlit/lib/src/proto";
import { BaseColumn, BaseColumnProps, ColumnCreator } from "@streamlit/lib/src/components/widgets/DataFrame/columns";
export declare const INDEX_IDENTIFIER = "_index";
export declare const COLUMN_POSITION_PREFIX = "_pos:";
export declare const COLUMN_WIDTH_MAPPING: {
    small: number;
    medium: number;
    large: number;
};
/**
 * Options to configure columns.
 *
 * This needs to be kept in sync with the ColumnConfig TypeDict in the backend.
 * This will be eventually replaced with a proto message.
 */
export interface ColumnConfigProps {
    label?: string;
    width?: "small" | "medium" | "large" | number;
    help?: string;
    hidden?: boolean;
    disabled?: boolean;
    required?: boolean;
    default?: number | string | boolean;
    alignment?: "left" | "center" | "right";
    type_config?: Record<string, unknown>;
}
/**
 * Apply the user-defined column configuration if supplied.
 *
 * @param columnProps - The column properties to apply the config to.
 * @param columnConfigMapping - The user-defined column configuration mapping.
 *
 * @return the column properties with the config applied.
 */
export declare function applyColumnConfig(columnProps: BaseColumnProps, columnConfigMapping: Map<string | number, ColumnConfigProps>): BaseColumnProps;
/**
 * Extracts the user-defined column configuration from the JSON config.
 *
 * @param configJson - the column config JSON from the proto.
 *
 * @returns the user-defined column configuration.
 */
export declare function getColumnConfig(configJson: string): Map<string, any>;
type ColumnLoaderReturn = {
    columns: BaseColumn[];
};
/**
 * Get the column type (creator class of column type) for the given column properties.
 *
 * @param column - The column properties.
 *
 * @returns the column creator of the corresponding column type.
 */
export declare function getColumnType(column: BaseColumnProps): ColumnCreator;
/**
 * Custom hook that handles loads and configures all table columns from the Arrow table.
 *
 * @param element - The proto message of the dataframe element
 * @param data - The Arrow data extracted from the proto message
 * @param disabled - Whether the widget is disabled
 *
 * @returns the columns and the cell content getter compatible with glide-data-grid.
 */
declare function useColumnLoader(element: ArrowProto, data: Quiver, disabled: boolean): ColumnLoaderReturn;
export default useColumnLoader;
