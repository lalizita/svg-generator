const ejs = require('ejs')
const path = require('path')
const fs = require('fs');
const rimraf = require('rimraf')
const colors = require('colors');

const sourcePath = process.argv[2]
const destPath = process.argv[3]
const fileType = process.argv[4]
const iconTemplate = `${process.cwd()}/scripts/templates/IconTemplate.txt`
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function run() {
  try {
    if (fs.existsSync(`${destPath}`)) {
      rimraf.sync(`${destPath}`)
    }
    fs.mkdirSync(`${destPath}`)
    console.log(colors.yellow("Reading directory", process.argv[2]))
    let files = fs.readdirSync(sourcePath)
    files = files.map(f => path.normalize(f))
    files.forEach((filename) => {
      console.log(colors.yellow("Generating", filename))

      let name = path.basename(filename).split('.')[0]
      let svgContent = fs.readFileSync(`${sourcePath}/${filename}`, 'utf-8')

      let viewBoxMatch = svgContent.match(
        /viewBox="([-\d\.]+\s[-\d\.]+\s[-\d\.]+\s[-\d\.]+)"/
      )[1]

      let dAttr = /.+\sd="(.+)"\s.+/g.exec(svgContent)[1]
      const data = {
        componentName: capitalizeFirstLetter(name),
        pathData: dAttr,
        viewBox: viewBoxMatch,
      }
      let templateFile = fs.readFileSync(iconTemplate)

      const content = ejs.render(templateFile.toString(), data)

      fs.writeFileSync(
        `${destPath}/${capitalizeFirstLetter(name)}.${fileType}`,
        content,
        'utf-8'
      )
      console.log(
        colors.green(`Generated icon: ${capitalizeFirstLetter(name)}.${fileType}`)
      )
    });
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

run()