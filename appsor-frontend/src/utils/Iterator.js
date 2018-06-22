class Iterator {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    let index = 0;
    // Return the iterator
    return {
      // `next` returns the next
      next: () => {
        const done = index >= this.length;
        const value = done ? undefined : this.data[++index];
        return { value, done };
      },
      // `prev` returns the previous
      prev: () => {
        const done = index === 0;
        const value = done ? undefined : this.data[--index];
        return { value, done };
      },
    };
  }
}

export default Iterator;
