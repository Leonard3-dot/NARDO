/* IndexedDB persistence with a localStorage fallback. */
(() => {
  const DB_NAME = "personal-system-db", STORE = "state", KEY = "main";
  const fallback = "personal-system-state-v1";
  const openDB = () => new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) return reject(new Error("IndexedDB indisponible"));
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  window.PSStore = {
    async load() {
      try {
        const db = await openDB();
        return await new Promise((resolve, reject) => {
          const req = db.transaction(STORE, "readonly").objectStore(STORE).get(KEY);
          req.onsuccess = () => resolve(req.result || null);
          req.onerror = () => reject(req.error);
        });
      } catch (_) {
        try { return JSON.parse(localStorage.getItem(fallback) || "null"); } catch (_) { return null; }
      }
    },
    async save(value) {
      try {
        const db = await openDB();
        await new Promise((resolve, reject) => {
          const tx = db.transaction(STORE, "readwrite");
          tx.objectStore(STORE).put(value, KEY);
          tx.oncomplete = resolve; tx.onerror = () => reject(tx.error);
        });
      } catch (_) { localStorage.setItem(fallback, JSON.stringify(value)); }
    },
    async clear() {
      try {
        const db = await openDB();
        await new Promise((resolve, reject) => {
          const tx = db.transaction(STORE, "readwrite");
          tx.objectStore(STORE).delete(KEY);
          tx.oncomplete = resolve; tx.onerror = () => reject(tx.error);
        });
      } catch (_) { localStorage.removeItem(fallback); }
    }
  };
})();