import { runTypeChain, glob } from 'typechain'

async function main() {
  const cwd = process.cwd()
  // find all files matching the glob
  const allFiles = glob(cwd, [
    `!./artifacts/!(build-info)/**/*.dbg.json`,
    `./artifacts/!(build-info)/**/+([a-zA-Z0-9_]).json`,
  ])

  const result = await runTypeChain({
    cwd,
    filesToProcess: allFiles,
    allFiles,
    outDir: './src/scroll-contract-types',
    target: 'ethers-v6',
  })

  console.log(result)
  console.log('DONE!')
}

main().catch(console.error)
