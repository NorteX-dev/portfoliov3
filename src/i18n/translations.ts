export const locales = ["en", "pl"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

const en = {
	meta: {
		description: "Beautiful websites coded with love.",
		ogLocale: "en_US",
	},
	copied: "Copied to clipboard!",
	nav: {
		about: "About",
		projects: "Projects",
		contact: "Contact",
		cta: "Let's talk",
		switchLocaleLabel: "Polski",
	},
	hero: {
		titleLead: "Websites and projects that",
		flipWords: ["perform.", "astonish.", "scale.", "just work."],
		description:
			"Full-stack developer building fast, functional products: landing pages, dashboards, Discord bots and the libraries behind them.",
		primaryCta: "See my work",
	},
	about: {
		eyebrow: "About",
		title: "Let's make the web beautiful.",
		introBefore: "I'm an experienced ",
		introEmphasis: "full-stack web developer",
		introAfter: " focused on precisely crafted interfaces without compromising on performance.",
		body: "Forums, dashboards, blogs, hosting panels, Discord tooling: if it lives on the web, I've probably built something like it, and I'm always open to building yours.",
		groups: {
			frontend: "Frontend",
			languages: "Languages",
			backend: "Backend and infra",
		},
		linuxAdministration: "Linux administration",
	},
	projects: {
		eyebrow: "Selected work",
		title: "My Projects",
		description:
			"Client sites, commercial Discord bots and open-source tooling.",
		showMore: (count: number) => `Show ${count} more ${count === 1 ? "project" : "projects"}`,
		tags: {
			website: "Website",
			fullStack: "Full-stack",
			eCommerce: "E-commerce",
			wordpress: "WordPress",
			discordBot: "Discord bot",
			payments: "Payments",
			openSource: "Open source",
			typescript: "TypeScript",
			client: "Client",
			previewUnavailable: "Preview unavailable",
		},
		items: {
			lightstore: "A storefront platform for selling software and digital products.",
			realms: "Landing page for realms.host along with a WordPress-based blog system.",
			lsbot: "Ticketing and payment handling Discord bot sold on BuiltByBit.",
			omegalicensing: "License management bot sold on BuiltByBit.",
			nconfig: "A standardized way to write type-safe, validated configs.",
			products: "Resource market for your members, or sell your own.",
			nhandler: "Discord bot command and event handling utility.",
			kangaroov3: "Helped with the hero and code clean-up.",
			akatzuki: "Client order, NFT project website.",
			katocraft: "Client order, CS:GO Katowice 2014 sticker search.",
		},
	},
	contact: {
		titleLines: ["Ready to work", "on your project?"],
		description: "Reach out on Discord or by email, or join the Light Services community.",
		copyDiscord: "Copy Discord @nortex",
		joinLightServices: "Join Light Services",
	},
	footer: {
		tagline: "Beautiful websites coded with love.",
		services: "Services",
		connect: "Connect",
		email: "Email",
		builtWith: "Built with",
		and: "and",
	},
};

export type Translations = typeof en;

const polishPlural = (count: number, one: string, few: string, many: string) => {
	if (count === 1) return one;
	const lastDigit = count % 10;
	const lastTwoDigits = count % 100;
	return lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14) ? few : many;
};

const pl: Translations = {
	meta: {
		description: "Piękne strony internetowe tworzone z pasją.",
		ogLocale: "pl_PL",
	},
	copied: "Skopiowano do schowka!",
	nav: {
		about: "O mnie",
		projects: "Projekty",
		contact: "Kontakt",
		cta: "Kontakt",
		switchLocaleLabel: "English",
	},
	hero: {
		titleLead: "Strony i projekty, które",
		flipWords: ["robią wrażenie.", "zachwycają.", "się skalują.", "po prostu działają."],
		description:
			"Full-stack developer tworzący szybkie, funkcjonalne produkty: strony internetowe, panele, boty Discord i biblioteki, które za nimi stoją.",
		primaryCta: "Zobacz moje prace",
	},
	about: {
		eyebrow: "O mnie",
		title: "Uczyńmy sieć piękniejszą.",
		introBefore: "Jestem doświadczonym ",
		introEmphasis: "full-stack web developerem",
		introAfter:
			", który skupia się na precyzyjnie dopracowanych interfejsach bez kompromisów w kwestii wydajności.",
		body: "Fora, dashboardy, blogi, panele hostingowe, narzędzia dla Discorda: jeśli coś działa w sieci, prawdopodobnie zbudowałem już coś podobnego i chętnie zbuduję też Twój projekt.",
		groups: {
			frontend: "Frontend",
			languages: "Języki",
			backend: "Backend i infrastruktura",
		},
		linuxAdministration: "Administracja Linuxem",
	},
	projects: {
		eyebrow: "Wybrane prace",
		title: "Moje projekty",
		description:
			"Strony dla klientów, komercyjne boty Discord i narzędzia open source.",
		showMore: (count: number) =>
			`Pokaż ${count} ${polishPlural(count, "kolejny projekt", "kolejne projekty", "kolejnych projektów")}`,
		tags: {
			website: "Strona",
			fullStack: "Full-stack",
			eCommerce: "E-commerce",
			wordpress: "WordPress",
			discordBot: "Bot Discord",
			payments: "Płatności",
			openSource: "Open source",
			typescript: "TypeScript",
			client: "Klient",
			previewUnavailable: "Podgląd niedostępny",
		},
		items: {
			lightstore: "Platforma sklepowa do sprzedaży oprogramowania i produktów cyfrowych.",
			realms: "Strona główna realms.host wraz z systemem bloga opartym na WordPressie.",
			lsbot: "Bot Discord do obsługi zgłoszeń i płatności, sprzedawany na BuiltByBit.",
			omegalicensing: "Bot do zarządzania licencjami, sprzedawany na BuiltByBit.",
			nconfig: "Ustandaryzowany sposób pisania typowanych, walidowanych konfiguracji.",
			products: "Rynek zasobów dla członków Twojej społeczności lub sprzedaż własnych produktów.",
			nhandler: "Narzędzie do obsługi komend i zdarzeń w botach Discord.",
			kangaroov3: "Pomoc przy sekcji hero i porządkowaniu kodu.",
			akatzuki: "Zlecenie klienta, strona projektu NFT.",
			katocraft: "Zlecenie klienta, wyszukiwarka naklejek CS:GO Katowice 2014.",
		},
	},
	contact: {
		titleLines: ["Porozmawiajmy", "o Twoim projekcie."],
		description: "Napisz do mnie na Discordzie lub mailowo albo dołącz do społeczności Light Services.",
		copyDiscord: "Skopiuj Discord @nortex",
		joinLightServices: "Dołącz do Light Services",
	},
	footer: {
		tagline: "Piękne strony internetowe tworzone z pasją.",
		services: "Usługi",
		connect: "Kontakt",
		email: "E-mail",
		builtWith: "Zbudowane w",
		and: "i",
	},
};

const translations: Record<Locale, Translations> = { en, pl };

export const toLocale = (value: string | undefined): Locale =>
	locales.find((locale) => locale === value) ?? defaultLocale;

export const getTranslations = (value: string | undefined) => translations[toLocale(value)];
