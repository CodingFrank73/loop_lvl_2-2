
function stretch(value) {
    let x = ""
    if (value > 0) {
        for (let i = 1; i <= value; i++) {
            x += "o"
        }
    } else {
        x = ""
    }

    document.getElementById('result').innerHTML = `L${x}p`
}

function imageArray() {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        if (i < 10) {
            returnArray.push("image_00" + i);
        } else if (i >= 10 && i < 100) {
            returnArray.push("image_0" + i);
        } else {
            returnArray.push("image_" + i);
        }
    }
    console.log(returnArray);
}

imageArray();