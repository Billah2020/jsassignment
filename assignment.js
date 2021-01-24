  function kilometerToMeter(kilometer) {

      var meter = kilometer * 1000;

      return meter;
  }

  var totalMeter = kilometerToMeter(2.5);

  console.log(totalMeter);


  //  kilometerToMeter function complete





  //   hotelCost complete;


  // Hotel cost first 10 days rent 30 $
  //            Second 10 days rent 25$
  //            and 20 days plus rent  20$
  var duration = 25
  var days = 0;

  if (duration <= 10) {

      var rent = duration * 30;

      console.log(rent);
  } else if (duration <= 20) {
      var firstPart = 10 * 30;
      var remaining = duration - 10;
      var secondPart = remaining * 25;
      var totalRent = firstPart + secondPart;
      console.log(totalRent);
  } else {
      var firstPart = 10 * 30;
      var secondPart = 10 * 25;
      var restOf = duration - 20;
      var thirdPart = restOf * 20
      var hotelCost = firstPart + secondPart + thirdPart;
      console.log(hotelCost);
  }