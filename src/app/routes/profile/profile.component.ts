import { Component, OnInit } from "@angular/core";

@Component({
  selector: "profile",
  templateUrl: "profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  ngOnInit() {}
  getBackgroundImage(image: string) {
    // if (window.screen.width < 768) {
    //   return "url(../../../assets/images/responsive-" + image + ")";
    // } else return "url(../../../assets/images/" + image + ")";
  }
}
