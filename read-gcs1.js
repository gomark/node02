/***
 * Need to export GOOGLE_APPLICATION_CREDENTIALS={location of json service account}
 */

const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket('putti-onboard-2019');    // Put your bucket here
const remoteFile = bucket.file('Onboard-2019-script.txt');  // Filename

async function main() {
    var response = await remoteFile.get();
    console.log(response[1]);
}

function testAsyncRead() {
    var line = "";
    remoteFile.createReadStream().on('data', function(data) {
        line += data;
    }).on('end', function() {
        console.log("done:" + line);
    });
}

testAsyncRead();

/* -- seems for node 10 only 
async function testRead() {
    var response = remoteFile.createReadStream();
    for await (const line of readLines({ response })) {
        console.log(line);
      }
} 
*/

