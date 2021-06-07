class MaxBinaryHeap {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent < element) {
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  //////Removing section. First e first and last value swap korte hobe
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    //console.log(end)
    this.sinkDown();

    return max;
  }
  //sinkDown method tarpor apply korte hobe
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    //console.log(element);
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[idx] = this.values[swap];
      //console.log(heap)
      this.values[swap] = element;

      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
