import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTask } from '../task/task.model';
import { TaskService } from '../task';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() close = new EventEmitter<void>();
  @Input() userid!: string;
  private taskService = inject(TaskService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDuedate = '';

  //   enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDuedate = signal('');

  closedialog() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addNewTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        duedate: this.enteredDuedate,
      },
      this.userid
    );
    this.close.emit();
  }
}
