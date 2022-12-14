'use strict';

module.exports = (stat, weakEtag) => {
  let time;
  try {
    time = stat.mtime.toISOString();
  } catch (e) {
    time = new Date().toISOString();
  }

  let etag = `"${[stat.ino, stat.size, time].join('-')}"`;
  if (weakEtag) {
    etag = `W/${etag}`;
  }
  return etag;
};
