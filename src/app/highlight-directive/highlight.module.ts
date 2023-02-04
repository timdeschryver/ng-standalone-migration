import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    imports: [HighlightDirective],
    exports: [HighlightDirective]
})
export class HighlightModule {}
