import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactUsComponent } from "./component/contact-us/contact-us.component";




const routes :Routes =[{ path :'' ,component :ContactUsComponent},{ path :'ContactUs' ,component :ContactUsComponent}]

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]


})

export class RoutingModule{


}