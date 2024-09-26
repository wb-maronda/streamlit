import { Theme as GlideTheme, SpriteMap } from "@glideapps/glide-data-grid";
type CustomThemeReturn = {
    theme: Partial<GlideTheme>;
    tableBorderRadius: string;
    headerIcons: SpriteMap;
};
/**
 * Creates a glide-data-grid compatible theme based on our theme configuration.
 *
 * @return a glide-data-grid compatible theme.
 */
declare function useCustomTheme(): CustomThemeReturn;
export default useCustomTheme;
