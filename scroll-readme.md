import ScrollAnimation from 'react-animate-on-scroll';
<ScrollAnimation animateIn="fadeIn">
  Some Text
</ScrollAnimation>


import Reveal from 'react-reveal/Reveal';.

<Reveal effectOut="fadeOutLeft" effect="fadeInUp">
  <p>Markup that will be revealed on scroll</p>
</Reveal>

imp 
react-reveal overrides a duration and delay of a custom effect (sets it to 1000 milliseconds by default) so you would need set the duration and delay prop if you want to customize it.