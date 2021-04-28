function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    return console.log(collection);
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["this is a", 2]);
pq.enqueue(["this is d", 3]);
pq.enqueue(["this is z", 1]);
pq.enqueue(["this is b", 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
