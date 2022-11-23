const fs = require('fs');
const yaml = require('js-yaml');
const urlFile = process.argv[2];
const outFile = './test.txt';

try {
    // remove file
    fs.unlink(outFile, (err) => {
        if (err) throw err;
    })

    // read yaml file
    let yamls = fs.readFileSync(urlFile, 'utf-8');
        yamls = yaml.load(yamls);

    // for
    for (const yaml of yamls) {
        let yaml_domain = yaml['domain'];

        yaml_domain = yaml_domain.replace(/(.+)/g,'$1\n')
        fs.appendFileSync(outFile, yaml_domain, { flag: 'a+' }, err => {
            if (err) throw err;
        });
    }
} catch (err) {
    console.error(err.message);
}
