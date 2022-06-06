# Zotero Link

## Prerequisites

1. [ZotServer](https://github.com/MunGell/ZotServer) addon installed in your local Zotero application
2. [Zotero Bridge](https://github.com/vanakat/zotero-bridge) plugin installed in Obsidian

## Usage

When this plugin installed it adds new command to the Command Palette: `Zotero Link: Insert`.
Exact text of the link can be changed with template configuration in settings.

Following keywords are acceptable in the template:

* `{{ key }}` – Zotero item key
* `{{ title }}` – item title
* `{{ date.year }}` – publication year e.g. 2011
* `{{ date.month }}` – publication month  e.g. 10
* `{{ date.day }}` – publication day e.g. 31
* `{{ firstAuthor.fullName }}` – first author's full name
* `{{ firstAuthor.firstName }}` – first author's first name
* `{{ firstAuthor.lastName }}` – first author's last name
* `{% for author in authors %}{{ author.lastName}}, {{ author.firstName | first }}., {% endfor %}` – advanced use of template to output all authors

Template language is based on [Nunjucks](https://mozilla.github.io/nunjucks/templating.html#builtin-filters),
so its syntax and built-in filters are also available.

## License

MIT
