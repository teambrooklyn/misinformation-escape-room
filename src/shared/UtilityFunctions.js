//sets a local storage variable with an expiration
//from https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
export function setWithExpiry(key, value, ttl) {
	const now = new Date()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

//gets a local storage variable with expiration
//https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
export function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

//maps puzzle urls to map
export const mapping = new Map()
    .set("fTbAJ", 1)
    .set("wNLH7", 2)
    .set("isVl1", 3)
    .set("5NaJn", 4)
	.set("bSKAp", 5)

export const levelAndRoomDevice = new Map(
	[[1, "corkboard"], [2, "folder"], [3, "tablet"], [4, "computer"], [5, "whiteboard"]])


//from: https://www.w3schools.com/js/js_cookies.asp
export function GetCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
		return c.substring(name.length, c.length);
		}
	}
	return ""
}

export function SetCookie(cname, cvalue, seconds) {
	var d = new Date();
	d.setTime(d.getTime() + (seconds*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

export function logMetric(puzzleId, metricType, content) {
	var body = {
		PuzzleID: puzzleId,
		MetricType: metricType,
		Info: content
	}

    fetch(`${process.env.REACT_APP_API_URL}/game/metrics`, {
        method: 'post',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': GetCookie('auth')
        },
        body: JSON.stringify(body)
    })
    .then((response) => {
      if(response.status === 200) {
		console.log("metric logged sucessfully")
      } else {
        console.log("failed to log metric")
      }
    })
}

export const handleTextBoxChange = (e, numTB) => {
	numTB = numTB + 1
	const level = parseInt(getWithExpiry("level"))
	if(e.target.value !== "" && GetCookie("trackable") === "true") {
		console.log(level, "InputBox", numTB + " " + e.target.value.toLowerCase())
		logMetric(level, "InputBox", numTB + " " + e.target.value.toLowerCase())
	}
}

//source: https://notestoself.dev/posts/finding-if-two-rectangles-overlap-in-javascript/
export function rectanglesOverlap(topLeft1, bottomRight1, topLeft2, bottomRight2) {
	if (topLeft1[0] > bottomRight2[0] || topLeft2[0] > bottomRight1[0]) {
		return false;
	}
	if (topLeft1[1] > bottomRight2[1] || topLeft2[1] > bottomRight1[1]) {
		return false;
	}
	return true;
}
