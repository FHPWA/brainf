

/* Open the system file selector and upload a stream of chars with a filename for
each file
*/
function upload(files, targets){
    output = [];
    for(let index = 0, file; file = files[index]; index++){
        let reader = new FileReader();
        let contents = ""
        reader.readAsText(file, "UTF-8");
        reader.onload = function(event){
            document.getElementById(targets[index]).value = event.target.result;
        }
        output.push(file.name);
    }
    return output

}


/* Download a stream of chars and set a filename
*/
function download(filename, chars){
    let blob = new Blob([chars], {type: 'application/octet-stream'});
    let blobURL = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = filename;
    link.href = blobURL;
    link.style.display = "none"
    document.body.appendChild(link);
    link.click()
    document.body.removeAttributeNode(link)

}

/*
*/
function downloadBf(){
    download(document.getElementById("filename").value, document.getElementById("code").value)
}

function uploadBf(){
    fileData = upload(document.getElementById("files").files, ["code"])
    document.getElementById("filename").value = fileData[0];
}