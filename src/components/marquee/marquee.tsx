import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'marquee',
  styleUrl: 'marquee.css',
  shadow: true
})
export class Marquee {
  @Prop() first: string
  @Prop() last: string

  render() {
    return (
      <div class="marquee-left">
        <span>Hello, World! I'm {this.first} {this.last}</span>
      </div>
    )
  }
}
