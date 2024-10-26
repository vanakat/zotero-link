# Zotero Link

## Prerequisites

### Zotero >= 7

Enable Local API feature in settings: `Settings > Advanced > Allow other applications on this computer to communicate with Zotero`

### Zotero <= 6

Install Zotero addon [ZotServer](https://github.com/MunGell/ZotServer)

## Installation

Install [zotero-bridge](https://github.com/vanakat/zotero-bridge) and this plugin from Obsidian Community Plugins settings screen.

## Usage

When this plugin installed it adds new command to the Command Palette: `Zotero Link: Insert`.
You can add a keyboard shortcut for this command in Obsidian settings.

Exact text of the link can be changed with template configuration in plugin settings.

Following keywords are acceptable in the template:

* `{{ key }}` – Zotero item key
* `{{ title }}` – item title
* `{{ shortTitle }}` – item short title
* `{{ date.year }}` – publication year e.g. 2011
* `{{ date.month }}` – publication month  e.g. 10
* `{{ date.day }}` – publication day e.g. 31
* `{{ firstAuthor.fullName }}` – first author's full name
* `{{ firstAuthor.firstName }}` – first author's first name
* `{{ firstAuthor.lastName }}` – first author's last name
* `{% for author in authors %}{{ author.lastName}}, {{ author.firstName | first }}., {% endfor %}` – advanced use of template to output all authors

Template language is based on [Nunjucks](https://mozilla.github.io/nunjucks/templating.html#builtin-filters),
so its syntax and built-in filters are also available.

There is also a good [video review and demonstration](https://www.youtube.com/watch?v=44vV7Tr484Q) of the plugin, made by Curtis McHale.

## License

MIT
