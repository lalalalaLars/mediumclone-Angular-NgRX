import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  tagName: string; // Property to store the name of the tag
  apiUrl: string; // Property to store the URL for the API call

  constructor(private route: ActivatedRoute) {}

  // Method to be executed when the component is initialized
  ngOnInit(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug'); // Get the tag name from the URL parameters
    this.apiUrl = `/articles?tag=${this.tagName}`; // Set the API URL using the tag name
  }
}
