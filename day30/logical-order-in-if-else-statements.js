function orderMyLogic(val) {
  if (val < 10) {
    if (val < 5) {
      return "Less than 5";
    } else {
      return "Less than 10";
    }
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
