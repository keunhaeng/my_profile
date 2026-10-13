// 외부 패키지 없이 Node.js 내장 http/fs 모듈만으로 만든 정적 파일 서버입니다.
// public/ 폴더의 파일을 그대로 응답하며, 디자인/기능은 전혀 건드리지 않습니다.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  const requestUrl = decodeURIComponent(req.url.split('?')[0]);
  const relativePath = requestUrl === '/' ? '/index.html' : requestUrl;

  const filePath = path.normalize(path.join(PUBLIC_DIR, relativePath));

  // public/ 밖의 경로 접근(경로 조작) 방지
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`로컬 서버 실행 중: http://localhost:${PORT}`);
});
