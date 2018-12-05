import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html'
})
export class ProjectListingComponent {
  public title: string = "RCN Software";

  public projects = [
    {
      title: "First project",
      status: "In build",
    },
    {
      title: "Second project",
      status: "UAT",
    },
    {
      title: "Third project",
      status: "Queued",
    }];
}
