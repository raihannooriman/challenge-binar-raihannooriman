class App {
  constructor() {
    this.filterByDriver = document.getElementById("driver");
    this.filterByDate = document.getElementById("date");
    this.filterByTime = document.getElementById("time");
    this.filterByCapacity = document.getElementById("passanger");
    this.clearButton = document.getElementById("clear-btn");
    this.searchButton = document.getElementById("search-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();
    // Register click listener
    this.clearButton.onclick = this.clear;
    this.searchButton.onclick = this.run;
  }

  run = () => {
    this.clear();
    Car.list.forEach((car) => {
      let dateTime = this.filterByDate.value + "T" + this.filterByTime.value;
      let date = Date.parse(dateTime);
      let time = Date.parse(car.availableAt);
      let passanger = this.filterByCapacity.value;

      if (time >= date && car.capacity >= passanger) {
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
