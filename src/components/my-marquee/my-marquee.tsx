import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'my-marquee',
  styleUrl: 'my-marquee.css',
  shadow: true
})
export class MyMarquee {
  @Prop() dir: string = 'rtl'

  render() {
    return (
      <div class={this.dir === 'rtl' ? 'marquee marquee-rtl' : 'marquee marquee-ltr'}>
        <div>
          <slot/>
        </div>
      </div>
    )
  }
}
