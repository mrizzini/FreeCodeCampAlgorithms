function truncateString(str, num) {
console.log("A-tisket a-tasket A green and yellow basket".length);


  
  if (str.length > num && num < 3) {
    return (str.slice(0, num) + "...");
  } else if (str.length > num) {
    return (str.slice(0, (num-3)) + "...");
  } else {
  return str;
  }
}

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", 11);