import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        FEDAN by
        <a href="#" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Authors</a>
    </div>`
})
export class AppFooter { }
