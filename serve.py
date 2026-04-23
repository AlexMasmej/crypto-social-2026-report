#!/usr/bin/env python3
"""Tiny HTTP server for the crypto-social wiki.

Serves the vault directory (so /raw/*.md and /wiki/*.md are reachable) and
adds one extra endpoint:

    GET /api/files  ->  JSON listing of current raw/, wiki/ and root .md files

Run:
    python3 serve.py [port]

Then open: http://localhost:8080/
"""

import json
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

VAULT = os.path.dirname(os.path.abspath(__file__))


def list_md(subdir: str):
	path = os.path.join(VAULT, subdir) if subdir else VAULT
	if not os.path.isdir(path):
		return []
	out = []
	for name in sorted(os.listdir(path)):
		if not name.endswith(".md"):
			continue
		# skip README files in root listing so they don't double-up
		if not subdir and name.upper() in ("README.MD", "AGENTS.MD"):
			continue
		out.append(name)
	return out


class Handler(SimpleHTTPRequestHandler):
	def do_GET(self):
		if self.path.rstrip("/") == "":
			self.send_response(302)
			self.send_header("Location", "/site/")
			self.end_headers()
			return
		if self.path == "/api/files":
			body = json.dumps({
				"raw": list_md("raw"),
				"wiki": list_md("wiki"),
				"root": list_md(""),
			}, indent=2).encode("utf-8")
			self.send_response(200)
			self.send_header("Content-Type", "application/json; charset=utf-8")
			self.send_header("Content-Length", str(len(body)))
			self.send_header("Cache-Control", "no-store")
			self.end_headers()
			self.wfile.write(body)
			return
		return super().do_GET()

	def log_message(self, fmt, *args):
		# slightly tidier than the default
		sys.stderr.write(f"[serve] {self.address_string()} - {fmt % args}\n")


def main():
	os.chdir(VAULT)
	port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
	addr = ("127.0.0.1", port)
	print(f"[serve] vault: {VAULT}")
	print(f"[serve] open:  http://localhost:{port}/")
	print(f"[serve] quit:  ctrl-c")
	try:
		ThreadingHTTPServer(addr, Handler).serve_forever()
	except KeyboardInterrupt:
		print("\n[serve] bye")


if __name__ == "__main__":
	main()
