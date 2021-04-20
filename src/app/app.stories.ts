import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

storiesOf('App component', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
    }),
  )
  .add('Overview', () => {
    return {
      component: AppComponent,
    };
  });
