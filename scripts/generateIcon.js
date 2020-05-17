const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const colors = require('colors');

const sourcePath = process.argv[2];
const destPath = process.argv[3];
const fileType = process.argv[4];

const iconTemplate = `${process.cwd()}/scripts/templates/IconTemplate.txt`;
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function convertPath(svg) {
  let path = svg.replace(/<svg[^>]+>/gi, '').replace(/<\/svg>/gi, '');
  const styleShaeReg = /<(path|rect|circle|polygon|line|polyline|g|ellipse).+>/gi;
  const styleReg = /fill=\"#\d{6}"|stroke=\"#\d{6}"/gi;
  path = path.replace(styleShaeReg, function (shape) {
    return shape.replace(styleReg, function (styleName) {
      return `:fill="color"`;
    });
  });
  return path
}

function extractViewBox(svg) {
  return svg.match(
    /viewBox="([-\d\.]+\s[-\d\.]+\s[-\d\.]+\s[-\d\.]+)"/
  )[1];
}

function run() {
  try {
    if (fs.existsSync(`${destPath}`)) {
      rimraf.sync(`${destPath}`);
    }
    fs.mkdirSync(`${destPath}`);
    console.log(colors.yellow('Reading directory', process.argv[2]));
    let files = fs.readdirSync(sourcePath);
    console.log(colors.green('Files', files));

    files = files.map((f) => path.normalize(f));
    files.forEach((filename) => {
      console.log(colors.yellow('Generating', filename));

      const name = path.basename(filename).split('.')[0];

      const svgContent = fs.readFileSync(`${sourcePath}/${filename}`, 'utf-8');

      const pathData = convertPath(svgContent)

      const viewBox = extractViewBox(svgContent)

      const data = {
        componentName: capitalizeFirstLetter(name),
        pathData,
        viewBox,
      };

      console.log(colors.red("DATA", data))

      const templateFile = fs.readFileSync(iconTemplate);

      const content = ejs.render(templateFile.toString(), data);

      fs.writeFileSync(
        `${destPath}/${capitalizeFirstLetter(name)}.${fileType}`,
        content,
        'utf-8'
      );
      console.log(
        colors.green(
          `Generated icon: ${capitalizeFirstLetter(name)}.${fileType}`
        )
      );
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
