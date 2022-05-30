import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: Array<any> = [];

  constructor() {
    this.tasks = [
      { title: "Milk", status: "open" },
      { title: "Eggs", status: "open" },
      { title: "Pancake Mix", status: "open" }
    ];
  }

  addTask() {
    let theNewTask: string = prompt("New Task");
    if (theNewTask !== "") {
      this.tasks.push({ title: theNewTask, status: "open" });
    }
  }

  markAsDone(slidingItem, task) {
    task.status = "done";
    slidingItem.close();
  }

  removeTask(slidingItem, task) {
    task.status = "removed";
    // Include code to remove the task element of the array tasks
    this.tasks = this.tasks.filter(value => value !== task);
    slidingItem.close();
  }
}
