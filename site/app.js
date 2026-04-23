(() => {
	const $ = s => document.querySelector(s);
	const el = (tag, attrs = {}, ...children) => {
		const n = document.createElement(tag);
		for (const [k, v] of Object.entries(attrs)) {
			if (k === "class") n.className = v;
			else if (k === "html") n.innerHTML = v;
			else n.setAttribute(k, v);
		}
		for (const c of children) {
			if (c == null) continue;
			n.append(typeof c === "string" ? document.createTextNode(c) : c);
		}
		return n;
	};

	let manifest = { raw: [], wiki: [], root: [] };
	let slugIndex = new Map(); // normalized slug → { dir, name }

	const normalize = s => s
		.toLowerCase()
		.replace(/^\d{4}-\d{2}-\d{2}--/, "")
		.replace(/\.md$/, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

	const GROUPS = [
		{
			key: "your-apps",
			label: "Your projects",
			match: f => /(alex-token|tryshowtime|drakula|10k-world|cta-fun|breakout-v1|breakout-v2|captcha-social)/.test(f),
			mark: "you",
		},
		{
			key: "context",
			label: "Context team",
			match: f => /(context-team|context-social-feed|context-markets|mint-fun|rug-fun|meme-market)/.test(f),
		},
		{
			key: "foundation",
			label: "Foundation Labs",
			match: f => /(rodeo-club)/.test(f),
		},
		{
			key: "launchpads",
			label: "Launchpads",
			match: f => /(pump-fun|believe-app|bags-fm|clout-me)/.test(f),
		},
		{
			key: "socialfi",
			label: "SocialFi apps",
			match: f => /(friend-tech|zora-co|giggles-app|frenzy-fun)/.test(f),
		},
		{
			key: "protocols",
			label: "Protocols",
			match: f => /(farcaster)/.test(f),
		},
		{
			key: "historical",
			label: "Historical precursors",
			match: f => /(2100-co|bitclout)/.test(f),
		},
		{
			key: "other",
			label: "Other",
			match: () => true,
		},
	];

	function groupFiles(files) {
		const groups = GROUPS.map(g => ({ ...g, files: [] }));
		const consumed = new Set();
		for (const f of files) {
			for (const g of groups) {
				if (consumed.has(f)) break;
				if (g.match(f)) {
					g.files.push(f);
					consumed.add(f);
					break;
				}
			}
		}
		return groups.filter(g => g.files.length > 0);
	}

	async function loadManifest() {
		try {
			const r = await fetch("/api/files");
			if (!r.ok) throw new Error("manifest fetch failed");
			manifest = await r.json();
		} catch (e) {
			manifest = { raw: [], wiki: [], root: [] };
			console.error(e);
		}
		buildSlugIndex();
		renderSidebar();
	}

	function buildSlugIndex() {
		slugIndex.clear();
		for (const f of manifest.raw || []) slugIndex.set(normalize(f), { dir: "raw", name: f });
		for (const f of manifest.wiki || []) slugIndex.set(normalize(f), { dir: "wiki", name: f });
		for (const f of manifest.root || []) slugIndex.set(normalize(f), { dir: "", name: f });
	}

	function resolveWikilink(text) {
		const want = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
		let best = null, bestScore = -1;
		for (const [slug, target] of slugIndex.entries()) {
			if (slug === want) return target;
			if (slug.includes(want) || want.includes(slug)) {
				const score = Math.min(slug.length, want.length) / Math.max(slug.length, want.length);
				if (score > bestScore) { best = target; bestScore = score; }
			}
		}
		return bestScore > 0.4 ? best : null;
	}

	function renderSidebar() {
		const list = $("#file-list");
		list.innerHTML = "";

		if ((manifest.wiki || []).length) {
			list.append(el("div", { class: "file-group" }, "wiki"));
			for (const f of manifest.wiki) {
				list.append(fileLink(`wiki/${f}`, f.replace(/\.md$/, "")));
			}
		}

		const groups = groupFiles(manifest.raw || []);
		for (const g of groups) {
			list.append(el("div", { class: "file-group" }, g.label));
			for (const f of g.files) {
				const label = f.replace(/^\d{4}-\d{2}-\d{2}--/, "").replace(/\.md$/, "");
				list.append(fileLink(`raw/${f}`, label, g.mark));
			}
		}

		attachSearch();
		highlightActive();
	}

	function fileLink(path, label, mark) {
		const a = el("a", { class: "file-link", href: "#" + path.replace(/\.md$/, "") }, label);
		if (mark) a.append(el("span", { class: "tag " + mark }, mark));
		return a;
	}

	function attachSearch() {
		const input = $("#search");
		input.addEventListener("input", () => {
			const q = input.value.trim().toLowerCase();
			for (const link of document.querySelectorAll(".file-link")) {
				link.style.display = !q || link.textContent.toLowerCase().includes(q) ? "" : "none";
			}
			for (const g of document.querySelectorAll(".file-group")) {
				let n = g.nextElementSibling;
				let hasVisible = false;
				while (n && !n.classList.contains("file-group")) {
					if (n.style.display !== "none") { hasVisible = true; break; }
					n = n.nextElementSibling;
				}
				g.style.display = hasVisible ? "" : "none";
			}
		});
	}

	function highlightActive() {
		const hash = location.hash.slice(1);
		for (const link of document.querySelectorAll(".file-link, .feature")) {
			const href = (link.getAttribute("href") || "").slice(1);
			link.classList.toggle("active", href === hash);
		}
	}

	function parseFrontmatter(md) {
		const m = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
		if (!m) return { frontmatter: null, body: md };
		return { frontmatter: m[1], body: m[2] };
	}

	function replaceWikilinks(body) {
		return body.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
			const text = inner.split("|")[0].trim();
			const target = resolveWikilink(text);
			if (target) {
				const href = `#${target.dir ? target.dir + "/" : ""}${target.name.replace(/\.md$/, "")}`;
				return `<a class="wikilink" href="${href}">${text}</a>`;
			}
			return `<a class="wikilink unresolved" href="#" title="no matching file">${text}</a>`;
		});
	}

	async function loadFile(path) {
		const content = $("#content");
		content.innerHTML = "Loading…";
		let url = path.endsWith(".md") ? path : path + ".md";
		try {
			const r = await fetch("/" + url, { cache: "no-store" });
			if (!r.ok) throw new Error(`${r.status}: ${url}`);
			const md = await r.text();
			const { frontmatter, body } = parseFrontmatter(md);
			const transformed = replaceWikilinks(body);
			const html = marked.parse(transformed);
			content.innerHTML = "";
			if (frontmatter) content.append(el("pre", { class: "frontmatter" }, frontmatter));
			const wrap = el("div");
			wrap.innerHTML = html;
			content.append(wrap);
			content.scrollTop = 0;
			$(".main").scrollTop = 0;
		} catch (e) {
			content.innerHTML = "";
			content.append(el("div", { class: "error" }, `Failed to load ${url}\n${e.message}`));
		}
	}

	function routeFromHash() {
		let hash = location.hash.slice(1);
		if (!hash) {
			hash = "wiki/idea-maze";
			history.replaceState(null, "", "#" + hash);
		}
		loadFile(hash);
		highlightActive();
	}

	window.addEventListener("hashchange", routeFromHash);

	(async () => {
		await loadManifest();
		routeFromHash();
	})();
})();
