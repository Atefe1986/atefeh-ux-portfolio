// Prints the built /resume page to public/atefeh-etemadipour-resume.pdf (and
// into dist/ when present, so the current build ships it without a rebuild).
// Usage: npm run pdf  (runs the build first, then this script)
import { spawn, spawnSync } from 'node:child_process'
import { copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import puppeteer from 'puppeteer'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const PORT = 4180
const OUTPUT = path.join(root, 'public', 'atefeh-etemadipour-resume.pdf')

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: root,
  stdio: 'pipe',
  shell: process.platform === 'win32',
})

try {
  await new Promise((resolve, reject) => {
    server.stdout.on('data', (chunk) => {
      if (chunk.toString().includes('http')) resolve()
    })
    server.on('error', reject)
    server.on('exit', (code) => reject(new Error(`vite preview exited with code ${code}`)))
    setTimeout(() => reject(new Error('vite preview did not start within 15s')), 15_000)
  })

  const browser = await puppeteer.launch({ channel: 'chrome' }).catch(() => puppeteer.launch())
  const page = await browser.newPage()
  await page.goto(`http://localhost:${PORT}/atefeh-ux-portfolio/resume`, {
    waitUntil: 'networkidle0',
  })
  await page.evaluate(() => document.fonts.ready)
  // Let the entrance animation settle so nothing prints mid-fade
  await new Promise((resolve) => setTimeout(resolve, 800))

  await page.pdf({
    path: OUTPUT,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', right: '11mm', bottom: '12mm', left: '11mm' },
  })
  await browser.close()

  const distCopy = path.join(root, 'dist', 'atefeh-etemadipour-resume.pdf')
  if (existsSync(path.join(root, 'dist'))) copyFileSync(OUTPUT, distCopy)

  console.log(`PDF written to ${OUTPUT}`)
} finally {
  if (process.platform === 'win32') {
    // shell:true wraps vite in a cmd process — kill the whole tree
    spawnSync('taskkill', ['/pid', String(server.pid), '/T', '/F'])
  } else {
    server.kill()
  }
}
