export interface ZoteroLinkSettings {
    linkTemplate: string;
}

export const DEFAULT_SETTINGS: Partial<ZoteroLinkSettings> = {
    linkTemplate: '{{ title }}',
};
