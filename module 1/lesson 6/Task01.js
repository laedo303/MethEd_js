'use strict'

for (let i = 1; i <= 10; i++) {
  console.log("Число", i)
  for (let y = 1; y <= 10; y++) {
    const res = (i ** y)
    console.log(`Число ${i} в степени ${y} =`, res)
  }
}