import {Editor, Plugin} from 'obsidian';
import {ZoteroLinkSettingTab} from "./ZoteroLinkSettingTab";
import {DEFAULT_SETTINGS, ZoteroLinkSettings} from "./ZoteroLinkSettings";
import {pluginApi} from '@vanakat/plugin-api';
import {ZoteroItem} from '@vanakat/zotero-bridge';
import { renderString } from 'nunjucks';


export class ZoteroLink extends Plugin {

    settings: ZoteroLinkSettings;

    async onload() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());

        this.addSettingTab(new ZoteroLinkSettingTab(this.app, this));

        this.addCommand({
            id: 'zotero-link-insert',
            name: 'Insert',
            editorCallback: async (editor: Editor) => {
                pluginApi('ZoteroBridge').v1().search().then((item: ZoteroItem) => {
                    editor.replaceRange(this.getLinkTemplate(item), editor.getCursor());
                })
            }
        });
    }

    async saveSettings(newSettings: Partial<ZoteroLinkSettings>) {
        Object.assign(this.settings, newSettings);
        await this.saveData(this.settings);
    }

    getLinkTemplate(item: ZoteroItem) {
        return `[${renderString(this.settings.linkTemplate, item.getValues())}](zotero://select/library/items/${item.getKey()})`;

    }
}
