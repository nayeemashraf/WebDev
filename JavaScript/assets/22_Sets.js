//💡 Sets
// In ES6 two more data structures were introduced and that are sets and maps, that already exist in other programming languages. A set is basically just a collection of unique values. This implies a set can never have any duplicates, and that property makes them useful in certain situations. A Set can hold any data type.

// To create a new set, we write new set. And then we need to pass an iterable, and the most common iterable here is an array.
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

// Here we clearly see some duplicate strings. we can see it has a size of three, and the only values that are in there are pasta, pizza and risotto. All the duplicates are actually gone.

//?  Now also, we can see that a set kind of looks similar to an array And just like arrays, sets are also iterables. Now of course a set is still very different from an array, so first because its elements are unique, and second because the order of elements in the set is irrelevant.

// As we know strings are also iterables, so we can do this.
console.log(new Set("JavaScript"));
// We passed in a string, and we get a set with nine elements, so and that's the nine components basically of the string iterable.

// The set could also be empty just like this.
console.log(new Set());

// let's learn how to actually work with sets.

// We can get the size of a set with the size property.
console.log(ordersSet.size);

// In this particular example, this might be useful for the chef of our kitchen to know how many different meals are going to be cooked here. So, if this array here is an array of all the orders, then the set of these orders is simply the unique different meals that are going to be cooked and then the size is how many different meals will be cooked.

// We can check if a certain element is in a set.
console.log(ordersSet.has("Pizza")); //🔥 true
console.log(ordersSet.has("Bread")); //🔥 false

// We can also add new elements to a set. let's say this happened twice.
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);
// So, the Garlic Bread got added, but only one of them, because again, the set has to be unique, and so the second one was basically ignored.

// We can also delete elements
ordersSet.delete("Risotto");
console.log(ordersSet);

// Finally, with this method we can delete all of the elements of the set.
// ordersSet.clear();  // let's comment this so that we can work some more things with this set.

// We cannot retrieve values out of a set like we do in arrays because in sets there are actually no indexes. So, there's really no need for getting data out of a set. That's because if all values are unique and if their order does not matter, then there is no point of retrieving values out of a set.

// All we need to know is whether a certain value is in a set or not, and that's why we have the 'has()' method.
// If your goal is to actually store values in order and then retrieve it, then the best use case is to just use an array. You wouldn't use a set for that.

// Sets are also iterables and therefore we can loop over them.
for (const order of ordersSet) console.log(order);

// let's see a real-world use case of sets.
//⚡ In a normal code base, the main use case of a set is actually to remove duplicate values of arrays.
// So let's say that we have an array of all the staff in the restaurant.
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// But now let's say that for some reason we are interested in knowing only which different positions there are in our restaurant. Or in other words, we would basically like to have a unique array of this without all the duplicates. That will solve the problem.

// let's create a set for that.
const staffUnique_ = new Set(staff);
console.log(staffUnique_);

// So, we have a set now with waiter, chef and manager, the three unique positions. But this is not the final solution. We actually want this to be an array. The conversion from a set to an array is pretty easy because they are both iterables. Since the spread operator works on all iterables, including sets and So we can now create an array around this and then we can unpack this entire set using the spread operator, and then these elements will be put into the newly constructed array.
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// So, the spread operator here works just like on an array. It works really exactly the same. It takes all the elements out of the iterable and essentially writes them here like comma separated.

// Now, if we only wanted to know how many different positions there are, then the size property is very useful.
// And then we wouldn't even need to have to create the array at all. If we didn't need the unique array and all we wanted to know how many unique positions there are, then this would be the way to go:
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

// And the same could even be done with counting how many different letters there are in a string. Because a string is also an iterable.

// let's see how many different letters there are in this string.
console.log(new Set("jonasschmedtmann").size);

//💡 Sets vs Arrays
// Sets are not intended to replace arrays at all. So, whenever you need to store values in order and that might contain duplicates, always use arrays. That's also true when you need to manipulate data, because arrays have access to a lot of great array methods.
// Now, sets have this very useful property of being unique. However, they are not nearly as important as arrays, so keep sets in mind when you need to work with unique values. But besides that, you can just continue using arrays.
