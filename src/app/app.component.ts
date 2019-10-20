import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  inputTodo = "";
  inputDoing = "";
  inputDone = "";

  todo = ["todo1", "todo2", "todo3", "todo4"];

  doing = ["doing1", "doing2", "doing3", "doing4"];

  done = ["done1", "done2", "done3", "done4", "done5"];

  constructor(public dialog: MatDialog) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addJob(id: number) {
    console.log(id);
    if (id === 1 && this.inputTodo.length > 0) {
      this.todo.splice(this.todo.length, 0, this.inputTodo);
      this.inputTodo = "";
    } else if (id === 2 && this.inputDoing.length > 0) {
      this.doing.splice(this.doing.length, 0, this.inputDoing);
      this.inputDoing = "";
    } else if (id === 3 && this.inputDone.length > 0) {
      this.done.splice(this.done.length, 0, this.inputDone);
      this.inputDone = "";
    }
  }

  deleteJob(id: number, deleteValute: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const index =
      id === 1
        ? this.todo.findIndex(tmp => tmp === deleteValute)
        : id === 2
        ? this.doing.findIndex(tmp => tmp === deleteValute)
        : this.done.findIndex(tmp => tmp === deleteValute);
        console.log(result);
    if (index !== -1&&result===1) {
      if (id === 1) this.todo.splice(index, 1);
      else if (id === 2) this.doing.splice(index, 1);
      else this.done.splice(index, 1);
    }
    });


  }


}
