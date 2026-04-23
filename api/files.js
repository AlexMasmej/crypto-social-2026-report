const fs = require("fs");
const path = require("path");

// In Vercel serverless functions the working directory varies; resolve from __dirname.
const ROOT = path.resolve(__dirname, "..");

function listMd(subdir) {
	const dir = subdir ? path.join(ROOT, subdir) : ROOT;
	if (!fs.existsSync(dir)) return [];
	const stat = fs.statSync(dir);
	if (!stat.isDirectory()) return [];
	const skip = new Set(["README.MD", "AGENTS.MD"]);
	return fs
		.readdirSync(dir)
		.filter((name) => name.toLowerCase().endsWith(".md"))
		.filter((name) => subdir || !skip.has(name.toUpperCase()))
		.sort();
}

module.exports = (req, res) => {
	const data = {
		raw: listMd("raw"),
		wiki: listMd("wiki"),
		root: listMd(""),
	};
	res.setHeader("Content-Type", "application/json; charset=utf-8");
	res.setHeader("Cache-Control", "no-store");
	res.status(200).send(JSON.stringify(data, null, 2));
};
