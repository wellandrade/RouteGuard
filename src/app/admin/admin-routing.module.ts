import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormGuard } from '../auth/form-guard';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListComponent } from './list/list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    {
        path: '', component: WelcomeComponent, children: [
            {
                path: 'add-user',
                component: AddUserComponent
            },
            {
                path: 'add-product',
                canDeactivate: [FormGuard],
                component: AddProductComponent
            }, {
                path: 'show-list',
                component: ListComponent
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
