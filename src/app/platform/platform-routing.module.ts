import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { DiscoverComponent } from "./discover/discover.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "user",
        children: [
          {
            path: ":user",
            component: UserProfileComponent
          }
        ]
      },
      {
        path: "discover",
        component: DiscoverComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule {}
