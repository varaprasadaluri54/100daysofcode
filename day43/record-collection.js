// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    albumTitle: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value == "") {
    delete records[id][prop];
  }
  if (prop == "albumTitle" && value != "") {
    console.log((records[id][prop] = value));
  }
  if (prop == "artist" && value != "") {
    console.log((records[id][prop] = value));
  }
  if (prop == "tracks" && value != "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      console.log((records[id][prop] = [value]));
    } else {
      console.log(records[id][prop].push(value));
    }
  }
  if (!records[id][prop] && prop == "artist" && value !== "") {
    console.log((records[id][prop] = value));
  }
  console.log(records[id]);

  return records;
}

updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
