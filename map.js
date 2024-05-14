{
  const arrayNumbers = [2, 4, 65, 24, 56, 24];

  //arrowFunction//
  const makeDouble = numberItem => numberItem * 2;
  console.log(makeDouble);


  const arrayEmpty = [];
  for (const item of arrayNumbers) {
    //console.log(item);
    const result = makeDouble(item);
    console.log(result);
    arrayEmpty.push(result);
  }
  console.log(arrayEmpty);
}

{
  newArrayNumber = [23, 12, 21, 45, 3, 4, 5]

  const newArrayNumberValueDouble = newArrayNumberValue => newArrayNumberValue * 2;

  const newNumberArray = [];
  for (individualValue of newArrayNumber) {
    const individualResult = newArrayNumberValueDouble(individualValue);
    newNumberArray.push(individualResult);
  }
  console.log(newNumberArray);

}

// MAP //
{
  const arrayNumbers = [12, 4, 6, 5, 3];

  arrayNumbers.map(singleNumber => singleNumber * 3);

  arrayNumbers.map(singleNumber => console.log(singleNumber * 3));


  // We need to get it to be returned, for that we need to assign it into a variable //

  const arrayNumbersTripple = arrayNumbers.map(singleNumber => singleNumber * 3);
  console.log(arrayNumbersTripple);

}


{
  const studentRollArray = [12, 32, 45, 34, 21];
  const studentNewRollArray = studentRollArray.map(studentRoll => studentRoll + 10);
  console.log(studentNewRollArray);

}


{
  ageStudentArray = [12, 4, 67, 34, 32, 5, 3];
  const ageStudentNewArray = ageStudentArray.map(eachStudentAge => eachStudentAge + 3);
  console.log(ageStudentNewArray);

}

{
  const friends = ['ali', 'abul', 'habul', 'kabul', 'mana', 'baha', 'sana', 'sara'];
  const nameCounter = friends.map(friend => friend.length);
  console.log(nameCounter);

}


{
  const products = [
    { name: 'bottle', price: 20, color: 'blue' },
    { name: 'table', price: 230, color: 'dark' },
    { name: 'book', price: 120, color: 'blue' },
    { name: 'shirt', price: 200, color: 'green' },
  ]


  products.map(product => console.log(product))
  products.map(product => console.log(product.name))
  products.map(product => console.log(product.color))
  products.map(product => console.log(product.price))

  const productBlue = products.map(product => product.color == 'blue')
  console.log(productBlue);
  
}