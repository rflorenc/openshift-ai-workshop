/* Fills the guides' placeholders with the participant's values, stored in this browser only.
 *   <USER_NAME> <PASSWORD> <CLUSTER_DOMAIN>  entered on the start page
 *   <GIT_SERVER>              derived: gitea-gitea.<CLUSTER_DOMAIN>
 *   <TRIMMED_CLUSTER_DOMAIN>  derived: <CLUSTER_DOMAIN> without the leading "apps."
 * Runs on every page load, also with instant navigation (document$). */
(function () {
  const KEY = "ws-values";
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const save = (v) => localStorage.setItem(KEY, JSON.stringify(v));

  function normaliseDomain(input) {
    // accept "apps.x.y", a console URL, or an OpenShift AI URL
    let d = (input || "").trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    const i = d.indexOf(".apps.");
    if (i >= 0) d = d.slice(i + 1);                 // console-openshift-console.apps.x → apps.x
    return d.toLowerCase();
  }

  function tokens(v) {
    const t = {};
    if (v.user) t["<USER_NAME>"] = v.user;
    if (v.password) t["<PASSWORD>"] = v.password;
    if (v.domain) {
      t["<CLUSTER_DOMAIN>"] = v.domain;
      t["<GIT_SERVER>"] = "gitea-gitea." + v.domain;
      t["<TRIMMED_CLUSTER_DOMAIN>"] = v.domain.replace(/^apps\./, "");
    }
    return t;
  }

  function replaceIn(root, t) {
    const keys = Object.keys(t);
    if (!keys.length) return;
    const re = new RegExp(keys.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
    // text nodes
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => { if (re.test(n.nodeValue)) { re.lastIndex = 0; n.nodeValue = n.nodeValue.replace(re, (m) => t[m]); } re.lastIndex = 0; });
    // links and images (raw or URL-encoded placeholders)
    root.querySelectorAll("[href],[src]").forEach((el) => {
      ["href", "src"].forEach((a) => {
        const v = el.getAttribute(a);
        if (!v) return;
        const dec = v.replace(/%3C([A-Z_]+)%3E/gi, "<$1>");
        if (re.test(dec)) { re.lastIndex = 0; el.setAttribute(a, dec.replace(re, (m) => t[m])); }
        re.lastIndex = 0;
      });
    });
    // code blocks where highlighting split a placeholder over several spans: fall back to plain text
    root.querySelectorAll("pre code").forEach((c) => {
      if (re.test(c.textContent)) { re.lastIndex = 0; c.textContent = c.textContent.replace(re, (m) => t[m]); }
      re.lastIndex = 0;
    });
  }

  function reminder(root, v) {
    const needs = /<(USER_NAME|PASSWORD|CLUSTER_DOMAIN|GIT_SERVER|TRIMMED_CLUSTER_DOMAIN)>/.test(root.textContent);
    if (!needs || (v.user && v.domain) || root.querySelector(".ws-reminder")) return;
    const home = document.querySelector(".md-header__button.md-logo")?.getAttribute("href") || "/";
    const div = document.createElement("div");
    div.className = "ws-reminder";
    div.innerHTML = 'This page has values for you to fill in (<code>&lt;USER_NAME&gt;</code>, <code>&lt;CLUSTER_DOMAIN&gt;</code>, …). ' +
      'Enter yours once on the <a href="' + home + '#your-values">start page</a> and they appear here.';
    root.prepend(div);
  }

  function bindForm() {
    const form = document.getElementById("ws-values-form");
    if (!form) return;
    const v = load();
    form.user.value = v.user || ""; form.password.value = v.password || ""; form.domain.value = v.domain || "";
    const status = form.querySelector(".ws-status");
    form.onsubmit = (e) => {
      e.preventDefault();
      const nv = { user: form.user.value.trim(), password: form.password.value, domain: normaliseDomain(form.domain.value) };
      form.domain.value = nv.domain;
      save(nv);
      status.textContent = "Saved: the guides now show your values.";
    };
    form.querySelector("button.clear").onclick = () => {
      localStorage.removeItem(KEY); form.reset(); status.textContent = "Cleared.";
    };
  }

  function run() {
    const article = document.querySelector(".md-content article") || document.querySelector(".md-content");
    if (!article) return;
    const v = load();
    bindForm();
    if (!document.getElementById("ws-values-form")) replaceIn(article, tokens(v));
    reminder(article, v);
  }

  if (window.document$) window.document$.subscribe(run);   // Material instant navigation
  else document.addEventListener("DOMContentLoaded", run);
})();
